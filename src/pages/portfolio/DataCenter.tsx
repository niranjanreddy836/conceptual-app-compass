
import Layout from "@/components/layout/Layout";
import { Server, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataCenter = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#b5deff] py-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Data Center <span className="text-[#0073e6]">Modernization</span>
            </h1>
            <p className="text-xl text-slate-700">
              Transform your data center with secure, efficient, and scalable infrastructure solutions.
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
                Modern Data Center Solutions
              </h2>
              
              <p className="text-lg text-slate-700 mb-6">
                Our data center modernization experts help organizations transform legacy infrastructure into agile, 
                efficient, and resilient environments that can support evolving business needs while reducing operational costs.
              </p>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern data center infrastructure" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Our Approach to Data Center Modernization
              </h3>
              
              <p className="text-lg text-slate-700 mb-6">
                We take a strategic approach to data center modernization, evaluating your current infrastructure, 
                business requirements, and future goals to design and implement a tailored transformation roadmap.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Infrastructure Assessment</h4>
                  </div>
                  <p className="text-slate-700">
                    Comprehensive evaluation of existing data center infrastructure to identify optimization opportunities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Virtualization Solutions</h4>
                  </div>
                  <p className="text-slate-700">
                    Server and storage virtualization to increase resource utilization and operational flexibility.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Software-Defined Infrastructure</h4>
                  </div>
                  <p className="text-slate-700">
                    Implementation of software-defined networking, storage, and compute for enhanced agility.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-[#b7dcf9] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-[#0073e6] mr-2" />
                    <h4 className="text-xl font-medium text-slate-800">Disaster Recovery</h4>
                  </div>
                  <p className="text-slate-700">
                    Robust disaster recovery solutions to ensure business continuity and minimize downtime.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-[#b7dcf9]/10 p-6 rounded-lg shadow-sm border border-[#b7dcf9] sticky top-24">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Server className="h-5 w-5 text-[#0073e6] mr-2" />
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
                    <Link to="/portfolio/cloud-solutions" className="flex items-center text-slate-700 hover:text-[#0073e6] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/data-center" className="flex items-center text-[#0073e6] font-medium">
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
                  <h4 className="text-lg font-medium text-slate-800 mb-3">Ready to modernize your data center?</h4>
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
              Ready to transform your data center infrastructure?
            </h2>
            
            <p className="text-lg text-slate-700 mb-8">
              Our experts will help you design and implement a modern, efficient data center solution tailored to your business needs.
            </p>
            
            <Link to="/contact">
              <Button className="bg-[#0073e6] hover:bg-[#0059b3] text-white px-8 py-3 text-lg">
                Start Your Transformation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataCenter;
