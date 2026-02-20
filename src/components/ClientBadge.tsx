type ClientBadgeProps = {
  clientName?: string | null
}

export function ClientBadge({ clientName }: ClientBadgeProps) {
  const value = clientName?.trim()
  if (!value) return null

  return (
    <span className="inline-flex items-center rounded-full border border-slate-300 bg-slate-200/70 px-2.5 py-1 text-xs font-medium text-slate-700">
      {value}
    </span>
  )
}
