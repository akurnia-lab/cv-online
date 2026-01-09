import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Hero() {
  const { name, title, tagline } = resumeData.personal;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-8"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {name}
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
