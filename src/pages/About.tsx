import Layout from "@/components/layout/Layout";
import { Shield, Users, Globe, CheckCircle, Award, Briefcase, Target, Server } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#b5deff] py-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-[#0073e6]">Primitive Wave Technologies</span>
            </h1>
            <p className="text-xl text-slate-700">
              Strengthening the digital backbone of modern enterprises through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20 animate-fade-in delay-150">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="transform transition-all duration-500 hover:scale-102">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                At Primitive Wave Technologies, we are on a mission to strengthen the digital backbone of modern enterprises through cutting-edge software solutions in data management, cybersecurity, and cyber resilience.
              </p>
              <p className="text-lg text-slate-700">
                We operate as a trusted software product and partnering with top-tier global vendors to deliver advanced, reliable, and scalable solutions that protect your critical data assets and ensure operational continuity in the face of evolving cyber threats.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-[#b5deff]/20 animate-fade-in delay-300">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-slate-700">
              We specialize in delivering comprehensive cybersecurity and data protection solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Cybersecurity Software Reselling</h3>
              <p className="text-slate-700">Antivirus, threat intelligence, endpoint protection, SIEM, and firewall solutions from leading providers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Server className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Data Protection & Management</h3>
              <p className="text-slate-700">Backup, recovery, data loss prevention (DLP), and secure data storage technologies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Cyber Resilience Tools</h3>
              <p className="text-slate-700">Software to ensure business continuity, rapid disaster recovery, and proactive risk mitigation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Purpose */}
      <section className="py-20 animate-fade-in delay-450">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Purpose
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                In today's rapidly changing threat landscape, securing data and maintaining resilience is not just a technical goal—it's a business imperative. We help organizations:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Target className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Identify</h4>
                </div>
                <p className="text-slate-700">
                  Identify the right tools to secure their infrastructure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Implement</h4>
                </div>
                <p className="text-slate-700">
                  Implement reliable solutions that align with compliance and performance goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Build Resilience</h4>
                </div>
                <p className="text-slate-700">
                  Build resilience into their systems to recover quickly from disruptions or breaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#b5deff]/20 animate-fade-in delay-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Why Choose Us?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Strategic Vendor Partnerships</h4>
                </div>
                <p className="text-slate-700">
                  We bring you globally trusted solutions tailored to local needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Target className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Customer-Centric Approach</h4>
                </div>
                <p className="text-slate-700">
                  We understand that every business is unique—our offerings are flexible and scalable.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Focus on Resilience</h4>
                </div>
                <p className="text-slate-700">
                  We go beyond protection; we help businesses bounce back stronger.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Expert Guidance</h4>
                </div>
                <p className="text-slate-700">
                  From selection to deployment, our team ensures seamless integration and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
