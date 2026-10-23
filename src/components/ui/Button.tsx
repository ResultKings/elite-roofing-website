'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  type?: undefined
  onClick?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#b59b74] text-[#0f172a] border-2 border-[#b59b74] hover:bg-[#9a8260] hover:border-[#9a8260] shadow-sm hover:shadow-md rounded-full',
  secondary:
    'bg-[#0f172a] text-white border-2 border-[#0f172a] hover:bg-[#1e293b] hover:border-[#1e293b] shadow-sm hover:shadow-md rounded-full',
  outline:
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0f172a] rounded-full',
  ghost:
    'bg-transparent text-[#b59b74] border-2 border-transparent hover:border-[#b59b74] hover:bg-[#b59b74]/5 rounded-full',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm tracking-wide',
  md: 'px-7 py-3 text-sm tracking-wider',
  lg: 'px-9 py-4 text-base tracking-widest',
}

function getClasses(variant: ButtonVariant, size: ButtonSize, className?: string, disabled?: boolean) {
  return [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-medium uppercase transition-all duration-300',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b59b74] focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    className ?? '',
  ]
    .join(' ')
    .trim()
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const classes = getClasses(variant, size, className, disabled)

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (props.href !== undefined) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.15 }}
        className="inline-block"
      >
        <Link href={props.href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.15 }}
      type={props.type ?? 'button'}
      disabled={disabled}
      onClick={props.onClick}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
