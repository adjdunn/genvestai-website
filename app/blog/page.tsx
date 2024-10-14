import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="mb-8">This page is under construction. Check back soon for our latest articles!</p>
      <Link href="/">
        <Button className="group">
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}