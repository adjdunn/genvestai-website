import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    icon: Brain,
    title: "Cutting-Edge AI Expertise",
    content: "Access the latest AI technologies and methodologies tailored for the investment industry. Stay ahead of the curve with our expert-led training programs."
  },
  {
    icon: TrendingUp,
    title: "Practical Application",
    content: "Learn how to apply AI tools to real-world investment scenarios. Enhance your decision-making process with data-driven insights and predictive analytics."
  },
  {
    icon: Users,
    title: "Industry Network",
    content: "Join a community of forward-thinking investment professionals. Share insights, collaborate on projects, and stay connected with industry leaders."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground font-display animate-fade-in">
          About GenVest AI
        </h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg text-muted-foreground animate-fade-in">
          Our mission is to empower finance professionals with cutting-edge AI skills, bridging the gap between traditional investment strategies and the transformative power of artificial intelligence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center text-primary text-xl font-display">
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center animate-fade-in">
          <Link href="#contact">
            <Button size="lg" className="group text-lg bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;