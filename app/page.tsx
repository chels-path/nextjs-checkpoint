import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  // Sample projects data (in real app, this might come from an API)
  const featuredProjects = [
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
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm John Doe
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A passionate full-stack developer creating amazing web experiences
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2"
          >
            <span>Get in touch</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'MongoDB', 'Tailwind'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-xl font-semibold text-gray-800">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              <span>View all projects</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
