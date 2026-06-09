import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {

  const baseStyles =
  'px-8 py-3.5 rounded-full font-normal text-base transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-[#CAA96A] text-black hover:bg-[#d4b97f] hover:shadow-[0_0_20px_rgba(202,169,106,0.25)] hover:scale-[1.02]',
    secondary:
      'border border-white/20 text-white bg-transparent hover:bg-white/5 hover:border-white/30 hover:scale-[1.02]'
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}