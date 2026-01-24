'use client';

import { useEffect } from 'react';
import { workData, educationData, pubData } from '../data/homePageData';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Create Intersection Observer to trigger animations when sections come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={"navbar"}>
        <div className={"navContainer"}>
          <div className={"logo"}>ADAM</div>
          <ul className={"navLinks"}>
            <li><a href="#experience"><span></span> Experience</a></li>
            <li><a href="#education"><span></span> Education</a></li>
            <li><a href="#publications"><span></span> Publications</a></li>
            <li><a href="#contact"><span></span> Contact</a></li>
          </ul>
          <a href="/resume.pdf" className={"resumeBtn"}>Resume</a>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className={"hero"} id="home">
          <div className={"heroContent"}>
            <p style={{ color: 'var(--accent-blue)', fontFamily: 'monospace' }}>Hi, my name is</p>
            <h1 className={"title"}>Adam Tay</h1>
            <h2 className={"subtitle"}>I build things for the web.</h2>
            <p className={"intro"}>
              I am a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences.
            </p>
          </div>

          <div className={"imageWrapper"}>
            <div className={"imageUnderlay"}></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQFPgzgdPvezdg/profile-displayphoto-crop_800_800/B56ZiSgL8.HcAI-/0/1754804570278?e=1770854400&v=beta&t=B9ZCHsl0J8bsKvJsTGdkDx59FvNIdiZtoDCHslNk8H8"
              alt="John Doe Profile"
              width={300}
              height={300}
              className={"profileImg"}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={"section"}>
          <h2 className={"sectionHeading"}>Work Experience</h2>
          <div>
            {workData.map((job) => (
              <div key={job.id} className={"card"}>
                <div className={"cardHeader"}>
                  {job.logo && <img src={job.logo} alt={job.company} className={"companyLogo"} />}
                  <div className={"cardTitle"}>
                    <h3>{job.role} <span style={{color: 'var(--accent-blue)'}}>@ {job.company}</span></h3>
                    <span className={"meta"}>{job.period}</span>
                  </div>
                </div>
                <ul>
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={"section"}>
          <h2 className={"sectionHeading"}>Education</h2>
          <div>
            {educationData.map((edu) => (
              <div key={edu.id} className={"card"}>
                <h3>{edu.institution}</h3>
                <span className={"meta"}>{edu.year}</span>
                <p>{edu.degree}</p>
                {edu.grade && <p className={"meta"}>CGPA: {edu.grade}</p>}
                {edu.achievements && <p className={"achievement"}>{edu.achievements}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className={"section"}>
          <h2 className={"sectionHeading"}>Publications</h2>
          <div>
            {pubData.map((pub) => (
              <div key={pub.id} className={"card"}>
                <h3>{pub.title}</h3>
                <span className={"meta"}>{pub.publisher}</span>
                <br />
                <a href={pub.link} target="_blank" rel="noopener noreferrer">Read Article &rarr;</a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links Footer Section */}
        <section id="contact" className={"section socialSection"}>
          <div className={"socialContent"}>
            <h2>Contact</h2>
            <p>Feel free to reach out through any of these platforms</p>
            <div className={"socialLinks"}>
              <a href="mailto:your.email@example.com" className={"socialLink"} title="Email">
                <span className={"icon"}>✉</span>
                <span className={"label"}>Email</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="GitHub">
                <span className={"icon"}>⚙</span>
                <span className={"label"}>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="LinkedIn">
                <span className={"icon"}>💼</span>
                <span className={"label"}>LinkedIn</span>
              </a>
              <a href="https://fiverr.com/yourusername" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="Fiverr">
                <span className={"icon"}>✨</span>
                <span className={"label"}>Fiverr</span>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="Twitter">
                <span className={"icon"}>𝕏</span>
                <span className={"label"}>Twitter</span>
              </a>
            </div>
          </div>
        </section>

        {/* Back to Top Section */}
        <section id="top" className={"section backToTopSection"}>
          <div className={"backToTopContent"}>
            <h2>Let's Connect</h2>
            <p>Enjoyed my portfolio? Scroll back to the top to explore more or get in touch!</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={"backToTopBtn"}
            >
              ↑ Back to Top
            </button>
          </div>
        </section>
        
        <div style={{ height: '100px' }}></div>
      </main>
    </>
  );
}