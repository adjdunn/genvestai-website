import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-8">
        This is a placeholder for the GenVest AI Terms of Service. By using our services, you agree to comply with and be bound by these terms. A detailed terms of service agreement will be available soon.
      </p>
      <Link href="/">
        <Button className="group">
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}