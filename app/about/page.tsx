import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/profile.jpg"
            alt="About Me"
            fill
            className="object-cover"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-600 mb-4">
            I'm a full-stack developer with 5+ years of experience in building web applications. 
            I love creating elegant solutions to complex problems and am passionate about learning 
            new technologies.
          </p>
          <p className="text-gray-600 mb-4">
            My journey in web development started during my college years when I built my first 
            website. Since then, I've worked with various startups and companies, helping them 
            build scalable and performant web applications.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Education</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>B.S. in Computer Science - University of Technology (2018)</li>
            <li>Full-Stack Web Development Certification - FreeCodeCamp</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Senior Developer at Tech Corp (2021-Present)</li>
            <li>Web Developer at Startup Inc (2018-2021)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
