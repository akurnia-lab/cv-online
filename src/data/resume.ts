export const resumeData = {
  personal: {
    name: 'Alex Johnson',
    title: 'IT Infrastructure Engineer / Web Developer',
    tagline: 'Building robust infrastructure and elegant web solutions',
    email: 'alex.johnson@email.com',
    linkedin: 'linkedin.com/in/alexjohnson',
    github: 'github.com/alexjohnson',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Experienced IT Infrastructure Engineer with 8+ years of expertise in designing, implementing, and maintaining enterprise-level infrastructure solutions. Passionate about automation, cloud technologies, and creating efficient, scalable systems. Also skilled in modern web development, bridging the gap between infrastructure and application development.'
  },

  about: {
    yearsOfExperience: 8,
    summary: 'Highly motivated IT professional with extensive experience in infrastructure engineering, networking, and web development. Proven track record of implementing cost-effective solutions that improve system reliability and performance. Strong advocate for DevOps practices and continuous improvement.',
    highlights: [
      'Infrastructure Design & Implementation',
      'Cloud Architecture (AWS, Azure)',
      'Network Security & Optimization',
      'Full-Stack Web Development',
      'Automation & DevOps',
      'Team Leadership & Mentoring'
    ]
  },

  skills: {
    infrastructure: [
      { name: 'Linux/Unix Administration', level: 95 },
      { name: 'Windows Server', level: 90 },
      { name: 'VMware & Hyper-V', level: 88 },
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'AWS & Azure', level: 90 }
    ],
    networking: [
      { name: 'TCP/IP & Routing', level: 92 },
      { name: 'Cisco & Juniper', level: 85 },
      { name: 'Firewalls & VPN', level: 88 },
      { name: 'Load Balancing', level: 82 },
      { name: 'Network Security', level: 90 }
    ],
    webDevelopment: [
      { name: 'React & TypeScript', level: 88 },
      { name: 'Node.js & Express', level: 85 },
      { name: 'Python & Django', level: 80 },
      { name: 'PostgreSQL & MongoDB', level: 82 },
      { name: 'REST APIs & GraphQL', level: 85 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Ansible & Terraform', level: 88 },
      { name: 'Jenkins & GitLab CI', level: 85 },
      { name: 'Prometheus & Grafana', level: 80 },
      { name: 'ELK Stack', level: 78 }
    ]
  },

  experience: [
    {
      type: 'work',
      title: 'Senior Infrastructure Engineer',
      organization: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      startDate: '2021',
      endDate: 'Present',
      description: 'Leading infrastructure modernization initiatives, managing cloud migration projects, and implementing DevOps best practices across the organization.'
    },
    {
      type: 'work',
      title: 'Infrastructure Engineer',
      organization: 'CloudNet Systems',
      location: 'San Francisco, CA',
      startDate: '2019',
      endDate: '2021',
      description: 'Managed enterprise networking infrastructure, automated deployment processes, and developed internal tools for system monitoring and management.'
    },
    {
      type: 'work',
      title: 'Systems Administrator',
      organization: 'Digital Innovations Inc.',
      location: 'Oakland, CA',
      startDate: '2017',
      endDate: '2019',
      description: 'Administered Windows and Linux servers, implemented backup solutions, and provided technical support for 200+ users.'
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      organization: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2015',
      endDate: '2017',
      description: 'Specialized in distributed systems and network security. GPA: 3.8/4.0'
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology',
      organization: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2011',
      endDate: '2015',
      description: 'Focus on network engineering and system administration. Graduated with honors.'
    }
  ],

  projects: [
    {
      title: 'Cloud Infrastructure Automation Platform',
      description: 'Developed a comprehensive automation platform using Terraform and Ansible to manage multi-cloud infrastructure across AWS and Azure.',
      technologies: ['Terraform', 'Ansible', 'Python', 'AWS', 'Azure'],
      demoUrl: '',
      githubUrl: ''
    },
    {
      title: 'Real-time Network Monitoring Dashboard',
      description: 'Built a real-time monitoring dashboard using React and WebSockets to visualize network traffic, server health, and system metrics.',
      technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'D3.js'],
      demoUrl: '',
      githubUrl: ''
    },
    {
      title: 'Kubernetes Cluster Management Tool',
      description: 'Created a web-based tool for managing Kubernetes clusters, simplifying deployment, scaling, and monitoring operations.',
      technologies: ['React', 'Go', 'Kubernetes', 'Docker', 'PostgreSQL'],
      demoUrl: '',
      githubUrl: ''
    },
    {
      title: 'Automated Backup & Recovery System',
      description: 'Designed and implemented an automated backup system with point-in-time recovery capabilities for critical business data.',
      technologies: ['Python', 'Bash', 'PostgreSQL', 'AWS S3', 'Cron'],
      demoUrl: '',
      githubUrl: ''
    }
  ],

  certifications: [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022'
    },
    {
      name: 'Cisco Certified Network Professional (CCNP)',
      issuer: 'Cisco',
      date: '2021'
    },
    {
      name: 'Microsoft Certified: Azure Administrator',
      issuer: 'Microsoft',
      date: '2022'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2023'
    }
  ]
};
