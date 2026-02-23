import Container from './Container'

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-6 dark:border-slate-800">
      <Container>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Utku. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
