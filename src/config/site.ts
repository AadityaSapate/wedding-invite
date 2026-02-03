import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  names: {
    bride: "Jane",
    groom: "John"
  },
  date: "2026-06-15T16:00:00",
  venue: {
    name: "Elegant Gardens",
    address: "123 Wedding Lane, City, State 12345",
    mapsUrl: "https://maps.google.com/?q=Elegant+Gardens"
  },
  events: [
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "Join us as we exchange our vows"
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      description: "Enjoy drinks and appetizers"
    },
    {
      time: "6:00 PM",
      title: "Reception",
      description: "Dinner, dancing, and celebration"
    },
    {
      time: "10:00 PM",
      title: "Send Off",
      description: "A sparkler send-off to end the night"
    }
  ],
  dressCode: {
    title: "Semi-Formal Attire",
    description: "We suggest cocktail dresses and dress shirts with slacks. Please wear comfortable shoes for dancing!"
  }
};
