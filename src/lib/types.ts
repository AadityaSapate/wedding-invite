export interface RSVP {
  id: string;
  created_at: string;
  guest_name: string;
  email?: string;
  phone?: string;
  attending: boolean;
  guest_count: number;
  dietary_restrictions?: string;
  message?: string;
  updated_at?: string;
}

export interface RSVPFormData {
  guest_name: string;
  email?: string;
  phone?: string;
  attending: boolean;
  guest_count: number;
  dietary_restrictions?: string;
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
  events: Array<{
    time: string;
    title: string;
    description?: string;
  }>;
  dressCode: {
    title: string;
    description: string;
  };
}
