
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: "financial-security",
    title: "Global Bank Security Transformation",
    industry: "Financial Services",
    challenge: "Modernizing legacy security systems while maintaining compliance",
    result: "50% reduction in security incidents, 99.99% uptime achieved",
    link: "/case-studies/financial-security"
  },
  {
    id: "healthcare-protection",
    title: "Healthcare Provider Data Protection",
    industry: "Healthcare",
    challenge: "Securing patient data across distributed hospital networks",
    result: "HIPAA compliance achieved, zero data breaches since implementation",
    link: "/case-studies/healthcare-protection"
  },
  {
    id: "retail-transformation",
    title: "Retail Chain Network Transformation",
    industry: "Retail",
    challenge: "Securing 500+ locations with minimal IT staff",
    result: "70% improvement in threat detection, simplified management",
    link: "/case-studies/retail-transformation"
  }
];

const CaseStudyPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See how we've helped organizations across industries strengthen their security posture and protect critical assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-md flex flex-col">
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
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Result:</h4>
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
        
        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
