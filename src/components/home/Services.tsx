
import { Shield, Cloud, Server, Network, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "consulting",
    icon: Briefcase,
    title: "Technology Consulting",
    description: "Strategic guidance to optimize your technology investments and drive business transformation.",
    link: "/portfolio/consulting"
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure cloud architecture design, migration services, and managed cloud operations.",
    link: "/portfolio/cloud-solutions"
  },
  {
    id: "data-center",
    icon: Server,
    title: "Data Center Modernization",
    description: "Transform your data center with innovative solutions for improved performance and security.",
    link: "/portfolio/data-center"
  },
  {
    id: "network",
    icon: Network,
    title: "Network Transformation",
    description: "Redesign your network architecture for enhanced security, performance, and resilience.",
    link: "/portfolio/network-transformation"
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security services to protect your business from evolving cyber threats.",
    link: "/portfolio#security"
  },
  {
    id: "staffing",
    icon: Users,
    title: "Staff Augmentation",
    description: "Access top technical talent to supplement your team and accelerate project delivery.",
    link: "/portfolio#staffing"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Our Expert Solutions
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet the complex needs of modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="border border-[#b7dcf9] bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${150 * (index % 3 + 1)}ms` }}
            >
              <CardHeader>
                <div className="bg-[#b5deff]/40 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[#0073e6]" />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700 min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link}>
                  <Button variant="ghost" className="text-[#0073e6] p-0 hover:text-[#0059b3] hover:bg-transparent transition-all duration-300">
                    Learn more →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in delay-600">
          <Link to="/portfolio">
            <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white transition-all duration-300 transform hover:scale-105">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
