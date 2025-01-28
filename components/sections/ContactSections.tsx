import SectionLayout from '@/components/layouts/SectionLayout'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaTiktok,
} from 'react-icons/fa'

const socialMedia = [
  {
    icon: (
      <FaGithub
        size={40}
        className=" text-[#191919]"
      />
    ),
    label: 'My Github account:',
    url: (
      <a
        href="https://github.com/rnldvrgl"
        target="_blank"
        className="font-medium"
      >
        /rnldvrgl
      </a>
    ),
  },
  {
    icon: (
      <FaLinkedinIn
        size={40}
        className=" text-[#191919]"
      />
    ),
    label: 'My LinkedIn account:',
    url: (
      <a
        href="https://www.linkedin.com/in/ronaldvergel"
        target="_blank"
        className="font-medium"
      >
        /ronaldvergel
      </a>
    ),
  },
  {
    icon: (
      <FaRegEnvelope
        size={40}
        className=" text-[#191919]"
      />
    ),
    label: 'Send me an email:',
    url: (
      <a
        href="mailto:delacruz.ronaldvegel@gmail.com"
        className="font-medium"
      >
        /delacruz.ronaldvergel@gmail.com
      </a>
    ),
  },
  {
    icon: (
      <FaInstagram
        size={40}
        className=" text-[#191919]"
      />
    ),
    label: 'My Instagram account:',
    url: (
      <a
        href="https://www.instagram.com/rnldvrgl"
        target="_blank"
        className="font-medium"
      >
        /glenmarami
      </a>
    ),
  },
  {
    icon: (
      <FaTiktok
        size={40}
        className=" text-[#191919]"
      />
    ),
    label: 'My Tiktok account:',
    url: (
      <a
        href="https://www.tiktok.com/@rnldvrgl"
        target="_blank"
        className="font-medium"
      >
        /glenmarami
      </a>
    ),
  },
  {
    icon: (
      <FaFacebook
        size={40}
        className=" text-[#191919]"
      />
    ),
    label: 'My Facebook account:',
    url: (
      <a
        href="https://www.facebook.com/ronaldvergel.crisostomoii/"
        target="_blank"
        className="font-medium"
      >
        /glenmarami
      </a>
    ),
  },
]

export default function ContactSection() {
  return (
    <SectionLayout
      id="contact"
      className="bg-[#F7F9FC]"
    >
      <div>
        <h1 className="font-bold text-4xl text-[#191919] pt-12 pb-12">
          Contact
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-x-12 md:gap-x-6 gap-y-12">
        {socialMedia.map((item) => (
          <div
            key={item.label}
            className="flex gap-3 items-center"
          >
            <div>{item.icon}</div>
            <div>
              <p className=" text-gray-600">{item.label}</p>
              <div className="text-blue-600">{item.url}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
