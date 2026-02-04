'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RSVP } from '@/lib/types';
import { logout } from '@/lib/actions/auth';
import { RSVPTable } from '@/components/admin/RSVPTable';
import { StatsCards } from '@/components/admin/StatsCards';
import { LogOut, Search } from 'lucide-react';

interface DashboardClientProps {
  rsvps: RSVP[];
  userEmail: string;
}

export function DashboardClient({ rsvps, userEmail }: DashboardClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'attending' | 'not-attending'>('all');

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
    router.refresh();
  };

  // Filter RSVPs based on search and filter
  const filteredRSVPs = rsvps.filter((rsvp) => {
    const matchesSearch = rsvp.guest_name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'attending' && rsvp.attending) ||
      (filterStatus === 'not-attending' && !rsvp.attending);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif font-bold text-neutral-900">
                RSVP Dashboard
              </h1>
              <p className="text-sm text-neutral-600 mt-1">
                Logged in as {userEmail}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Statistics */}
        <StatsCards rsvps={rsvps} />

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('attending')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === 'attending'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Attending
              </button>
              <button
                onClick={() => setFilterStatus('not-attending')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === 'not-attending'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Not Attending
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-neutral-600 mt-4">
            Showing {filteredRSVPs.length} of {rsvps.length} RSVPs
          </p>
        </div>

        {/* RSVP Table */}
        <RSVPTable rsvps={filteredRSVPs} />
      </main>
    </div>
  );
}
