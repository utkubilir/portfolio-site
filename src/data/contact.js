import { languages } from './languages'

export const contact = {
  email: 'bilirutku35@gmail.com',
  secondaryEmail: 'utku.bilir@std.izmirekonomi.edu.tr',
  phone: '+905346840696',
  location: 'İzmir, Türkiye',
  timezone: 'Europe/Istanbul',
  languages: languages.map((item) => item.name),
  availability: 'Open to internship opportunities and project collaboration',
  responseTime: 'Usually replies within 24–48 hours',
  cta: {
    subject: 'Portfolio inquiry',
    body: 'Hi Utku,%0D%0A%0D%0AI reviewed your portfolio and would like to connect about...%0D%0A%0D%0AThanks,',
    preview:
      'Could we connect about an internship role or a project collaboration?',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/utkubilir',
    github: 'https://github.com/utkubilir',
    resume: '',
    calendly: '',
  },
}
