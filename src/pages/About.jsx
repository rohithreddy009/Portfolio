import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import { CTA } from '../components'
import { experiences, skills } from '../constants'

import 'react-vertical-timeline-component/style.min.css'

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm{' '}
                <span className="blue-gradient_text font-semibold drop-shadow">
                    {' '}
                    Rohith
                </span>{' '}
                👋
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>I am a Master’s student in Computer Science at the University of Southern California, 
                  passionate about backend engineering, distributed systems, and machine learning.
                  I focus on architecting distributed, high-performance systems and leveraging emerging technologies to solve complex challenges.</p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">Technical Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12 justify-start">
                    {skills.map((skill) => (
                        <div
                            className="skill-container flex flex-col items-center w-20 h-28"
                            key={skill.name}
                        >
                            <div className="block-container w-full h-full">
                                <div className="btn-back rounded-sm" />
                                <div className="btn-front rounded-sm flex justify-center items-center">
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-center font-poppins">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div> */}

            <hr className="border-slate-200" />

            <CTA />
        </section>
    )
}

export default About
