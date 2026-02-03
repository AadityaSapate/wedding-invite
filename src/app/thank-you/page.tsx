import Link from 'next/link';
import { Heart, CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <CheckCircle className="w-24 h-24 text-primary-500" />
            <Heart className="w-8 h-8 text-primary-500 fill-primary-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="heading-1 text-primary-600 mb-6">
          Thank You!
        </h1>

        <div className="space-y-4 mb-12">
          <p className="text-xl text-neutral-700">
            Your RSVP has been successfully submitted.
          </p>
          <p className="text-lg text-neutral-600">
            We&apos;re so excited to celebrate with you!
          </p>
          <p className="text-neutral-600">
            You should receive a confirmation email shortly.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <h2 className="font-serif text-2xl text-neutral-900 mb-4">
            What&apos;s Next?
          </h2>
          <ul className="text-left space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">•</span>
              <span>Check your email for event details and updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">•</span>
              <span>Mark your calendar for the big day</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">•</span>
              <span>If you have any questions, feel free to reach out to us</span>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
