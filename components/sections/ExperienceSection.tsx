'use client'

import SectionLayout from '@/components/layouts/SectionLayout'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const ExperienceSection = () => {
  const experiencesData = [
    {
      title: 'Graduated bootcamp',
      location: 'Miami, FL',
      description:
        'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
      //   icon: React.createElement('img', { src: arobase, alt: 'Votre alt' }),
      date: '2019',
    },
    {
      title: 'Front-End Developer',
      location: 'Orlando, FL',
      description:
        'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
      //   icon: React.createElement('img', { src: arobase, alt: 'Votre alt' }),
      date: '2019 - 2021',
    },
    {
      title: 'Full-Stack Developer',
      location: 'Houston, TX',
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      //   icon: React.createElement('img', { src: arobase, alt: 'Votre alt' }),
      date: '2021 - present',
    },
  ]

  return (
    <SectionLayout
      id="experience"
      className="flex items-center"
    >
      <div>
        <h1 className="font-bold text-4xl text-[#191919] pt-12 pb-12">
          Experience
        </h1>
      </div>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            // visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            key={index}
            date={experience.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<div>{experience.icon}</div>}
          >
            <h3>{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </SectionLayout>
  )
}

export default ExperienceSection
