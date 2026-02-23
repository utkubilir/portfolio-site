const placeholderFragments = ['BURAYA_YAZ', 'PROJE_', 'LINKEDIN_', 'MAILINI_']

export function isUsableHref(href) {
  if (typeof href !== 'string') {
    return false
  }

  const value = href.trim()
  if (!value || value === 'LINK') {
    return false
  }

  const upperValue = value.toUpperCase()
  if (placeholderFragments.some((fragment) => upperValue.includes(fragment))) {
    return false
  }

  if (value.startsWith('mailto:')) {
    return value.length > 'mailto:'.length
  }

  return value.startsWith('http://') || value.startsWith('https://')
}
