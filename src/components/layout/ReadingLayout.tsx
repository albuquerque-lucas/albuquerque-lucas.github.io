import type { PropsWithChildren } from 'react'

import { cn } from '../../lib/cn'

type ReadingLayoutProps = PropsWithChildren<{ className?: string }>

export function ReadingLayout({ className, children }: ReadingLayoutProps) {
  return (
    <div className={cn('w-full lg:grid lg:grid-cols-12 lg:gap-x-0', className)}>
      <div aria-hidden className="hidden lg:flex lg:col-span-1 lg:justify-end lg:pr-4">
        <span className="h-full w-px bg-blue-600/40" />
      </div>
      <div className="lg:col-span-7 lg:pl-4">{children}</div>
      <div aria-hidden className="hidden lg:block lg:col-span-4" />
    </div>
  )
}
