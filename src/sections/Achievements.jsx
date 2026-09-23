import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import AchievementCard from '../components/AchievementCard'
import { achievements } from '../data/achievements'
import { stagger, viewportOnce } from '../lib/motion'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad py-20 md:py-28">
      <div className="container-x">
        <SectionTitle
          eyebrow="Achievements"
          title="Achievements"
          description="Recognition from national hackathons, cloud skill challenges, and campus programs."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
