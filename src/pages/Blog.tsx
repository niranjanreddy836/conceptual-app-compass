
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "zero-trust-architecture",
    title: "Implementing Zero Trust Architecture in Enterprise Environments",
    date: "May 10, 2025",
    author: "Marcus Chen, CTO",
    category: "Security Strategy",
    excerpt: "Zero Trust is more than a buzzword—it's a fundamental shift in security architecture. Learn how enterprises can successfully implement Zero Trust principles to enhance their security posture.",
    readTime: "8 min read",
    link: "/blog/zero-trust-architecture"
  },
  {
    id: "cloud-security-challenges",
    title: "Overcoming Cloud Security Challenges in 2025",
    date: "May 3, 2025",
    author: "Jennifer Roberts, CEO",
    category: "Cloud Security",
    excerpt: "As organizations continue their cloud journey, new security challenges emerge. This post explores the most pressing cloud security concerns and practical strategies to address them.",
    readTime: "6 min read",
    link: "/blog/cloud-security-challenges"
  },
  {
    id: "ransomware-prevention",
    title: "Advanced Ransomware Prevention Strategies for Critical Infrastructure",
    date: "April 27, 2025",
    author: "Sophia Williams, VP of Security Operations",
    category: "Threat Defense",
    excerpt: "Ransomware attacks against critical infrastructure continue to rise. Discover proactive measures to prevent, detect, and respond to sophisticated ransomware threats.",
    readTime: "10 min read",
    link: "/blog/ransomware-prevention"
  },
  {
    id: "compliance-frameworks",
    title: "Navigating the Evolving Landscape of Security Compliance Frameworks",
    date: "April 20, 2025",
    author: "David Rodriguez, VP of Client Services",
    category: "Compliance",
    excerpt: "With new regulations emerging globally, security compliance is increasingly complex. Learn how to build a strategic approach to managing multiple compliance requirements efficiently.",
    readTime: "7 min read",
    link: "/blog/compliance-frameworks"
  },
  {
    id: "ai-security",
    title: "AI-Powered Security: Opportunities and Risks",
    date: "April 15, 2025",
    author: "Marcus Chen, CTO",
    category: "Emerging Technology",
    excerpt: "Artificial intelligence is transforming cybersecurity—both as a defensive tool and as a new attack vector. Explore the double-edged nature of AI in security operations.",
    readTime: "9 min read",
    link: "/blog/ai-security"
  },
  {
    id: "supply-chain-security",
    title: "Strengthening Software Supply Chain Security",
    date: "April 8, 2025",
    author: "Sophia Williams, VP of Security Operations",
    category: "Application Security",
    excerpt: "Recent high-profile supply chain attacks have highlighted vulnerabilities in the software development lifecycle. Learn how to secure your supply chain from end to end.",
    readTime: "8 min read",
    link: "/blog/supply-chain-security"
  }
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Insights
            </h1>
            <p className="text-xl text-slate-300">
              Expert perspectives on cybersecurity trends, challenges, and solutions from our team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mt-2">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={post.link}>
                    <Button variant="ghost" className="text-cyan-600 dark:text-cyan-400 p-0 hover:text-cyan-700 hover:bg-transparent">
                      Read Full Article →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Stay Updated on Security Trends
            </h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights on cybersecurity trends, threats, and best practices.
            </p>
            
            <div className="flex justify-center">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
