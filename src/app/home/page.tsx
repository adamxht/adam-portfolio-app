'use client';

import { useEffect, useRef, useState } from 'react';
import { workData, educationData, pubData } from '../data/homePageData';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // This allows <a href="..."></a> inside strings in workData
  const renderDescription = (text: string) => {
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

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

  // Handle scroll button visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth - 60; // Card width minus preview gap
      const gap = 40; // Gap between cards
      const scrollAmount = cardWidth + gap; // Scroll to next card with preview
      
      const newScrollLeft = 
        direction === 'left' 
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Check scroll state after animation completes
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={"navbar"}>
        <div className={"navContainer"}>
          <div className={"logo"}>AdamTay</div>
          <ul className={"navLinks"}>
            <li><a href="#experience"><span></span> Experience</a></li>
            <li><a href="#education"><span></span> Education</a></li>
            <li><a href="#publications"><span></span> Publications</a></li>
            <li><a href="#contact"><span></span> Contact</a></li>
          </ul>
          <a href="resume.pdf" className={"resumeBtn"}>Resume</a>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className={"hero"} id="home">
          <div className={"heroContent"}>
            <p style={{ color: 'var(--accent-blue)', fontFamily: 'monospace' }}>Hello there! I'm</p>
            <h1 className={"title"}>Adam Tay</h1>
            <h2 className={"subtitle"}>I'm an AI Engineer and Freelancer.</h2>
            <p className={"intro"}>
              I make AI useful for real world applications using <b className={"highlight"}>LLM Agents, MCP, RAG, and Multimodal AI</b>.
            </p>
            <p className={"intro"}>
              I've worked in Fortune 500 companies and top-tier companies like <b className={"highlight"}>Intel, Jabil, and Mediatek</b>.
            </p>
          </div>

          <div className={"imageWrapper"}>
            <div className={"imageUnderlay"}></div>
            <img 
              src="/assets/profile/linkedin-profile-pic.png"
              alt="Profile picture"
              width={300}
              height={300}
              className={"profileImg"}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={"section"}>
          <h2 className={"sectionHeading"}>Work Experience</h2>
          <div className={"horizontalScrollerWrapper"}>
            <button 
              className={"scrollButton"} 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              title="Previous"
            >
              ‹
            </button>
            <div className={"horizontalScroller"} ref={scrollContainerRef}>
              {workData.map((job) => (
                <div key={job.id} className={"card"}>
                <div className={"cardHeader"}>
                  {job.logo && <img src={job.logo} alt={job.company} className={"companyLogo"} />}
                  <div className={"cardTitle"}>
                    <h3>{job.role} <span style={{color: 'var(--accent-blue)'}}><br></br>@ {job.company}</span></h3>
                    <span className={"meta"}>{job.period}</span>
                  </div>
                </div>
                <ul>
                  {job.description.map((item, index) => (
                    <li key={index}>{renderDescription(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
            <button 
              className={"scrollButton"} 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              title="Next"
            >
              ›
            </button>
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
                <a href={pub.link} target="_blank" rel="noopener noreferrer">Article Link &rarr;</a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links Footer Section */}
        <section id="contact" className={"section socialSection"}>
          <div className={"socialContent"}>
            <h2>Let's Connect !</h2>
            <p>Feel free to reach out to me through any of these platforms</p>
            <div className={"socialLinks"}>
              <a href="mailto:tayxhwork@gmail.com" className={"socialLink"} title="Email">
                <span className={"icon"}>✉</span>
                <span className={"label"}>Email</span>
              </a>
              <a href="https://github.com/adamxht" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="GitHub">
                <span className={"icon"}>
                  <img src="/assets/icons/github-logo.jpg" alt="GitHub" style={{ width: '2.5rem', height: '2.5rem' }} />
                </span>
                <span className={"label"}>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/tay-xue-hao/" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="LinkedIn">
                <span className={"icon"}>
                  <img src="/assets/icons/linkedin-logo.jpg" alt="LinkedIn" style={{ width: '2.5rem', height: '2.5rem' }} />
                </span>
                <span className={"label"}>LinkedIn</span>
              </a>
              <a href="https://www.fiverr.com/dravent" target="_blank" rel="noopener noreferrer" className={"socialLink"} title="Fiverr">
                <span className={"icon"}>
                  <img src="/assets/icons/fiverr-logo.jpg" alt="Fiverr" style={{ width: '2.5rem', height: '2.5rem' }} />
                </span>
                <span className={"label"}>Fiverr</span>
              </a>
            </div>
          </div>
        </section>

        {/* Back to Top Section */}
        <section id="top" className={"section backToTopSection"}>
          <div className={"backToTopContent"}>
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