import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogCategories = [
  "AI in Finance",
  "Machine Learning",
  "Investment Strategies",
  "Risk Management",
];

const blogPosts = [
  {
    title: "Leveraging NLP for Market Sentiment Analysis",
    excerpt: "Discover how Natural Language Processing can provide valuable insights into market trends and investor sentiment.",
    date: "May 15, 2023",
    author: "Dr. Jane Smith",
    category: "AI in Finance"
  },
  {
    title: "Machine Learning in Portfolio Optimization",
    excerpt: "Explore how machine learning algorithms can enhance portfolio construction and risk management.",
    date: "June 2, 2023",
    author: "Michael Johnson, CFA",
    category: "Machine Learning"
  },
  {
    title: "The Future of Algorithmic Trading with AI",
    excerpt: "Dive into the potential of AI-driven algorithmic trading strategies and their impact on market dynamics.",
    date: "June 20, 2023",
    author: "Sarah Lee, Ph.D.",
    category: "Investment Strategies"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-display animate-fade-in">Latest Insights</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {blogCategories.map((category, index) => (
            <Button key={index} variant="outline" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl font-semibold hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <p className="text-sm text-muted-foreground">
                  {post.date} | By {post.author}
                </p>
                <span className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full mt-2">
                  {post.category}
                </span>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group text-primary hover:text-primary-foreground hover:bg-primary">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center animate-fade-in">
          <Link href="/blog">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;