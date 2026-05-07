function Container({ children, className = '' }) {
  const classes = ['mx-auto w-full max-w-[88rem] px-5 sm:px-8 xl:px-10', className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

export default Container
