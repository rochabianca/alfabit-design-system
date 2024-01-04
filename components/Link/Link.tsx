import React from 'react'

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = ({children, href, disabled, className, ...props}: LinkProps) => {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={`text-primary aria-disabled:text-disabled ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link