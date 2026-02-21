import type { PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type ContainerProps = PropsWithChildren<{ className?: string }>

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('w-full px-3 sm:px-4 lg:px-6', className)}>{children}</div>
}
