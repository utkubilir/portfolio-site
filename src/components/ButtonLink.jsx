import { createElement } from 'react'

function ButtonLink({
  as = 'a',
  variant = 'secondary',
  className = '',
  disabled = false,
  children,
  ...props
}) {
  const variantClasses = {
    primary:
      'border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 dark:border-blue-400 dark:bg-blue-400 dark:text-zinc-950 dark:hover:border-blue-300 dark:hover:bg-blue-300',
    secondary:
      'border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900/40',
    muted:
      'border border-zinc-200 bg-transparent text-zinc-400 cursor-not-allowed dark:border-zinc-800 dark:text-zinc-500',
  }

  const classes = [
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium no-underline transition-colors',
    variantClasses[variant] ?? variantClasses.secondary,
    disabled ? 'pointer-events-none opacity-70' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(
    as,
    {
      className: classes,
      'aria-disabled': disabled || undefined,
      ...props,
    },
    children,
  )
}

export default ButtonLink
