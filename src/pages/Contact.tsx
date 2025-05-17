
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300">
              Get in touch with our cybersecurity experts to discuss your security needs and challenges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email Contact */}
              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-cyan-500/10 p-4 rounded-full mb-6">
                    <Mail className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">Reach out via email</p>
                  <a href="mailto:contact@cybershield.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    contact@cybershield.com
                  </a>
                </CardContent>
              </Card>
              
              {/* Phone Contact */}
              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-cyan-500/10 p-4 rounded-full mb-6">
                    <Phone className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">Call our security team</p>
                  <a href="tel:+15551234567" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </CardContent>
              </Card>
              
              {/* Office Location */}
              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-cyan-500/10 p-4 rounded-full mb-6">
                    <MapPin className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Headquarters</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">Visit our main office</p>
                  <address className="text-slate-600 dark:text-slate-400 not-italic">
                    123 Security Blvd<br/>
                    Suite 500<br/>
                    San Francisco, CA 94105
                  </address>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Global Security Operations
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                With security operations centers across North America, Europe, and Asia, our team provides 24/7 monitoring and incident response capabilities for clients around the world.
              </p>
              <div className="h-80 bg-slate-200 dark:bg-slate-700 rounded-lg">
                {/* World map or locations visualization would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional information */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to enhance your security posture?
            </h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
              Our team of cybersecurity experts is available to discuss your security challenges and provide tailored solutions to protect your organization.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400">
              Contact us today to schedule a consultation or request more information about our services.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
