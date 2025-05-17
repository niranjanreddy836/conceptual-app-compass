
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNHYtNGgtMnY0aDJ6bTYgMGgtMnYtNGgydjR6TTI0IDI0di00aC0ydjRoMnptNiAwdi00aC0ydjRoMnptNiAwdi00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Contact our team of cybersecurity experts today to discuss how we can help protect your organization's valuable digital assets.
          </p>
          
          <Link to="/contact">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
