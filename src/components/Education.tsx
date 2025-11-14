import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, Briefcase } from 'lucide-react';

export function Education() {
  const education = [
    {
      id: 1,
      degree: 'B.Tech - Computer Science and Engineering',
      institution: 'Graphic Era Hill University, Dehradun',
      location: 'Dehradun, Uttarakhand',
      period: '2021 - 2025',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with a focus on modern web technologies, software development, and problem-solving. Building strong foundations in programming, algorithms, and full-stack development.',
      highlights: [
        'Specialized in React.js, JavaScript, and TypeScript',
        'Active participant in hackathons and coding competitions',
        'Built 10+ projects showcasing full-stack capabilities',
        'Winner of competetive tournament, in sports Kabaddi',
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      degree: 'Inter School',
      institution: 'D.A.V. Public School, Kotdwara',
      location: 'Kotdwara, Uttarakhand',
      period: '2019 - 2020',
      description: 'Completed higher secondary education with a strong foundation in science and mathematics, laying the groundwork for pursuing computer science engineering.',
      highlights: [
        'Built foundation in programming fundamentals',
        'Developed early interest in technology and coding',
        'Active in sports and extracurricular activities',
      ],
      icon: Award,
      color: 'from-green-500 to-teal-600',
    },
  ];

  const achievements = [
    {
      title: 'Project Portfolio',
      description: 'Successfully built and deployed 15+ web projects',
      icon: '🚀',
    },
    {
      title: 'Sports Excellence',
      description: 'Multiple medal winner in competitive Kabaddi',
      icon: '🏆',
    },
    {
      title: 'Machine Learning',
      description: 'Completed IBM-powered ML with Python course',
      icon: '🤖',
    },
    {
      title: 'Hackathons',
      description: 'Active participant in coding competitions',
      icon: '💡',
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional training in computer science and web development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-chart-1 via-primary to-chart-2 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
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
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-background`}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:ml-16 w-full">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} flex-shrink-0`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                              {item.degree}
                            </h3>
                            <p className="text-base text-foreground font-medium mb-1">
                              {item.institution}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {item.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {item.period}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-sm">
                          <Award className="w-4 h-4 mr-2 text-chart-1" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <motion.li
                              key={highlightIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2 + highlightIndex * 0.1 + 0.5 
                              }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-chart-1 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Notable <span className="text-primary">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4 className="font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}