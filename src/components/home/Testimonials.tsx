
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The CyberShield team transformed our security infrastructure and gave us confidence in our ability to detect and respond to threats. Their expertise is unmatched in the industry.",
    name: "Sarah Johnson",
    title: "CISO, Global Financial Services",
    company: "FinSecure Inc."
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
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about their experience working with CyberShield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500/10 p-2 rounded-full">
                    <User className="h-5 w-5 text-cyan-600" />
                  </div>
                </div>
                <blockquote className="text-slate-700 dark:text-slate-300 mb-6 italic">
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
  );
};

export default Testimonials;
