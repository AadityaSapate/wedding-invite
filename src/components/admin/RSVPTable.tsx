'use client';

import { RSVP } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { Mail, Phone, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

interface RSVPTableProps {
  rsvps: RSVP[];
}

export function RSVPTable({ rsvps }: RSVPTableProps) {
  if (rsvps.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <p className="text-neutral-500">No RSVPs match your search criteria</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Guest
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Guests
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Submitted
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {rsvps.map((rsvp) => (
              <tr key={rsvp.id} className="hover:bg-neutral-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-neutral-900">{rsvp.guest_name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1 text-sm text-neutral-600">
                    {rsvp.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${rsvp.email}`} className="hover:text-primary-600">
                          {rsvp.email}
                        </a>
                      </div>
                    )}
                    {rsvp.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${rsvp.phone}`} className="hover:text-primary-600">
                          {rsvp.phone}
                        </a>
                      </div>
                    )}
                    {!rsvp.email && !rsvp.phone && (
                      <span className="text-neutral-400">No contact info</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {rsvp.attending ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <CheckCircle className="w-3 h-3" />
                      Attending
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                      <XCircle className="w-3 h-3" />
                      Not Attending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-neutral-900 font-medium">
                    {rsvp.attending ? rsvp.guest_count : '-'}
                  </span>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="space-y-2 text-sm">
                    {rsvp.dietary_restrictions && (
                      <div>
                        <span className="font-medium text-neutral-700">Dietary:</span>
                        <p className="text-neutral-600 line-clamp-2">{rsvp.dietary_restrictions}</p>
                      </div>
                    )}
                    {rsvp.message && (
                      <div>
                        <div className="flex items-center gap-1 text-neutral-700 mb-1">
                          <MessageSquare className="w-3 h-3" />
                          <span className="font-medium">Message:</span>
                        </div>
                        <p className="text-neutral-600 line-clamp-2">{rsvp.message}</p>
                      </div>
                    )}
                    {!rsvp.dietary_restrictions && !rsvp.message && (
                      <span className="text-neutral-400">No additional details</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  {formatDistanceToNow(new Date(rsvp.created_at), { addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
