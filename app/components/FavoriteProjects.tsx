import React from 'react';

export default function Projects() {
  return (
    <section className="projects-container">
    {/* Project Card 1 */}
    <div className="project-card">
      {/* <img src="/images/project1.jpg" alt="Screenshot of Project 1" /> */}
      <h3>Stories On Tips</h3>
      <p>
      Full stack story generator production grade SaaS application using Next JS 15, React 19 and Typescript, including optimistic UI updates.
      </p>
      <a href="https://storiesontips.com" target="_blank" rel="noopener noreferrer">
  View Project
</a>
    </div>
    
    {/* Project Card 2 */}
    <div className="project-card">
      {/* <img src="/images/project2.jpg" alt="Screenshot of Project 2" /> */}
      <h3>My Invoice Checker</h3>
      <p>
        Full Stack Invoice Management App for small businesses.
      </p>
      <a href="https://myinvoicechecker.com" target="_blank" rel="noopener noreferrer">
  View Project
</a>
    </div>
    
    {/* Project Card 3 */}
 
    
    {/* Add more project cards as needed */}
  </section>
  )
}