import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'MERN + UI/UX Developer',
      company: 'Dr Design Private Limited',
      location: 'Dehradun (On-site)',
      period: 'October,2025 - Present',
      type: 'Full-time',
      description: 'Developing and working on real-world projects, enhancing skills in modern web technologies and collaborating with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Developing real-world production applications using React.js',
        'Enhanced expertise in JavaScript and modern frontend frameworks',
        'Working with backend technologies including MongoDB and API Integration',
        'Gained hands-on experience with Postman for API testing',
        'Collaborating with designers and backend developers for seamless integration',
        'Implementing responsive designs and optimizing application performance',
      ],
      technologies: ['React.js', 'JavaScript', 'MongoDB', 'Postman', 'API Integration', 'HTML5', 'CSS3', 'Git', 'Node.js', 'Express.js', 'Figma'],
      color: 'from-purple-500 to-pink-600',
      current: true,
    },
    {
      id: 2,
      title: 'Web Development Trainee',
      company: 'Unified Mentor',
      location: 'Remote',
      period: 'July 2025 - September 2025',
      type: 'Internship',
      description: 'Completed a structured web development program, strengthening core skills in HTML, CSS, JavaScript, and React through hands-on projects and real-world assignments.',
      achievements: [
        'Completed structured training in HTML, CSS, JavaScript, and React',
        'Built multiple projects demonstrating full-stack capabilities',
        'Learned industry best practices and modern development workflows',
        'Enhanced problem-solving and debugging skills',
        'Successfully completed the program with certification',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'Typescript', 'Node.js'],
      website: 'https://unifiedmentor.com',
      certificate: 'https://unifiedmentor.com/verify-certificate/UMID04072548597',
      certificateId: 'UMID04072548597',
      color: 'from-blue-500 to-cyan-600',
      current: false,
    },
  ];

  const stats = [
    { label: 'Professional Experience', value: '6+ Months', icon: Calendar },
    { label: 'Projects Built', value: '15+', icon: Briefcase },
    { label: 'Technologies Mastered', value: '10+', icon: CheckCircle2 },
    { label: 'Certifications', value: '2+', icon: Award },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in web development, working on real-world projects 
            and continuously growing my technical expertise.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-1 to-chart-2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background ${
                      exp.current ? 'animate-pulse' : ''
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="w-full md:ml-16">
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                    <div className="p-6">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}>
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {exp.title}
                              </h3>
                              {exp.current && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-base text-foreground font-medium mb-1">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {exp.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.period}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-accent border border-border">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        {exp.website && (
                          <motion.a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-accent hover:bg-primary/10 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                          Key Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2 + achievementIndex * 0.1 + 0.5 
                              }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.2 + techIndex * 0.05 + 0.7 
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <span className="px-3 py-1 bg-accent border border-border rounded-md text-xs font-medium hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default">
                                {tech}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Certificate Section */}
                      {exp.certificate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          viewport={{ once: true }}
                          className="mt-6 pt-6 border-t border-border"
                        >
                          <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Award className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-semibold text-sm">Certified Professional</p>
                                <p className="text-xs text-muted-foreground">Certificate ID: {exp.certificateId}</p>
                              </div>
                            </div>
                            <motion.a
                              href={exp.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-md transition-all"
                            >
                              <Award className="w-4 h-4" />
                              Verify Certificate
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, exciting projects, and collaboration.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => 
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-md transition-all"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}