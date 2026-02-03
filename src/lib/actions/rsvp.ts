'use server';

import { createClient } from '@/lib/supabase/server';
import { RSVPFormData } from '@/lib/types';

export async function submitRSVP(data: RSVPFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from('rsvps')
      .insert({
        guest_name: data.guest_name,
        email: data.email || null,
        phone: data.phone || null,
        attending: data.attending,
        guest_count: data.attending ? data.guest_count : 0,
        dietary_restrictions: data.dietary_restrictions || null,
        message: data.message || null,
      });

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: 'Failed to save RSVP. Please try again.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
}
