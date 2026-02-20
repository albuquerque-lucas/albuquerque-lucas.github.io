import { useI18n } from '../i18n/I18nProvider'
import { cn } from '../lib/cn'

export function LocaleToggle() {
  const { locale, setLocale, labels } = useI18n()

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 p-0.5">
      <button type="button" onClick={() => setLocale('pt-BR')} className={cn('rounded-full px-2.5 py-1 text-xs transition', locale === 'pt-BR' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900')}>
        {labels.locale.pt}
      </button>
      <button type="button" onClick={() => setLocale('en-US')} className={cn('rounded-full px-2.5 py-1 text-xs transition', locale === 'en-US' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900')}>
        {labels.locale.en}
      </button>
    </div>
  )
}
