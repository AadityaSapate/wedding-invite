import { RSVP } from '@/lib/types';
import { Users, UserCheck, UserX, UsersRound } from 'lucide-react';

interface StatsCardsProps {
  rsvps: RSVP[];
}

export function StatsCards({ rsvps }: StatsCardsProps) {
  const totalRSVPs = rsvps.length;
  const attending = rsvps.filter((r) => r.attending).length;
  const notAttending = rsvps.filter((r) => !r.attending).length;
  const totalGuests = rsvps
    .filter((r) => r.attending)
    .reduce((sum, r) => sum + (r.guest_count || 0), 0);

  const stats = [
    {
      label: 'Total RSVPs',
      value: totalRSVPs,
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Attending',
      value: attending,
      icon: UserCheck,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Not Attending',
      value: notAttending,
      icon: UserX,
      color: 'bg-red-100 text-red-600',
    },
    {
      label: 'Total Guests',
      value: totalGuests,
      icon: UsersRound,
      color: 'bg-primary-100 text-primary-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-neutral-900 mt-2">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
