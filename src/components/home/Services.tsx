
import { Shield, Cloud, Server, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "consulting",
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Expert guidance on security strategy, risk assessment, and compliance to strengthen your security posture.",
    link: "/services#consulting"
  },
  {
    id: "cloud-security",
    icon: Cloud,
    title: "Cloud Security Solutions",
    description: "Secure your cloud infrastructure with comprehensive protection for data, applications, and workloads.",
    link: "/services#cloud-security"
  },
  {
    id: "data-center",
    icon: Server,
    title: "Data Center Modernization",
    description: "Transform your data center with secure, efficient, and scalable infrastructure solutions.",
    link: "/services#data-center"
  },
  {
    id: "network",
    icon: Network,
    title: "Network Transformation",
    description: "Optimize your network architecture for enhanced security, performance, and resilience.",
    link: "/services#network"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to meet the complex needs of modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-300 min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link}>
                  <Button variant="ghost" className="text-cyan-600 dark:text-cyan-400 p-0 hover:text-cyan-700 hover:bg-transparent">
                    Learn more →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
