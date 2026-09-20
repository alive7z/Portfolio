import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import ProjectDetailsModal from '../components/ProjectDetailsModal'
import { projects } from '../data/projects'
import { stagger, viewportOnce } from '../lib/motion'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section
      id="projects"
      className="section-pad bg-[#F8FAFC] py-20 transition-colors md:py-28 dark:bg-[#0A0A0A]"
    >
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Projects"
          title="Selected Projects"
          description="Some things I've built."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-20 md:space-y-28"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onOpenDetails={setActiveProject}
            />
          ))}
        </motion.div>
      </div>

      <ProjectDetailsModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}