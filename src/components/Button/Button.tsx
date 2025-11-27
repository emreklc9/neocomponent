import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Buton varyantı
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /**
   * Buton boyutu
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Tam genişlik buton
   */
  fullWidth?: boolean;
  /**
   * Yükleniyor durumu
   */
  loading?: boolean;
  /**
   * Buton içeriği
   */
  children: React.ReactNode;
  /**
   * Özel CSS sınıfı
   */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const buttonClasses = [
    'neo-button',
    `neo-button--${variant}`,
    `neo-button--${size}`,
    fullWidth && 'neo-button--full-width',
    loading && 'neo-button--loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="neo-button-spinner" aria-hidden="true">
          <svg
            className="neo-button-spinner-svg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="neo-button-spinner-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="2s"
                values="0 32;16 16;0 32;0 32"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                values="0;-16;-32;-32"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </span>
      )}
      <span className={loading ? 'neo-button-content--loading' : 'neo-button-content'}>
        {children}
      </span>
    </button>
  );
};

export default Button;

