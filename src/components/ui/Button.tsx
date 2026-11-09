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
    'bg-[#D0000F] text-white border-2 border-[#D0000F] hover:bg-[#A5000A] hover:border-[#A5000A] shadow-sm hover:shadow-md rounded-md',
  secondary:
    'bg-[#0f172a] text-white border-2 border-[#0f172a] hover:bg-[#1e293b] hover:border-[#1e293b] shadow-sm hover:shadow-md rounded-md',
  outline:
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0f172a] rounded-md',
  ghost:
    'bg-transparent text-[#D0000F] border-2 border-transparent hover:border-[#D0000F] hover:bg-[#D0000F]/5 rounded-md',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-3 text-base',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-5 text-base',
}

function getClasses(variant: ButtonVariant, size: ButtonSize, className?: string, disabled?: boolean) {
  return [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-semibold transition-all duration-300',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#041D35] focus-visible:ring-offset-2',
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
