export interface RSVP {
  id: string;
  created_at: string;
  guest_name: string;
  attending: boolean;
  guest_count: number;
  message?: string;
  updated_at?: string;
}

export interface RSVPFormData {
  guest_name: string;
  attending: boolean;
  guest_count: number;
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
    dressCode?: string;
  }>;
  dressCode: {
    title: string;
    description: string;
  };
}
