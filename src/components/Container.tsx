import type { PropsWithChildren } from 'react'

import { cn } from '../lib/cn'

type ContainerProps = PropsWithChildren<{ className?: string }>

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 lg:px-8', className)}>{children}</div>
}
