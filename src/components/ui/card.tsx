
'use client'

import { cn } from 'lyrax/lib/utils'
import { forwardRef } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-100',
      elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }