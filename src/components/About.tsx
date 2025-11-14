import React from 'react';
import { motion } from 'motion/react';
import { Code, Palette, Zap, Users, GraduationCap, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that follows best practices and industry standards.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail and user experience principles.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user interactions across all devices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams, communicating ideas clearly, and contributing to project success.',
    },
  ];

  const stats = [
    { value: '20+', label: 'Projects Built' },
    { value: '2025', label: 'Graduating' },
    { value: '3+', label: 'Tech Stacks' },
  ];

  const skills = [
    { category: 'Frontend', items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'GSAP Animations'] },
    { category: 'Backend', items: ['Node.js', 'MongoDB', 'Supabase', 'API Integration'] },
    { category: 'Tools', items: ['VS Code', 'Cursor', 'Figma', 'Git', 'Vercel'] },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Software Developer skilled in front-end and actively growing in back-end development, 
            focused on building fast, scalable, and user-centric applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-chart-1 to-chart-2 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <motion.div
                  className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9kZXJufGVufDF8fHx8MTc1Nzk1NzU2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Pranjal Kundliya - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div className="text-xl font-bold text-primary">B.Tech</div>
                  </div>
                  <div className="text-xs text-muted-foreground">CSE, GEHU</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-chart-1">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border border-border rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">MERN Developer & Creative Problem Solver</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Software Developer specializing in front-end development and actively expanding my expertise in back-end technologies. 
                Currently pursuing B.Tech in Computer Science and Engineering at Graphic Era Hill University, Dehradun (2021-2025), 
                I'm passionate about building fast, scalable, and user-centric applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My technical toolkit includes React.js, JavaScript, TypeScript, and Node.js, complemented by modern frameworks like 
                Tailwind CSS and Bootstrap. I specialize in creating dynamic web experiences using GSAP animations and have hands-on 
                experience with databases like MongoDB and Supabase.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm an active problem solver with strong leadership and collaboration skills. I enjoy participating in 
                hackathons, exploring emerging technologies like Machine Learning, and playing competitive sports like 
                Kabaddi, where I've won multiple medals. I believe in continuous learning and contributing effectively in dynamic, 
                growth-driven tech environments.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1.5">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}