import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const baseInputClasses = [
  'w-full px-4 py-3.5',
  'bg-white border border-[#e7e5e4]',
  'font-sans text-[#0f172a] text-sm placeholder:text-[#94a3b8]',
  'transition-all duration-200',
  'focus:outline-none focus:border-[#b59b74] focus:ring-2 focus:ring-[#b59b74]/20',
  'hover:border-[#b59b74]/50',
].join(' ')

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-sans text-xs font-medium tracking-wider uppercase text-[#0f172a] mb-2"
          >
            {label}
            {props.required && <span className="text-[#b59b74] ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={[
            baseInputClasses,
            error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : '',
            className,
          ]
            .join(' ')
            .trim()}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500 font-sans">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-xs text-[#64748b] font-sans">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-sans text-xs font-medium tracking-wider uppercase text-[#0f172a] mb-2"
          >
            {label}
            {props.required && <span className="text-[#b59b74] ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={5}
          className={[
            baseInputClasses,
            'resize-none',
            error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : '',
            className,
          ]
            .join(' ')
            .trim()}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500 font-sans">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-xs text-[#64748b] font-sans">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
