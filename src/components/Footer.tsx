import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Footer() {
  const { linkedin, github, email } = resumeData.personal;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: `https://${github}`, label: 'GitHub' },
    { icon: Linkedin, href: `https://${linkedin}`, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by {resumeData.personal.name.split(' ')[0]}</span>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} {resumeData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
