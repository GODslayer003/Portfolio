import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This would typically download a real resume file
    const link = document.createElement('a');
    link.href = '/resume-pranjal-kundliya.pdf'; // Replace with actual resume URL
    link.download = 'Pranjal_Kundliya_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-50">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Enhanced floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/3 right-32 w-16 h-16 bg-gradient-to-r from-chart-1/20 to-chart-2/20 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-chart-3/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 0.8, 1],
            rotateX: [0, 360, 0],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-chart-4/30 to-chart-5/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, 30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-20 w-6 h-6 bg-primary/20 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Floating code symbols */}
        {['</>', '{}', '()', '[]', '<>', '&&', '||', '=>'].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-primary/10 text-2xl font-mono"
            style={{
              left: `${10 + (index * 10)}%`,
              top: `${20 + (index * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              👋 Available for new opportunities
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">Hi, I'm</span>
            <motion.span
              className="block bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Pranjal Kundliya
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              MERN Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, responsive web experiences with modern technologies.
              Passionate about creating intuitive user interfaces and bringing creative ideas to life through code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-2"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://coffee-brina-32.tiiny.site', '_blank')}
                >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
                </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/GodSlayer003', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/pranjal-kundliya-2179b628a/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rohankundliya@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:shadow-lg group-hover:shadow-primary/25">
                  <social.icon className="w-5 h-5" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* 3D background grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(20deg) translateZ(-100px)',
          }}
        />
      </div>
    </section>
  );
}