import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  names: {
    bride: "Prajakta",
    groom: "Aditya"
  },
  date: "2026-02-25T17:00:00",
  venue: {
    name: "The Grand Jashan",
    address: "12/1, Kamptee Rd, Khairy, Nagpur, Maharashtra 440029",
    mapsUrl: "https://www.google.com/maps/place/The+Grand+Jashan/@21.2124885,79.1520866,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c7900fe98efd:0xc78d2795e7581f66!8m2!3d21.2124885!4d79.1546615!16s%2Fg%2F11vsphc8_x?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
  },
  events: [
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "Join us as we exchange our vows",
      dressCode: "Traditional Indian Formal"
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      description: "Enjoy drinks and appetizers",
      dressCode: "Smart Casual"
    },
    {
      time: "6:00 PM",
      title: "Reception",
      description: "Dinner, dancing, and celebration",
      dressCode: "Indian Ethnic Wear"
    },
    {
      time: "10:00 PM",
      title: "Send Off",
      description: "A sparkler send-off to end the night",
      dressCode: "As per Reception"
    }
  ],
  dressCode: {
    title: "Semi-Formal Attire",
    description: "We suggest cocktail dresses and dress shirts with slacks. Please wear comfortable shoes for dancing!"
  }
};
