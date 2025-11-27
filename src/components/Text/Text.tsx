import React from 'react';
import './Text.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Metin boyutu
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /**
   * Metin ağırlığı
   */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /**
   * Metin rengi
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted';
  /**
   * HTML etiketi (p, span, div, h1-h6, etc.)
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  /**
   * Metin hizalaması
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Metin içeriği
   */
  children: React.ReactNode;
  /**
   * Özel CSS sınıfı
   */
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'normal',
  color = 'default',
  as = 'p',
  align = 'left',
  children,
  className = '',
  ...props
}) => {
  const Component = as;
  
  const textClasses = [
    'neo-text',
    `neo-text--${size}`,
    `neo-text--${weight}`,
    `neo-text--${color}`,
    `neo-text--align-${align}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

export default Text;

