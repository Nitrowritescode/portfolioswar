import { Button } from '@/components/ui/button';
import React from 'react';

export default function Projects() {
  return (
    <div className='px-10 md:px-16'>
      <h1 className="text-purple-500 text-2xl md:text-4xl font-bold flex justify-center items-center py-4">My Projects</h1>
      <section className="projects-container bg-purple-400 p-4">
    {/* Project Card 1 */}
    <div className="p-4">
      {/* <img src="/images/project1.jpg" alt="Screenshot of Project 1" /> */}
      <h3 className='font-bold text-2xl md:text-3xl'>Stories On Tips</h3>
      <p className='py-2 '>
      Full stack story generator production grade SaaS application using Next JS 15, React 19 and Typescript, including optimistic UI updates.
      </p>
      <a href="https://storiesontips.com" target="_blank" rel="noopener noreferrer">
     <Button>
  View Project
      </Button> 
</a>
    </div>
    
    {/* Project Card 2 */}
    <div className="p-4">
      {/* <img src="/images/project2.jpg" alt="Screenshot of Project 2" /> */}
      <h3 className='font-bold text-2xl md:text-3xl'>My Invoice Checker</h3>
      <p className='py-2'>
        Full Stack Invoice Management App for small businesses using Next JS 15, React 19 and Typescript
      </p>
      <a href="https://myinvoicechecker.com" target="_blank" rel="noopener noreferrer">
      <Button>
  View Project
      </Button> 
</a>
    </div>
    
    {/* Project Card 3 */}
 
    
    {/* Add more project cards as needed */}
  </section>
    </div>
  )
}