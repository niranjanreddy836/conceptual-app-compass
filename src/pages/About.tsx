
import Layout from "@/components/layout/Layout";
import { Shield, Users, Globe, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About CyberShield
            </h1>
            <p className="text-xl text-slate-300">
              Global leaders in enterprise cybersecurity solutions with a mission to protect organizations from evolving digital threats.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Company
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                Founded in 2010, CyberShield has grown to become a trusted name in enterprise cybersecurity, serving clients across the globe with innovative security solutions tailored to their unique needs.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                Our team of certified security experts brings decades of combined experience across various industries, enabling us to provide comprehensive protection against today's most sophisticated threats.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                We believe that security is not just about technology but about understanding business objectives and designing security measures that enable growth while managing risk effectively.
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">150+</div>
                  <p className="text-slate-700 dark:text-slate-300">Enterprise Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">25+</div>
                  <p className="text-slate-700 dark:text-slate-300">Countries Served</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">200+</div>
                  <p className="text-slate-700 dark:text-slate-300">Security Experts</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
                  <p className="text-slate-700 dark:text-slate-300">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              At CyberShield, we're driven by a clear mission and guided by strong values that shape everything we do.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md border border-slate-200 dark:border-slate-600 mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                To protect and empower organizations with innovative cybersecurity solutions that enable secure digital transformation and business growth while defending against evolving threats.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Excellence</h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  We strive for excellence in everything we do, delivering the highest quality security solutions to our clients.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-cyan-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Partnership</h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  We build lasting relationships with our clients, working together as trusted security partners.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Integrity</h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  We act with honesty and transparency in all our dealings, building trust through ethical conduct.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex items-center mb-3">
                  <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Innovation</h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  We continuously evolve our security approaches to stay ahead of emerging threats and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Meet the experienced professionals leading our mission to provide exceptional cybersecurity solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
              <div className="h-64 bg-slate-200 dark:bg-slate-700"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Jennifer Roberts</h4>
                <p className="text-cyan-600 dark:text-cyan-400 mb-4">Chief Executive Officer</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  20+ years of experience in cybersecurity leadership and business strategy.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
              <div className="h-64 bg-slate-200 dark:bg-slate-700"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Marcus Chen</h4>
                <p className="text-cyan-600 dark:text-cyan-400 mb-4">Chief Technology Officer</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Former security architect for Fortune 100 companies with multiple patents.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
              <div className="h-64 bg-slate-200 dark:bg-slate-700"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Sophia Williams</h4>
                <p className="text-cyan-600 dark:text-cyan-400 mb-4">VP of Security Operations</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Expert in threat intelligence and incident response management.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
              <div className="h-64 bg-slate-200 dark:bg-slate-700"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">David Rodriguez</h4>
                <p className="text-cyan-600 dark:text-cyan-400 mb-4">VP of Client Services</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Dedicated to ensuring exceptional security outcomes for all clients.
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
