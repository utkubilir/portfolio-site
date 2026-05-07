function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow-tag">{eyebrow}</p> : null}
      <h2 className="section-title break-words">{title}</h2>
      {description ? (
        <p className="copy-lead mt-4 break-words">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
