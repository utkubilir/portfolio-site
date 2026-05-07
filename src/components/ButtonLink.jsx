import { createElement } from 'react'

function ButtonLink({
  as = 'a',
  variant = 'secondary',
  className = '',
  disabled = false,
  serial,
  children,
  ...props
}) {
  const variantClasses = {
    primary: 'control-button control-button-primary',
    secondary: 'control-button',
    muted: 'control-button control-button-muted',
  }
  const serialLabel = serial ?? (variant === 'primary' ? 'ACT' : disabled ? 'OFF' : 'NAV')

  const classes = [
    'group',
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
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="button-serial">
        {serialLabel}
      </span>
    </>,
  )
}

export default ButtonLink
