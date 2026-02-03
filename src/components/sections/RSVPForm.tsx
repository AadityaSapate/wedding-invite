'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { submitRSVP } from '@/lib/actions/rsvp';
import { Loader2 } from 'lucide-react';

const rsvpSchema = z.object({
  guest_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  phone: z.string().optional(),
  attending: z.enum(['yes', 'no'], {
    message: 'Please select whether you can attend',
  }),
  guest_count: z.number().min(1).max(10).default(1),
  dietary_restrictions: z.string().optional(),
  message: z.string().optional(),
});

export function RSVPForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guest_count: 1,
    },
  });

  const attending = watch('attending');

  const onSubmit = async (data: z.infer<typeof rsvpSchema>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = {
        ...data,
        attending: data.attending === 'yes',
        email: data.email || undefined,
        phone: data.phone || undefined,
        dietary_restrictions: data.dietary_restrictions || undefined,
        message: data.message || undefined,
      };

      const result = await submitRSVP(formData);

      if (result.success) {
        router.push('/thank-you');
      } else {
        setError(result.error || 'Failed to submit RSVP. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('RSVP submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section-container bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-neutral-900 mb-4">RSVP</h2>
          <p className="text-lg text-neutral-600">
            Please let us know if you can join us by filling out the form below
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-neutral-50 rounded-2xl p-8 md:p-12 space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="guest_name"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Full Name <span className="text-primary-500">*</span>
            </label>
            <input
              {...register('guest_name')}
              type="text"
              id="guest_name"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="Your name"
            />
            {errors.guest_name && (
              <p className="mt-1 text-sm text-red-600">{errors.guest_name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-3">
              Will you be attending? <span className="text-primary-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  {...register('attending')}
                  type="radio"
                  value="yes"
                  className="peer sr-only"
                />
                <div className="px-6 py-4 border-2 border-neutral-300 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 transition text-center font-semibold">
                  Joyfully Accept
                </div>
              </label>
              <label className="flex-1">
                <input
                  {...register('attending')}
                  type="radio"
                  value="no"
                  className="peer sr-only"
                />
                <div className="px-6 py-4 border-2 border-neutral-300 rounded-lg cursor-pointer peer-checked:border-neutral-400 peer-checked:bg-neutral-100 transition text-center font-semibold">
                  Regretfully Decline
                </div>
              </label>
            </div>
            {errors.attending && (
              <p className="mt-1 text-sm text-red-600">{errors.attending.message}</p>
            )}
          </div>

          {/* Guest Count - only show if attending */}
          {attending === 'yes' && (
            <div>
              <label
                htmlFor="guest_count"
                className="block text-sm font-semibold text-neutral-700 mb-2"
              >
                Number of Guests
              </label>
              <select
                {...register('guest_count', { valueAsNumber: true })}
                id="guest_count"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Dietary Restrictions - only show if attending */}
          {attending === 'yes' && (
            <div>
              <label
                htmlFor="dietary_restrictions"
                className="block text-sm font-semibold text-neutral-700 mb-2"
              >
                Dietary Restrictions
              </label>
              <textarea
                {...register('dietary_restrictions')}
                id="dietary_restrictions"
                rows={3}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Please let us know of any dietary restrictions or allergies"
              />
            </div>
          )}

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Message to the Couple
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Share your well wishes or a favorite memory..."
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit RSVP'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
