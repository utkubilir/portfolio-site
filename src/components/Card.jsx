import { createElement } from 'react'

function Card({ as = 'article', className = '', hover = false, children, ...props }) {
  const classes = [
    'mission-card min-w-0 p-5 sm:p-6',
    hover
      ? 'transition-transform duration-200 hover:-translate-y-0.5 hover:border-[color:rgba(217,93,38,0.82)] motion-reduce:transform-none'
      : '',
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
