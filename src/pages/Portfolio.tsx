
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ChevronRight, Shield, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300">
              Explore our success stories and see how we've helped organizations strengthen their security posture.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-slate-100 dark:bg-slate-800">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Security</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Case Study 1 */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Cloud Security
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Financial Services</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Multi-Cloud Security for Global Bank
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Implemented comprehensive security controls across AWS and Azure environments, reducing security incidents by 73%.
                    </p>
                    <Link to="/case-studies/multi-cloud" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Case Study 2 */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Consulting
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Healthcare</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      HIPAA Compliance & Security Assessment
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Performed comprehensive security assessment for a healthcare provider, ensuring HIPAA compliance and implementing enhanced security controls.
                    </p>
                    <Link to="/case-studies/healthcare-compliance" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Case Study 3 */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Infrastructure
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Server className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Manufacturing</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Secure OT/IT Network Segregation
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Designed and implemented secure segregation between operational technology and IT networks for a global manufacturer.
                    </p>
                    <Link to="/case-studies/network-segregation" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Case Study 4 */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Cloud Security
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>E-commerce</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      PCI-DSS Compliant Cloud Infrastructure
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Built secure, PCI-DSS compliant cloud infrastructure for a major e-commerce platform handling millions of transactions.
                    </p>
                    <Link to="/case-studies/pci-cloud" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Case Study 5 */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Consulting
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Government</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Cybersecurity Strategy Development
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Developed comprehensive cybersecurity strategy and roadmap for a government agency, establishing clear security objectives.
                    </p>
                    <Link to="/case-studies/government-strategy" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Case Study 6 */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Infrastructure
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Server className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Technology</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Zero Trust Network Implementation
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Designed and deployed a zero trust network architecture for a technology company with global operations.
                    </p>
                    <Link to="/case-studies/zero-trust" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="consulting">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Only consulting case studies would appear here */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Consulting
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Healthcare</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      HIPAA Compliance & Security Assessment
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Performed comprehensive security assessment for a healthcare provider, ensuring HIPAA compliance and implementing enhanced security controls.
                    </p>
                    <Link to="/case-studies/healthcare-compliance" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Consulting
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Government</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Cybersecurity Strategy Development
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Developed comprehensive cybersecurity strategy and roadmap for a government agency, establishing clear security objectives.
                    </p>
                    <Link to="/case-studies/government-strategy" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Similar TabsContent components for cloud and infrastructure */}
            <TabsContent value="cloud">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Cloud Security
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Financial Services</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Multi-Cloud Security for Global Bank
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Implemented comprehensive security controls across AWS and Azure environments, reducing security incidents by 73%.
                    </p>
                    <Link to="/case-studies/multi-cloud" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Cloud Security
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>E-commerce</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      PCI-DSS Compliant Cloud Infrastructure
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Built secure, PCI-DSS compliant cloud infrastructure for a major e-commerce platform handling millions of transactions.
                    </p>
                    <Link to="/case-studies/pci-cloud" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="infrastructure">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Infrastructure
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Server className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Manufacturing</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Secure OT/IT Network Segregation
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Designed and implemented secure segregation between operational technology and IT networks for a global manufacturer.
                    </p>
                    <Link to="/case-studies/network-segregation" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                      <div className="absolute bottom-0 left-0 bg-cyan-600 text-white px-4 py-2 text-sm font-medium">
                        Infrastructure
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Server className="h-5 w-5 text-cyan-600 mr-2" />
                      <CardDescription>Technology</CardDescription>
                    </div>
                    <CardTitle className="mb-2">
                      Zero Trust Network Implementation
                    </CardTitle>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                      Designed and deployed a zero trust network architecture for a technology company with global operations.
                    </p>
                    <Link to="/case-studies/zero-trust" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium inline-flex items-center">
                      View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to secure your business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact us today to discuss how we can help protect your organization from evolving cyber threats.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
