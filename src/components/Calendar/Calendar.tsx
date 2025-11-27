import React, { useState } from 'react';
import './Calendar.css';

export interface CalendarProps {
  /**
   * Seçili tarih
   */
  selectedDate?: Date;
  /**
   * Tarih seçildiğinde çağrılacak callback
   */
  onDateSelect?: (date: Date) => void;
  /**
   * Minimum seçilebilir tarih
   */
  minDate?: Date;
  /**
   * Maximum seçilebilir tarih
   */
  maxDate?: Date;
  /**
   * Takvim görünümü (month, week, day)
   */
  view?: 'month' | 'week' | 'day';
  /**
   * Başlangıç hafta günü (0 = Pazar, 1 = Pazartesi)
   */
  weekStartsOn?: 0 | 1;
  /**
   * Özel CSS sınıfı
   */
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  weekStartsOn = 1,
  className = '',
}) => {
  const [viewingDate, setViewingDate] = useState(selectedDate || new Date());

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const dayNames = weekStartsOn === 1
    ? ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
    : ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    let startingDayOfWeek = firstDay.getDay();
    if (weekStartsOn === 1) {
      startingDayOfWeek = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
    }

    const days: (Date | null)[] = [];
    
    // Önceki ayın son günleri
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Mevcut ayın günleri
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isDateSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const goToPreviousMonth = () => {
    setViewingDate(new Date(viewingDate.getFullYear(), viewingDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setViewingDate(new Date(viewingDate.getFullYear(), viewingDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setViewingDate(today);
    if (onDateSelect) {
      onDateSelect(today);
    }
  };

  const days = getDaysInMonth(viewingDate);

  return (
    <div className={`neo-calendar ${className}`}>
      <div className="neo-calendar-header">
        <button 
          className="neo-calendar-nav-button"
          onClick={goToPreviousMonth}
          aria-label="Önceki ay"
        >
          ‹
        </button>
        <div className="neo-calendar-title">
          <span className="neo-calendar-month">
            {monthNames[viewingDate.getMonth()]}
          </span>
          <span className="neo-calendar-year">
            {viewingDate.getFullYear()}
          </span>
        </div>
        <button 
          className="neo-calendar-nav-button"
          onClick={goToNextMonth}
          aria-label="Sonraki ay"
        >
          ›
        </button>
      </div>

      <div className="neo-calendar-weekdays">
        {dayNames.map((day, index) => (
          <div key={index} className="neo-calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="neo-calendar-days">
        {days.map((date, index) => {
          if (!date) {
            return <div key={index} className="neo-calendar-day empty" />;
          }

          const disabled = isDateDisabled(date);
          const selected = isDateSelected(date);
          const today = isToday(date);

          return (
            <button
              key={index}
              className={`neo-calendar-day ${selected ? 'selected' : ''} ${today ? 'today' : ''} ${disabled ? 'disabled' : ''}`}
              onClick={() => handleDateClick(date)}
              disabled={disabled}
              aria-label={`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="neo-calendar-footer">
        <button 
          className="neo-calendar-today-button"
          onClick={goToToday}
        >
          Bugün
        </button>
      </div>
    </div>
  );
};

export default Calendar;

