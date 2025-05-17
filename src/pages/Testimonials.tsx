
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The CyberShield team transformed our security infrastructure and gave us confidence in our ability to detect and respond to threats. Their expertise is unmatched in the industry.",
    name: "Sarah Johnson",
    title: "CISO",
    company: "Global Financial Services"
  },
  {
    id: 2,
    quote: "Working with CyberShield on our cloud security initiative was a game-changer. Their methodical approach and deep expertise helped us achieve compliance while improving overall security posture.",
    name: "Michael Chen",
    title: "VP of IT Infrastructure",
    company: "HealthTech Systems"
  },
  {
    id: 3,
    quote: "The network transformation led by CyberShield allowed us to modernize our infrastructure while strengthening security across all our retail locations. The ROI has been exceptional.",
    name: "David Wilson",
    title: "CTO",
    company: "Global Retail Group"
  },
  {
    id: 4,
    quote: "Our experience with CyberShield's data center modernization services exceeded expectations. They not only enhanced our security but also improved efficiency and reduced operational costs.",
    name: "Jennifer Martinez",
    title: "IT Director",
    company: "Manufacturing Enterprise"
  },
  {
    id: 5,
    quote: "CyberShield's security assessment identified critical vulnerabilities that had been overlooked by previous vendors. Their remediation plan was clear, practical, and effective.",
    name: "Robert Taylor",
    title: "Security Operations Manager",
    company: "Energy Corporation"
  },
  {
    id: 6,
    quote: "The Zero Trust implementation designed by CyberShield has significantly strengthened our security posture. Their team's expertise and guidance throughout the process was invaluable.",
    name: "Emily Wong",
    title: "Information Security Officer",
    company: "Government Agency"
  },
  {
    id: 7,
    quote: "After experiencing a security incident, CyberShield helped us rebuild our security program from the ground up. Their incident response and recovery expertise was critical to our business continuity.",
    name: "James Peterson",
    title: "CEO",
    company: "Mid-size Technology Firm"
  },
  {
    id: 8,
    quote: "CyberShield's cloud security team helped us securely accelerate our digital transformation initiatives. Their guidance gave our leadership team confidence to proceed with our strategic cloud adoption.",
    name: "Sophia Rodriguez",
    title: "Cloud Infrastructure Manager",
    company: "Insurance Provider"
  }
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-slate-300">
              Hear what our clients have to say about their experiences working with CyberShield.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-cyan-600" />
                    </div>
                  </div>
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8 md:p-12 border border-slate-200 dark:border-slate-600">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-200 dark:bg-slate-600 rounded-full mx-auto"></div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <blockquote className="text-slate-700 dark:text-slate-300 text-lg mb-6 italic">
                  "Working with CyberShield has been one of the best decisions we've made for our security program. Their team took the time to understand our unique challenges and designed solutions that addressed our specific needs. The results speak for themselves."
                </blockquote>
                
                <div className="text-center md:text-left">
                  <p className="font-semibold text-slate-900 dark:text-white text-lg">Thomas Anderson</p>
                  <p className="text-cyan-600 dark:text-cyan-400">Chief Information Officer</p>
                  <p className="text-slate-600 dark:text-slate-400">Enterprise Technology Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
