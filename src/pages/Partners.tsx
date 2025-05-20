
import Layout from "@/components/layout/Layout";
import { Users, Link as LinkIcon, Shield, Server, Award, CheckCircle } from "lucide-react";

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-slate-300">
              We collaborate with industry-leading technology providers to deliver comprehensive security solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Strategic Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Strategic Technology Partners
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              We partner with the world's leading cybersecurity and technology vendors to provide best-in-class solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {/* Partner logos - using placeholder divs */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg h-24 flex items-center justify-center">
                <div className="w-3/4 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partnership Benefits */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Partnership Benefits
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Our partnership program offers significant advantages to both our clients and our partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Security Portfolio
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Access to best-in-class security technologies and solutions from leading vendors, integrated into comprehensive security strategies.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
              <Server className="h-12 w-12 text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Technical Expertise
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Leverage our certified experts who maintain proficiency across various security technologies and platforms.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Industry Recognition
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Benefit from our status as recognized leaders and certified partners with major security technology providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Become a Partner */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Become a CyberShield Partner
                </h2>
                <p className="text-slate-300 mb-6">
                  Join our network of technology and service partners to expand your offerings and deliver enhanced value to your customers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Access to our global customer base</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Co-marketing opportunities and resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Technical training and certification support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Joint solution development opportunities</span>
                  </li>
                </ul>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium transition-colors"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Apply for Partnership
                </a>
              </div>
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-6">
                  Our Partner Program Types
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold mr-4">1</div>
                      <h4 className="text-lg font-semibold text-white">Technology Partners</h4>
                    </div>
                    <p className="text-slate-300 pl-14">
                      Vendors and manufacturers of cybersecurity and IT solutions.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold mr-4">2</div>
                      <h4 className="text-lg font-semibold text-white">Service Partners</h4>
                    </div>
                    <p className="text-slate-300 pl-14">
                      Consulting firms, MSPs, and system integrators.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold mr-4">3</div>
                      <h4 className="text-lg font-semibold text-white">Alliance Partners</h4>
                    </div>
                    <p className="text-slate-300 pl-14">
                      Strategic relationships with complementary service providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Client Success Stories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Partner Success Stories
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              See how our partnerships have delivered exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-slate-200 dark:bg-slate-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Cloud Security Alliance
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Our partnership with CSA has enabled us to develop cutting-edge cloud security methodologies and frameworks.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium">
                  Learn More <LinkIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-slate-200 dark:bg-slate-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  AWS Advanced Consulting
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Our AWS partnership has allowed us to deliver secure cloud transformations for enterprise clients worldwide.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium">
                  Learn More <LinkIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-slate-200 dark:bg-slate-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Microsoft Security Partner
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Our Microsoft partnership enhances our ability to secure complex enterprise environments and Azure workloads.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium">
                  Learn More <LinkIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
