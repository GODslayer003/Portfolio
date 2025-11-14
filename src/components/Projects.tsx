import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code, Palette, Database, Sparkles, ArrowRight, Star } from 'lucide-react';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Palette },
    { id: 'backend', label: 'Backend', icon: Database },
  ];

  const projects = [
    {
      id: 1,
      title: 'Sports Management System',
      description: 'Developed a responsive sports event platform where users can explore schedules, team info, and program details using a scalable React + TypeScript architecture.',
      image: 'https://i.pinimg.com/1200x/c8/74/52/c874522bf58e471d5f3ed38c0778dc27.jpg',
      technologies: ['React', 'Typescript', 'superbase', 'GSAP', 'NodeJs', 'ExpressJs'],
      category: 'backend',
      githubUrl: 'https://github.com/GODslayer003/Sports-Buddy',
      liveUrl: 'https://sports-buddy-m9n5.vercel.app/',
      featured: true,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 2,
      title: 'Gaming Website',
      description: 'An immersive gaming website with stunning animations, interactive elements, and responsive design built using React and GSAP.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'GSAP'],
      category: 'web',
      githubUrl: 'https://github.com/GODslayer003/award-winning-website',
      liveUrl: 'https://award-winning-website-three-virid.vercel.app/',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'WanderWise - Travel Website',
      description: 'A comprehensive travel website featuring destination guides, booking systems, and beautiful UI built with vanilla JavaScript.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      category: 'web',
      githubUrl: 'https://github.com/GODslayer003/WanderWise',
      liveUrl: 'https://wander-wise-4hil.vercel.app/',
      featured: false,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics built with React and TypeScript.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600',
      technologies: ['React', 'TypeScript', 'HTML5', 'CSS3', 'GSAP'],
      category: 'web',
      githubUrl: 'https://github.com/GODslayer003/Weather-App',
      liveUrl: 'https://weather-app-indol-chi-93.vercel.app/',
      featured: false,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Gym Management',
      description: 'Developed a Gym Management system, which is build with Admin and User panel data stored in Backend.',
      image: 'https://i.pinimg.com/1200x/01/55/d4/0155d4a86df079d802a819bda8e2975e.jpg',
      technologies: ['Javascript', 'React', 'Typescript', 'NodeJs'],
      category: 'backend',
      githubUrl: 'https://github.com/GODslayer003/Gym',
      liveUrl: 'https://gym-mu-virid.vercel.app/',
      featured: false,
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
  My <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Projects</span>
</h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with functionality.
            Each project tells a unique story of innovation and problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-violet-500/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${project.featured ? 'aspect-[21/9]' : 'aspect-video'}`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute top-6 left-6"
                      >
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-md rounded-full shadow-lg">
                          <Star className="w-4 h-4 text-white fill-white" />
                          <span className="text-sm font-semibold text-white">Featured</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Hover Overlay with Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-violet-900/95 to-purple-900/95 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0,
                          rotate: hoveredProject === project.id ? 0 : -180
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0,
                          rotate: hoveredProject === project.id ? 0 : 180
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300 font-medium hover:bg-violet-500/20 hover:border-violet-500/50 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 font-medium hover:bg-slate-700 hover:border-slate-500 transition-all"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 blur-xl opacity-30 rounded-2xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-md mx-auto">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Github className="w-16 h-16 mx-auto mb-4 text-slate-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">Explore More Projects</h3>
              <p className="text-slate-400 mb-6">
                Discover additional projects and open-source contributions on my GitHub profile.
              </p>
              <motion.a
                href="https://github.com/GODslayer003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                <Github className="w-5 h-5" />
                <span>Visit GitHub Profile</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}