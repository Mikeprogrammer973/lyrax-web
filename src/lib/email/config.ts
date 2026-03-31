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
    { text: 'Termos de Serviço', url: 'https://lyrax.com/terms' },
    { text: 'Política de Privacidade', url: 'https://lyrax.com/privacy' }
    ],
    socialLinks: [
    { platform: 'facebook', url: 'https://twitter.com/lyraxapp' },
    { platform: 'github', url: 'https://github.com/lyraxapp' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/lyrax' }
    ],
    copyrightText: '© LyraX. Todos os direitos reservados.'
}

export { emailFactory, templateService, header, footer}