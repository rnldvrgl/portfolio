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
      title: 'GeoPro Global Solutions Inc.',
      subtitle: 'Web Developer Intern',
      location: 'Clark, Pampanga',
      projects: [
        {
          name: 'Genie',
          tasks: [
            'Built a responsive web application using Next.js, TypeScript, and Tailwind CSS for a client-side management system for a local business.',
            'Worked closely with the client to define the design, implement the frontend, and test the application.',
          ],
        },
      ],
      //   icon: React.createElement('img', { src: arobase, alt: 'Votre alt' }),
      date: 'March 2023 - May 2023',
    },
    {
      title: 'GeoPro Global Solutions Inc.',
      subtitle: 'Full-Stack Web Developer',
      location: 'Clark, Pampanga',
      projects: [
        {
          name: 'Genie',
          tasks: [
            'Built a responsive web application using Next.js, TypeScript, and Tailwind CSS for a client-side management system for a local business.',
            'Worked closely with the client to define the design, implement the frontend, and test the application.',
          ],
        },
      ],
      //   icon: React.createElement('img', { src: arobase, alt: 'Votre alt' }),
      date: 'July 2023 - present',
    },
  ]

  return (
    <SectionLayout
      id="experience"
      className="flex items-center"
    >
      <h1 className="font-bold text-4xl py-12">Professional Experience</h1>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            // visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            key={index}
            date={experience.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<div>{experience.icon}</div>}
          >
            <h3 className="vertical-timeline-element-title font-bold !text-lg">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.subtitle}
            </h4>
            <div className="flex flex-wrap gap-4 text-white">
              {experience.projects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="flex flex-col gap-2 mt-4"
                >
                  <div className="font-semibold">{project.name}</div>
                  <ul className="list-disc pl-6">
                    {project.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </SectionLayout>
  )
}

export default ExperienceSection
