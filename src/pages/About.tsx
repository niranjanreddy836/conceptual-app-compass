
import Layout from "@/components/layout/Layout";
import { Shield, Users, Globe, CheckCircle, Award, Briefcase, Target } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#b5deff] py-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-[#0073e6]">PrimitiveWave</span>
            </h1>
            <p className="text-xl text-slate-700">
              Global leaders in enterprise technology solutions with a mission to transform organizations for digital success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20 animate-fade-in delay-150">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-500 hover:scale-102">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Company
              </h2>
              <p className="text-lg text-slate-700 mb-4">
                Founded in 2010, PrimitiveWave has grown to become a trusted name in enterprise technology, serving clients across the globe with innovative solutions tailored to their unique needs.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Our team of certified experts brings decades of combined experience across various industries, enabling us to provide comprehensive technology services that drive meaningful results.
              </p>
              <p className="text-lg text-slate-700">
                We believe that technology is not just about tools but about understanding business objectives and designing solutions that enable growth while managing complexity effectively.
              </p>
            </div>
            <div className="bg-[#b7dcf9]/30 p-8 rounded-lg border border-[#b7dcf9] shadow-lg transition-all duration-500 hover:shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#0073e6] mb-2">150+</div>
                  <p className="text-slate-700">Enterprise Clients</p>
                </div>
                <div className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#0073e6] mb-2">25+</div>
                  <p className="text-slate-700">Countries Served</p>
                </div>
                <div className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#0073e6] mb-2">200+</div>
                  <p className="text-slate-700">Technology Experts</p>
                </div>
                <div className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#0073e6] mb-2">99.9%</div>
                  <p className="text-slate-700">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 bg-[#b5deff]/20 animate-fade-in delay-300">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-slate-700">
              We follow a proven methodology to identify, implement, and manage your technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Assessment</h3>
              <p className="text-slate-700">Comprehensive analysis of your technology landscape to identify opportunities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Protection</h3>
              <p className="text-slate-700">Implementation of tailored solutions to safeguard your digital assets</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Monitoring</h3>
              <p className="text-slate-700">Continuous oversight to ensure optimal performance and security</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mx-auto h-16 w-16 bg-[#b7dcf9] rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-[#0073e6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Optimization</h3>
              <p className="text-slate-700">Continuous improvement of technology to address evolving business needs</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 animate-fade-in delay-450">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-slate-700">
              At PrimitiveWave, we're driven by a clear mission and guided by strong values that shape everything we do.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#b7dcf9] mb-10 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#0073e6] mr-3" />
                <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <p className="text-slate-700">
                To empower organizations with innovative technology solutions that enable digital transformation and business growth while ensuring long-term success.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Excellence</h4>
                </div>
                <p className="text-slate-700">
                  We strive for excellence in everything we do, delivering the highest quality solutions to our clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Partnership</h4>
                </div>
                <p className="text-slate-700">
                  We build lasting relationships with our clients, working together as trusted technology partners.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Integrity</h4>
                </div>
                <p className="text-slate-700">
                  We act with honesty and transparency in all our dealings, building trust through ethical conduct.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#b7dcf9] transition-all duration-300 hover:shadow-md hover:border-[#0073e6]">
                <div className="flex items-center mb-3">
                  <Globe className="h-5 w-5 text-[#0073e6] mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Innovation</h4>
                </div>
                <p className="text-slate-700">
                  We continuously evolve our technology approaches to stay ahead of emerging trends and deliver cutting-edge solutions.
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
