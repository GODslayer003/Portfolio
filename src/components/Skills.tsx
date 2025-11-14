import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Palette,
  Layers,
  Database,
  Wrench,
  TestTube,
  Users,
  Sparkles
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'C++', level: 80 },
      ],
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Supabase', level: 82 },
        { name: 'API Integration', level: 88 },
      ],
    },
    {
      title: 'Animation Libraries',
      icon: Layers,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'GSAP', level: 90 },
        { name: 'Framer Motion', level: 85 },
        { name: 'CSS Animations', level: 88 },
      ],
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      color: 'from-indigo-500 to-purple-600',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Cursor', level: 90 },
        { name: 'Vercel', level: 88 },
        { name: 'Figma', level: 85 },
        { name: 'Git/GitHub', level: 90 },
      ],
    },
    {
      title: 'Testing & Other Skills',
      icon: TestTube,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'Alpha Testing', level: 85 },
        { name: 'UAT Testing', level: 82 },
        { name: 'Manual Testing', level: 80 },
        { name: 'Bug Reporting', level: 85 },
      ],
    },
  ];

  const softSkills = [
    { name: 'Problem-solving', level: 95 },
    { name: 'Communication', level: 88 },
    { name: 'Team Collaboration', level: 92 },
    { name: 'Time Management', level: 85 },
    { name: 'Adaptability', level: 90 },
    { name: 'Leadership', level: 87 },
    { name: 'Presentation', level: 84 },
  ];

  const frameworks = [
    { name: 'React.js', proficiency: 95 },
    { name: 'Node.js', proficiency: 85 },
    { name: 'Redux Toolkit', proficiency: 82 },
  ];

  const fieldsOfInterest = [
    'Machine Learning with Python',
    'Artificial Intelligence',
    'JIRA',
    'UI/UX Design',
    'Web Performance',
    'Responsive Design',
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, tools, and capabilities 
            in modern web development.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Framework Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Framework Proficiency</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h4 className="font-semibold text-lg mb-4">{framework.name}</h4>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                        className="text-primary"
                        initial={{ strokeDasharray: "251.2 251.2", strokeDashoffset: 251.2 }}
                        whileInView={{ 
                          strokeDashoffset: 251.2 - (251.2 * framework.proficiency) / 100 
                        }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{framework.proficiency}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Proficiency Level</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
            <div className="relative overflow-hidden">
              <div className="flex gap-3">
                <motion.div
                  className="flex gap-3 flex-shrink-0"
                  animate={{
                    x: [0, -1920],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {[
                    'React.js', 'TypeScript', 'JavaScript', 'C++', 'Node.js',
                    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'GSAP',
                    'MongoDB', 'Supabase', 'Redux Toolkit', 'API Integration',
                    'VS Code', 'Cursor', 'Vercel', 'Figma', 'Git', 'GitHub'
                  ].map((tech, index) => (
                    <div
                      key={`first-${tech}-${index}`}
                      className="px-4 py-2 bg-accent border border-border rounded-lg text-sm font-medium whitespace-nowrap hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-3 flex-shrink-0"
                  animate={{
                    x: [0, -1920],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {[
                    'React.js', 'TypeScript', 'JavaScript', 'C++', 'Node.js',
                    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'GSAP',
                    'MongoDB', 'Supabase', 'Redux Toolkit', 'API Integration',
                    'VS Code', 'Cursor', 'Vercel', 'Figma', 'Git', 'GitHub'
                  ].map((tech, index) => (
                    <div
                      key={`second-${tech}-${index}`}
                      className="px-4 py-2 bg-accent border border-border rounded-lg text-sm font-medium whitespace-nowrap hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}