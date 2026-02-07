'use client';

import { RSVP } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { CheckCircle, XCircle, Home, Trash2 } from 'lucide-react';
import { deleteRSVP } from '@/lib/actions/rsvp';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RSVPTableProps {
  rsvps: RSVP[];
}

export function RSVPTable({ rsvps }: RSVPTableProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, guestName: string) => {
    if (!confirm(`Are you sure you want to delete the RSVP from ${guestName}?`)) {
      return;
    }

    setDeletingId(id);
    const result = await deleteRSVP(id);

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error || 'Failed to delete RSVP');
      setDeletingId(null);
    }
  };

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
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Guests
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Accommodation
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Submitted
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {rsvps.map((rsvp) => (
              <tr key={rsvp.id} className="hover:bg-neutral-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-neutral-900">{rsvp.guest_name}</div>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  {rsvp.attending && rsvp.needs_accommodation ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      <Home className="w-3 h-3" />
                      Needed
                    </span>
                  ) : rsvp.attending ? (
                    <span className="text-neutral-400 text-xs">Not needed</span>
                  ) : (
                    <span className="text-neutral-400 text-xs">-</span>
                  )}
                </td>
                <td className="px-6 py-4 max-w-xs">
                  {rsvp.message ? (
                    <div className="group relative">
                      <p className="text-neutral-700 text-sm line-clamp-2 cursor-help">
                        {rsvp.message}
                      </p>
                      <div className="invisible group-hover:visible absolute z-10 bottom-full left-0 mb-2 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg shadow-lg max-w-md whitespace-normal">
                        {rsvp.message}
                        <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-neutral-900"></div>
                      </div>
                    </div>
                  ) : (
                    <span className="text-neutral-400 text-sm">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  {formatDistanceToNow(new Date(rsvp.created_at), { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(rsvp.id, rsvp.guest_name)}
                    disabled={deletingId === rsvp.id}
                    className="text-red-600 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    title="Delete RSVP"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
