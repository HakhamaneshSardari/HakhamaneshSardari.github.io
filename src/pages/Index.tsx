
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "An interactive weather dashboard with beautiful visualizations, forecasts, and location-based weather data from multiple APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "OpenWeather API"]
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 65 },
    { name: "GraphQL", level: 60 },
    { name: "MongoDB", level: 80 }
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: FileText,
      label: "Resume",
      href: "/resume.pdf",
      color: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
          {/* Bio Section */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                John Doe
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 font-light">
                Full Stack Developer
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Passionate full-stack developer with 5+ years of experience creating 
                innovative web applications and scalable solutions. I specialize in 
                modern JavaScript frameworks and cloud technologies.
              </p>
              <p>
                I love turning complex problems into simple, beautiful designs and 
                building products that make a difference in people's lives. When I'm 
                not coding, you can find me exploring new technologies or contributing 
                to open-source projects.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    className={`${link.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                👋
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 animate-fade-in">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-800">{skill.name}</span>
                  <span className="text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out hover:shadow-lg"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-300">
            © 2024 John Doe. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
