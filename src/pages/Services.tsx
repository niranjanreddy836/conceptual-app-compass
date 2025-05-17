
import Layout from "@/components/layout/Layout";
import { Shield, Cloud, Server, Network, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceDetails = [
  {
    id: "consulting",
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Expert guidance to strengthen your security posture, manage risk, and ensure compliance with industry regulations.",
    benefits: [
      "Comprehensive security assessments and gap analysis",
      "Strategic security roadmap development",
      "Regulatory compliance guidance (GDPR, HIPAA, PCI DSS, etc.)",
      "Security policy development and implementation",
      "Risk management frameworks and processes",
      "Security awareness training programs"
    ]
  },
  {
    id: "cloud-security",
    icon: Cloud,
    title: "Cloud Security Solutions",
    description: "Protect your cloud infrastructure, applications, and data with our comprehensive cloud security services.",
    benefits: [
      "Cloud security architecture design and implementation",
      "Cloud security posture management",
      "DevSecOps integration for secure cloud deployments",
      "Cloud access security broker (CASB) solutions",
      "Containerization and Kubernetes security",
      "Continuous cloud security monitoring and detection"
    ]
  },
  {
    id: "data-center",
    icon: Server,
    title: "Data Center Modernization",
    description: "Transform your data center with secure, efficient, and scalable infrastructure solutions.",
    benefits: [
      "Data center security architecture and design",
      "Secure virtualization and software-defined infrastructure",
      "Legacy system security modernization",
      "Data center consolidation with enhanced security",
      "Disaster recovery and business continuity planning",
      "Physical and cyber security integration"
    ]
  },
  {
    id: "network",
    icon: Network,
    title: "Network Transformation",
    description: "Optimize your network architecture for enhanced security, performance, and resilience.",
    benefits: [
      "Secure software-defined networking (SDN) implementation",
      "Zero Trust Network Architecture design",
      "Secure access service edge (SASE) solutions",
      "Network segmentation and micro-segmentation",
      "Next-generation firewall deployment and management",
      "Advanced network threat detection and response"
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive cybersecurity solutions designed to protect your organization's most valuable digital assets.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Expert Cybersecurity Services
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              We offer a comprehensive range of services to address the complex security challenges facing today's enterprises.
            </p>
          </div>
          
          {/* Services Detail */}
          <div className="space-y-24">
            {serviceDetails.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'flex flex-col-reverse md:flex-row' : 'flex flex-col md:flex-row'}`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-80 md:h-96"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to secure your organization?
            </h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Contact our team of cybersecurity experts today to discuss how we can help protect your critical assets and infrastructure.
            </p>
            
            <Link to="/contact">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
