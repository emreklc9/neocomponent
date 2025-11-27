import React, { useState, useEffect, useRef } from 'react';
import './VideoSlider.css';

export interface SlideItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  topic: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
}

export interface VideoSliderProps {
  /**
   * Slide listesi
   */
  slides?: SlideItem[];
  /**
   * Otomatik oynatma
   */
  autoPlay?: boolean;
  /**
   * Geçiş süresi (saniye)
   */
  transitionDuration?: number;
  /**
   * Yükseklik
   */
  height?: string;
  /**
   * Overlay opaklığı (0-1)
   */
  overlayOpacity?: number;
  /**
   * Başlık rengi
   */
  titleColor?: string;
  /**
   * Açıklama rengi
   */
  descriptionColor?: string;
  /**
   * Buton arka plan rengi
   */
  buttonColor?: string;
  /**
   * Buton metin rengi
   */
  buttonTextColor?: string;
  /**
   * Konu rengi
   */
  topicColor?: string;
  /**
   * Aktif progress bar rengi
   */
  progressBarColor?: string;
  /**
   * Pasif progress bar rengi
   */
  inactiveProgressBarColor?: string;
  /**
   * Özel CSS sınıfı
   */
  className?: string;
}

export const VideoSlider: React.FC<VideoSliderProps> = ({
  slides = [
    {
      id: '1',
      title: 'Başlık 1',
      description: 'Açıklama metni buraya gelecek',
      buttonText: 'Keşfet',
      buttonLink: '#',
      topic: '01 About Us',
      mediaType: 'image',
      mediaUrl: ''
    },
    {
      id: '2',
      title: 'Başlık 2',
      description: 'Açıklama metni buraya gelecek',
      buttonText: 'Keşfet',
      buttonLink: '#',
      topic: '02 Pilot Training',
      mediaType: 'image',
      mediaUrl: ''
    },
    {
      id: '3',
      title: 'Başlık 3',
      description: 'Açıklama metni buraya gelecek',
      buttonText: 'Keşfet',
      buttonLink: '#',
      topic: '03 Cabin Training',
      mediaType: 'image',
      mediaUrl: ''
    },
    {
      id: '4',
      title: 'Başlık 4',
      description: 'Açıklama metni buraya gelecek',
      buttonText: 'Keşfet',
      buttonLink: '#',
      topic: '04 Other Training',
      mediaType: 'image',
      mediaUrl: ''
    },
    {
      id: '5',
      title: 'Başlık 5',
      description: 'Açıklama metni buraya gelecek',
      buttonText: 'Keşfet',
      buttonLink: '#',
      topic: '05 Training Device',
      mediaType: 'image',
      mediaUrl: ''
    }
  ],
  autoPlay = true,
  transitionDuration = 5,
  height = '600px',
  overlayOpacity = 0.3,
  titleColor = '#ffffff',
  descriptionColor = '#ffffff',
  buttonColor = '#E30613',
  buttonTextColor = '#ffffff',
  topicColor = '#ffffff',
  progressBarColor = '#E30613',
  inactiveProgressBarColor = '#ffffff',
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying] = useState(autoPlay);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Progress bar animasyonu ve otomatik slide geçişi
  useEffect(() => {
    // Önceki interval'i temizle
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }

    if (isPlaying && transitionDuration > 0 && slides.length > 0) {
      // Progress'i sıfırla
      setProgress(0);
      
      // Progress bar animasyonu - her 50ms'de bir güncelle (daha smooth)
      const intervalMs = 50;
      const totalDuration = transitionDuration * 1000; // Toplam süre (ms)
      
      let startTime = Date.now();
      
      progressIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const calculatedProgress = Math.min((elapsed / totalDuration) * 100, 100);
        
        setProgress(calculatedProgress);
        
        if (calculatedProgress >= 100) {
          // Progress tamamlandığında bir sonraki slide'a geç
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
          }
          
          setTimeout(() => {
            setCurrentSlide((prevSlide) => {
              const nextSlide = (prevSlide + 1) % slides.length;
              return nextSlide;
            });
          }, 50); // Kısa bir gecikme ile geçiş yap
        }
      }, intervalMs);

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      };
    }
  }, [isPlaying, transitionDuration, currentSlide, slides.length]);

  // Slide değiştiğinde progress'i sıfırla ve animasyonu yeniden başlat
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  // Video kontrolü - tüm video referansları için
  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef && slides[index]?.mediaType === 'video') {
        if (index === currentSlide && isPlaying && autoPlay) {
          videoRef.play().catch(console.error);
        } else {
          videoRef.pause();
        }
      }
    });
  }, [isPlaying, autoPlay, currentSlide, slides]);

  const handleSlideClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(index);
    setProgress(0);
  };

  const currentSlideData = slides[currentSlide] || slides[0];

  if (!currentSlideData || slides.length === 0) {
    return (
      <div className={`neo-video-slider neo-video-slider--empty ${className}`} style={{ height }}>
        <div className="neo-video-slider-empty-state">
          <div className="neo-video-slider-empty-icon">🎬</div>
          <p className="neo-video-slider-empty-title">Video Slider</p>
          <p className="neo-video-slider-empty-text">Slide'lar ekleyerek başlayın</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`neo-video-slider ${className}`}
      style={{
        height,
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Arka Plan - Resim veya Video */}
      {currentSlideData.mediaType === 'video' && currentSlideData.mediaUrl ? (
        <video
          ref={(ref) => {
            videoRefs.current[currentSlide] = ref;
          }}
          src={currentSlideData.mediaUrl}
          className="neo-video-slider-media neo-video-slider-video"
          loop
          muted
          playsInline
        />
      ) : currentSlideData.mediaUrl ? (
        <div
          className="neo-video-slider-media neo-video-slider-image"
          style={{
            backgroundImage: `url(${currentSlideData.mediaUrl})`
          }}
        />
      ) : (
        <div className="neo-video-slider-media neo-video-slider-placeholder" />
      )}

      {/* Overlay */}
      <div
        className="neo-video-slider-overlay"
        style={{
          backgroundColor: '#000000',
          opacity: overlayOpacity
        }}
      />

      {/* İçerik - Sol Orta */}
      <div className="neo-video-slider-content">
        <div className="neo-video-slider-content-inner">
          {/* Başlık */}
          <h1
            className="neo-video-slider-title"
            style={{
              color: titleColor
            }}
          >
            {currentSlideData.title}
          </h1>

          {/* Açıklama */}
          <p
            className="neo-video-slider-description"
            style={{
              color: descriptionColor
            }}
          >
            {currentSlideData.description}
          </p>

          {/* Button */}
          {currentSlideData.buttonText && (
            <a
              href={currentSlideData.buttonLink}
              className="neo-video-slider-button"
              onClick={(e) => {
                if (currentSlideData.buttonLink === '#') {
                  e.preventDefault();
                }
              }}
              style={{
                backgroundColor: buttonColor,
                color: buttonTextColor
              }}
            >
              {currentSlideData.buttonText}
            </a>
          )}
        </div>
      </div>

      {/* Alt Kısım - Navigation Bar */}
      <div className="neo-video-slider-navigation">
        <div className="neo-video-slider-navigation-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="neo-video-slider-nav-item"
              onClick={(e) => handleSlideClick(index, e)}
            >
              {/* Progress Bar */}
              <div className="neo-video-slider-progress-bar">
                <div
                  className="neo-video-slider-progress-fill"
                  style={{
                    width: index === currentSlide ? `${progress}%` : index < currentSlide ? '100%' : '0%',
                    backgroundColor: index === currentSlide ? progressBarColor : inactiveProgressBarColor
                  }}
                />
              </div>

              {/* Konu */}
              <div
                className="neo-video-slider-topic"
                style={{
                  color: topicColor,
                  opacity: index === currentSlide ? 1 : 0.7
                }}
              >
                {slide.topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
