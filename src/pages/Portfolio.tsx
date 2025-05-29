
import Layout from "@/components/layout/Layout";
import { Shield, Cloud, Server, Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "consulting",
    icon: Shield,
    title: "Technology Consulting",
    description: "Expert guidance on technology strategy, assessment, and implementation to strengthen your business processes.",
    features: [
      "Digital Transformation Strategy",
      "IT Assessment and Roadmap",
      "Enterprise Architecture Design",
      "Project Management Office"
    ]
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure with comprehensive protection for data, applications, and workloads.",
    features: [
      "Cloud Migration and Adoption",
      "Hybrid and Multi-Cloud Architecture",
      "Cloud Security and Compliance",
      "Cloud Cost Optimization"
    ]
  },
  {
    id: "data-center",
    icon: Server,
    title: "Data Center Modernization",
    description: "Transform your data center with secure, efficient, and scalable infrastructure solutions.",
    features: [
      "Infrastructure Consolidation",
      "Server Virtualization",
      "Software-Defined Data Center",
      "Disaster Recovery Planning"
    ]
  },
  {
    id: "network",
    icon: Network,
    title: "Network Transformation",
    description: "Optimize your network architecture for enhanced security, performance, and resilience.",
    features: [
      "SD-WAN Implementation",
      "Network Security Architecture",
      "Unified Communications",
      "Network Monitoring and Management"
    ]
  }
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#b5deff] py-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-[#0073e6]">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-700">
              Comprehensive technology solutions and successful client implementations that drive digital transformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 animate-fade-in delay-150">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-slate-700">
              We offer a comprehensive suite of technology services to help organizations transform, secure, and optimize their digital infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                id={service.id}
                key={service.id} 
                className="bg-white rounded-lg shadow-md border border-[#b7dcf9] overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${200 * (index + 1)}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#b5deff]/40 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-[#0073e6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-[#b7dcf9] pt-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Services</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-[#0073e6] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 animate-fade-in delay-450">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#b7dcf9] to-[#b5deff] rounded-lg p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Ready to transform your technology infrastructure?
            </h2>
            
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
              Contact our team to discuss your specific technology challenges and how we can help you achieve your business goals.
            </p>
            
            <Link to="/contact">
              <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
