export interface RSVP {
  id: string;
  created_at: string;
  guest_name: string;
  attending: boolean;
  guest_count: number;
  needs_accommodation: boolean;
  message?: string;
  updated_at?: string;
}

export interface RSVPFormData {
  guest_name: string;
  attending: boolean;
  guest_count: number;
  needs_accommodation: boolean;
  message?: string;
}

export interface SiteConfig {
  names: {
    bride: string;
    groom: string;
  };
  date: string;
  venue: {
    name: string;
    address: string;
    mapsUrl: string;
  };
  days: Array<{
    day: string;
    date: string;
    events: Array<{
      time: string;
      title: string;
      description?: string;
      dressCode?: string;
    }>;
  }>;
}
