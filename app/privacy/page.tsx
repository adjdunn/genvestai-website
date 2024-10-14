import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-8">
        This is a placeholder for the GenVest AI Privacy Policy. We are committed to protecting your privacy and ensuring the security of your personal information. A detailed privacy policy will be available soon.
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