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
  attending: z.enum(['yes', 'no'], {
    message: 'Please select whether you can attend',
  }),
  guest_count: z.number().min(1).max(10).default(1),
  needs_accommodation: z.boolean().default(true),
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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guest_count: 1,
      needs_accommodation: true,
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
    <section id="rsvp" className="py-32 px-6 bg-white">
      <div className="max-w-sm mx-auto text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-[0.3em] mb-4">
          Kindly Respond
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-12">
          Will you join us?
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Name Input - Minimal underline style */}
          <div>
            <input
              {...register('guest_name')}
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-neutral-300 py-3 text-center text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
            />
            {errors.guest_name && (
              <p className="mt-2 text-sm text-red-600">{errors.guest_name.message}</p>
            )}
          </div>

          {/* Attending - Text-based buttons */}
          <div>
            <div className="flex justify-center items-center gap-8 mb-2">
              <button
                type="button"
                onClick={() => setValue('attending', 'yes')}
                className={`font-serif text-lg transition-all ${
                  attending === 'yes'
                    ? 'text-primary-500'
                    : 'text-neutral-400 hover:text-neutral-900'
                }`}
              >
                Joyfully Accept
              </button>
              <span className="text-neutral-300">|</span>
              <button
                type="button"
                onClick={() => setValue('attending', 'no')}
                className={`font-serif text-lg transition-all ${
                  attending === 'no'
                    ? 'text-primary-500'
                    : 'text-neutral-400 hover:text-neutral-900'
                }`}
              >
                Regretfully Decline
              </button>
            </div>
            {errors.attending && (
              <p className="mt-2 text-sm text-red-600">{errors.attending.message}</p>
            )}
          </div>

          {/* Guest Count and Accommodation - only show if attending */}
          {attending === 'yes' && (
            <div className="space-y-6 pt-4">
              <div>
                <select
                  {...register('guest_count', { valueAsNumber: true })}
                  className="w-full bg-transparent border-b border-neutral-300 py-3 text-center text-neutral-900 focus:outline-none focus:border-primary-500 transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-center gap-3">
                <input
                  {...register('needs_accommodation')}
                  type="checkbox"
                  id="needs_accommodation"
                  className="w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-2 focus:ring-primary-500"
                />
                <label
                  htmlFor="needs_accommodation"
                  className="text-sm text-neutral-600 cursor-pointer"
                >
                  I need accommodation
                </label>
              </div>
            </div>
          )}

          {/* Message */}
          <div>
            <textarea
              {...register('message')}
              rows={3}
              placeholder="Share your well wishes or a favorite memory..."
              className="w-full bg-transparent border-b border-neutral-300 py-3 text-center text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          {/* Submit Button - Minimal style */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-xs uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-900 pb-1 hover:text-primary-500 hover:border-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </span>
            ) : (
              'Send Response'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
