import { createElement } from 'react'

function Card({ as = 'article', className = '', hover = false, children, ...props }) {
  const classes = [
    'rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950',
    hover ? 'transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(
    as,
    {
      className: classes,
      ...props,
    },
    children,
  )
}

export default Card
