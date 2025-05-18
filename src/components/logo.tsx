'use client'

import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.jpeg"
      alt="CONVERGED SERVICES Logo"
      className={clsx(className, 'h-20 w-auto object-contain')}
      style={{ borderRadius: '0.5rem' }}
    />
  )
}

