import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">MS in Computer Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Arizona State University, Arizona, USA</h4>
            {/* <p>
              Software Engineering, AI, Cloud Technologies
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="Associate Software Engineer"
            date="October 2021 - March 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mobileum India Pvt. Ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore, IN</h4>
            <ul>
              <li>
                Developed a text-based shell interface to automate installation of telecom products on CentOS/Ubuntu OS, generating reusable pre-configured VM images (qcow2) for rapid VM deployment and reduced setup time by 50%.
              </li>
              <li>
                Manually tested the VM images for telecom service readiness, installation accuracy and deployment consistency across different environments.
              </li>
              <li>
                Collaborated with cross-functional teams to roll out seven telecom software products, cutting installation time by 50% via optimized and standardized processes.
              </li>
              <li>
                Enhanced ISO file integrity and security using OpenSCAP tools, by creating an Ansible-based tailored file, reducing unauthorized access incidents by 25% and strengthening database management trust.
              </li>
              <li>
                Increased billing revenue insights by 30% by writing optimized SQL queries to analyze large datasets, driving improvements in revenue management accuracy.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2021 - Oct 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Post graduation Diploma in Advanced Computing</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2016 - May 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelors In Electrical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University OF Pune, India</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
