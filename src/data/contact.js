import { languages } from './languages'

export const contact = {
  email: 'bilirutku35@gmail.com',
  location: 'İzmir, Türkiye',
  timezone: 'Europe/Istanbul',
  languages: languages.map((item) => item.name),
  // Web3Forms key is public by design (it ships in the client bundle).
  // Override per-environment with VITE_WEB3FORMS_ACCESS_KEY if needed.
  web3formsKey: '298778e3-94e6-4db6-b86b-bb8e26f322c1',
  links: {
    linkedin: 'https://www.linkedin.com/in/utkubilir',
    github: 'https://github.com/utkubilir',
    whatsapp: 'https://wa.me/905346840696',
  },
}
