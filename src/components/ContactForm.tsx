'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import { Input, Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const STORAGE_KEY = 'elite_roofing_contact_form'

interface FormData {
  name: string
  email: string
  phone: string
  roofType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  roofType: '',
  message: '',
}

function validate(formData: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!formData.name.trim()) {
    errors.name = 'Your full name is required'
  }
  if (!formData.email.trim()) {
    errors.email = 'Email address is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!formData.message.trim()) {
    errors.message = 'Please describe your project or question'
  }
  return errors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [firstName, setFirstName] = useState('')

  // Restore saved form data from localStorage on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as FormData
        setFormData(parsed)
      }
    } catch {
      // localStorage may be unavailable in certain contexts
    }
  }, [])

  // Persist form data to localStorage on every change
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    } catch {
      // Silently ignore storage failures
    }
  }, [formData])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user corrects it
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Scroll to first error
      const firstErrorField = document.querySelector('[data-has-error="true"]')
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Capture first name before clearing state for the success message
    const capturedFirstName = formData.name.split(' ')[0] || 'there'

    // Simulate a network request with a realistic delay
    await new Promise<void>((resolve) => setTimeout(resolve, 1500))

    // Clear persisted form data on successful submission
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }

    setIsSubmitting(false)
    setFirstName(capturedFirstName)
    setIsSuccess(true)
  }

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center text-center py-20 px-8 min-h-[480px]"
        >
          {/* Animated checkmark circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 180, damping: 18 }}
            className="relative w-24 h-24 mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-[#b59b74]/10" />
            <div className="absolute inset-2 rounded-full bg-[#b59b74]/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#b59b74]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#8c6d41] mb-3">
              Inquiry Received
            </p>
            <h3 className="font-serif text-3xl font-bold text-[#0f172a] mb-4">
              Thank You, {firstName}.
            </h3>
            <p className="font-sans text-sm text-[#64748b] leading-relaxed max-w-sm mx-auto mb-8">
              A member of the Elite Roofing team will review your project details and reach
              out within one business day. We look forward to speaking with you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-[#e7e5e4]">
              <a
                href="tel:+19055550198"
                className="flex items-center gap-2 font-sans text-sm text-[#0f172a] hover:text-[#b59b74] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#b59b74]" />
                (905) 555-0198
              </a>
              <a
                href="mailto:info@eliteroofingon.ca"
                className="flex items-center gap-2 font-sans text-sm text-[#0f172a] hover:text-[#b59b74] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#b59b74]" />
                info@eliteroofingon.ca
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div data-has-error={!!errors.name}>
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Margaret Thornton"
                error={errors.name}
                autoComplete="name"
                required
              />
            </div>
            <div data-has-error={!!errors.email}>
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="margaret@email.com"
                error={errors.email}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone + Service Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(905) 555-0100"
              autoComplete="tel"
              helperText="Optional, for faster follow-up"
            />

            {/* Native select styled to match Input component */}
            <div className="w-full">
              <label
                htmlFor="roofType"
                className="block font-sans text-xs font-medium tracking-wider uppercase text-[#0f172a] mb-2"
              >
                Service Type
              </label>
              <div className="relative">
                <select
                  id="roofType"
                  name="roofType"
                  value={formData.roofType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-[#e7e5e4] font-sans text-sm text-[#0f172a] focus:outline-none focus:border-[#b59b74] focus:ring-2 focus:ring-[#b59b74]/20 hover:border-[#b59b74]/50 transition-all duration-200 appearance-none cursor-pointer pr-10"
                >
                  <option value="">Select a service...</option>
                  <option value="residential">Residential Roofing</option>
                  <option value="commercial">Commercial Roofing</option>
                  <option value="repair">Roof Repair</option>
                  <option value="storm">Storm Damage Restoration</option>
                  <option value="gutters">Gutter Systems</option>
                  <option value="skylights">Skylight Installation</option>
                  <option value="other">Other / Not Sure</option>
                </select>
                {/* Custom chevron */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div data-has-error={!!errors.message}>
            <Textarea
              label="Project Details"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your roofing project, property type, any immediate concerns, and the best time to reach you..."
              error={errors.message}
              required
            />
          </div>

          {/* Footer row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2">
            <p className="font-sans text-xs text-[#94a3b8]">
              ✦ Your information is kept 100% private and secure.
            </p>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={
                isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )
              }
              iconPosition={isSubmitting ? 'left' : 'right'}
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
