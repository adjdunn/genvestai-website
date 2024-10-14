import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import VideoSection from '@/components/VideoSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <VideoSection />
      <NewsletterSignup />
      <ContactForm />
    </div>
  );
}