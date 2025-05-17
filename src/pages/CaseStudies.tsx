
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "financial-security",
    title: "Global Bank Security Transformation",
    industry: "Financial Services",
    challenge: "Modernizing legacy security systems while maintaining compliance with banking regulations across 20 countries.",
    solution: "Implemented a phased Zero Trust architecture with enhanced monitoring and automated compliance controls.",
    result: "50% reduction in security incidents, 99.99% uptime achieved, and simplified compliance reporting across all regions.",
    link: "/case-studies/financial-security"
  },
  {
    id: "healthcare-protection",
    title: "Healthcare Provider Data Protection",
    industry: "Healthcare",
    challenge: "Securing patient data across distributed hospital networks with limited IT security staff and budget constraints.",
    solution: "Deployed a centralized security management platform with AI-powered threat detection and response capabilities.",
    result: "HIPAA compliance achieved, zero data breaches since implementation, and 40% reduction in security management time.",
    link: "/case-studies/healthcare-protection"
  },
  {
    id: "retail-transformation",
    title: "Retail Chain Network Transformation",
    industry: "Retail",
    challenge: "Securing 500+ locations with minimal IT staff while supporting new digital customer experience initiatives.",
    solution: "Implemented SD-WAN with integrated security and centralized cloud management for all locations.",
    result: "70% improvement in threat detection, simplified management, and enabled secure deployment of new digital services.",
    link: "/case-studies/retail-transformation"
  },
  {
    id: "manufacturing-security",
    title: "Manufacturing OT/IT Security Integration",
    industry: "Manufacturing",
    challenge: "Protecting operational technology environments from cyber threats while maintaining production efficiency.",
    solution: "Designed a segmented architecture with specialized OT security monitoring and controlled IT/OT integration points.",
    result: "Secured critical infrastructure without production disruption and achieved regulatory compliance for industrial systems.",
    link: "/case-studies/manufacturing-security"
  },
  {
    id: "government-cloud",
    title: "Government Agency Cloud Migration",
    industry: "Government",
    challenge: "Securely migrating classified workloads to cloud environments while meeting strict government security requirements.",
    solution: "Developed a FedRAMP-compliant cloud security framework with enhanced encryption and access controls.",
    result: "Successfully migrated 200+ applications with zero security incidents and achieved all compliance requirements.",
    link: "/case-studies/government-cloud"
  },
  {
    id: "energy-infrastructure",
    title: "Energy Company Infrastructure Protection",
    industry: "Energy",
    challenge: "Defending critical energy infrastructure against sophisticated nation-state threats and attacks.",
    solution: "Implemented advanced threat hunting, 24/7 SOC operations, and critical infrastructure-specific security controls.",
    result: "Detected and prevented multiple targeted attacks, ensuring continuous operations of essential energy services.",
    link: "/case-studies/energy-infrastructure"
  }
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300">
              Real-world examples of how we've helped organizations strengthen their security posture and protect critical assets.
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md flex flex-col h-full">
                <CardHeader>
                  <div className="mb-3">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Challenge:</h4>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {study.challenge}
                    </CardDescription>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Solution:</h4>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {study.solution}
                    </CardDescription>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Results:</h4>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {study.result}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={study.link}>
                    <Button variant="outline" className="border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
                      Read Full Case Study
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to become our next success story?
            </h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Contact our team to discuss your specific cybersecurity challenges and how we can help you achieve similar results.
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

export default CaseStudies;
