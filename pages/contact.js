import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="mailto:dharmikgangani786@gmail.com"
              title="gmail"
              icon="dharmikgangani786"
            />
            <ContactLink href="https://github.com/Dharma-09" title="github" icon="Dharma-09" />
            <ContactLink href="https://twitter.com/im_Dharma09" title="twitter" icon="im_Dharma09" />
            <ContactLink
              href="https://www.linkedin.com/in/dharmik-gangani-ab2217193/"
              title="linkedin"
              icon="DharmikGangani"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
