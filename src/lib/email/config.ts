import { EmailFactory } from "tzmail";
import { IEmailConfig } from "tzmail/dist/core/interfaces/email.interface";
import { IHeaderConfig, IFooterConfig } from "tzmail/dist/core/interfaces/template.interface";

const SMTP_CONFIG: IEmailConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.CONTACT_EMAIL!,
        pass: process.env.EMAIL_PASSWORD!,
    },
    defaultFrom: process.env.EMAIL_FROM!,
}

const emailFactory = EmailFactory.initialize(SMTP_CONFIG)

const templateService = emailFactory.getTemplateService()


const header: IHeaderConfig = {
    show: true,
    logo: {
    type: 'text',
    text: 'LyraX',
    size: 'medium'
    }
}

const footer: IFooterConfig = {
    show: true,
    links: [
        { text: 'Termos', url: 'https://lyrax-web.vercel.app/terms' },
        { text: 'Privacidade', url: 'https://lyrax-web.vercel.app/privacy' },
        { text: 'Ajuda', url: 'https://lyrax-web.vercel.app/support' }
    ],
    socialLinks: [
        { platform: 'twitter', url: 'https://x.com/lyrax_com' },
        { platform: 'instagram', url: 'https://www.instagram.com/lyrax_com?igsh=NnJwaDl0bHhud2xu' },
        { platform: 'youtube', url: 'https://www.youtube.com/@lyrax_com' }
    ],
    copyrightText: '© LyraX. Todos os direitos reservados.'
}

export { emailFactory, templateService, header, footer}