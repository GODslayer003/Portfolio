import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2,
  Laptop,
  Mountain,
  Heart,
  Users,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Zap,
  Globe
} from 'lucide-react';

export function Interests() {
  const interests = [
    {
      id: 2,
      title: 'Problem Solving & Hackathons',
      description: 'Enthusiastic participant in hackathons and coding challenges. Love tackling complex problems with creative solutions and collaborating with diverse teams to build innovative projects.',
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-600',
      gradient: 'bg-gradient-to-br from-amber-500/10 to-orange-600/10',
      skills: ['Competitive Coding', 'Hackathons', 'Team Projects', 'Innovation'],
    },
    {
      id: 5,
      title: 'Continuous Learning',
      description: 'Dedicated to lifelong learning and skill development. Currently exploring Machine Learning with Python and staying updated with industry trends, design patterns, and best practices.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
      skills: ['Soft Skills', 'Design Trends', 'Tech Blogs', 'Courses'],
    },
    {
      id: 6,
      title: 'Design & User Experience',
      description: 'Keen eye for design aesthetics and user experience. Passionate about creating beautiful, intuitive interfaces that provide seamless experiences and delight users.',
      icon: Laptop,
      color: 'from-pink-500 to-rose-600',
      gradient: 'bg-gradient-to-br from-pink-500/10 to-rose-600/10',
      skills: ['UI/UX Design', 'Figma', 'Design Systems', 'Animations'],
    },
  ];

  const softSkills = [
    { trait: 'Problem-solving', percentage: 95, icon: Target },
    { trait: 'Communication', percentage: 88, icon: Users },
    { trait: 'Team Collaboration', percentage: 92, icon: Heart },
    { trait: 'Time Management', percentage: 85, icon: TrendingUp },
    { trait: 'Adaptability', percentage: 90, icon: Zap },
    { trait: 'Leadership', percentage: 87, icon: Award },
  ];

  const values = [
    { 
      title: 'Humility', 
      description: 'Always open to learning from others and acknowledging that growth comes from continuous improvement.',
      icon: Heart
    },
    { 
      title: 'Innovation', 
      description: 'Seeking creative solutions and embracing new technologies to solve real-world problems.',
      icon: Lightbulb
    },
    { 
      title: 'Collaboration', 
      description: 'Believing in the power of teamwork and diverse perspectives to achieve exceptional results.',
      icon: Users
    },
    { 
      title: 'Balance', 
      description: 'Maintaining harmony between technology, nature, sports, and personal growth for a fulfilling life.',
      icon: Mountain
    },
  ];

  return (
    <section id="interests" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Interests</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A blend of technology passion, athletic spirit, and appreciation for life's balance. 
            These interests shape my perspective and drive my growth.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-xl ${interest.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {interest.title}
                    </h3>
                  </motion.div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {interest.description}
                  </p>
                  
                  <div className="space-y-2">
                    {interest.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        className="text-xs text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-chart-1 rounded-full mr-2" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Core <span className="text-primary">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Soft <span className="text-primary">Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.trait}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold">{skill.trait}</h4>
                    </div>
                    <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {skill.percentage}%
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
            <blockquote className="text-lg text-muted-foreground mb-4 leading-relaxed">
              "I believe in the harmony of technology and nature, the power of continuous learning, 
              and the importance of staying humble. My goal is to build meaningful digital experiences 
              while maintaining balance, contributing to teams with dedication, and growing both as a 
              developer and as a person."
            </blockquote>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="font-semibold text-foreground">Pranjal Kundliya</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}