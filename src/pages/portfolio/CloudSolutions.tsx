
import Layout from "@/components/layout/Layout";
import { Cloud, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CloudSolutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#b5deff] py-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Cloud <span className="text-[#0073e6]">Solutions</span>
            </h1>
            <p className="text-xl text-slate-700">
              Secure and scalable cloud infrastructure with comprehensive protection for data, applications, and workloads.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 animate-fade-in delay-150">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Enterprise Cloud Solutions
              </h2>
              
              <p className="text-lg text-slate-700 mb-6">
                Our cloud experts help organizations design, implement, and optimize secure cloud environments 
                that enhance agility, reduce costs, and accelerate innovation while maintaining the highest 
                levels of security and compliance.
              </p>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Cloud computing infrastructure" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Our Cloud Services
              </h3>
              
              <p className="text-lg text-slate-700 mb-6">
                We provide end-to-end cloud solutions tailored to your specific business requirements, 
                whether you're looking to migrate to the cloud, optimize existing cloud resources, or 
                implement a hybrid cloud strategy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Cloud Migration</h4>
                  </div>
                  <p className="text-slate-700">
                    Seamless migration of applications and data to secure cloud environments with minimal disruption.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Hybrid Cloud Strategy</h4>
                  </div>
                  <p className="text-slate-700">
                    Optimized hybrid cloud architectures that balance performance, security, and cost-effectiveness.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Cloud Security</h4>
                  </div>
                  <p className="text-slate-700">
                    Robust security controls and monitoring to protect cloud-based data and applications.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Cloud Optimization</h4>
                  </div>
                  <p className="text-slate-700">
                    Cost optimization and resource efficiency improvements for existing cloud environments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-[#b7dcf9]/10 p-6 rounded-lg shadow-sm border border-[#b7dcf9] sticky top-24">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Cloud className="h-5 w-5 text-[#0073e6] mr-2" />
                  Our Services
                </h3>
                
                <ul className="space-y-3">
                  <li>
                    <Link to="/portfolio/consulting" className="flex items-center text-slate-700 hover:text-[#0073e6] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Technology Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/cloud-solutions" className="flex items-center text-[#0073e6] font-medium">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/data-center" className="flex items-center text-slate-700 hover:text-[#0073e6] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Data Center Modernization
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/network-transformation" className="flex items-center text-slate-700 hover:text-[#0073e6] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Network Transformation
                    </Link>
                  </li>
                </ul>
                
                <hr className="my-6 border-[#b7dcf9]" />
                
                <div className="text-center">
                  <h4 className="text-lg font-medium text-slate-800 mb-3">Ready to move to the cloud?</h4>
                  <Link to="/contact">
                    <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#b7dcf9]/10 animate-fade-in delay-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Ready to leverage the power of the cloud?
            </h2>
            
            <p className="text-lg text-slate-700 mb-8">
              Our cloud experts are ready to help you design and implement a secure, scalable cloud solution that meets your business needs.
            </p>
            
            <Link to="/contact">
              <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudSolutions;
