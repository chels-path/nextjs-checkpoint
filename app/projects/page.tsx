import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      image: '/images/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard with interactive maps and forecasts',
      image: '/images/project3.jpg',
      technologies: ['React', 'D3.js', 'OpenWeather API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: '/images/project4.jpg',
      technologies: ['Vue.js', 'Chart.js', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with Markdown support',
      image: '/images/project5.jpg',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website built with Next.js',
      image: '/images/project6.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've worked on. Each project represents different 
        challenges and learning experiences.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
