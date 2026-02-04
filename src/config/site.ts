import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  names: {
    bride: "Prajakta",
    groom: "Aditya"
  },
  date: "2026-02-24T11:00:00", // First day - Haldi
  venue: {
    name: "The Grand Jashan",
    address: "12/1, Kamptee Rd, Khairy, Nagpur, Maharashtra 440029",
    mapsUrl: "https://www.google.com/maps/place/The+Grand+Jashan/@21.2124885,79.1520866,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c7900fe98efd:0xc78d2795e7581f66!8m2!3d21.2124885!4d79.1546615!16s%2Fg%2F11vsphc8_x?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
  },
  days: [
    {
      day: "Day 1",
      date: "February 24, 2026",
      events: [
        {
          time: "11:00 AM",
          title: "Haldi",
          description: "A traditional ceremony where turmeric paste is applied for blessings",
          dressCode: "Yellow or Light Colored Traditional Attire"
        },
        {
          time: "7:00 PM",
          title: "Sangeet",
          description: "An evening of music, dance, and celebration with family and friends",
          dressCode: "Indian Ethnic Wear - Festive Colors"
        }
      ]
    },
    {
      day: "Day 2",
      date: "February 25, 2026",
      events: [
        {
          time: "5:00 PM",
          title: "Shaadi",
          description: "Join us as we exchange our vows in a traditional wedding ceremony",
          dressCode: "Traditional Indian Formal Wear"
        },
        {
          time: "7:00 PM",
          title: "Reception",
          description: "Dinner, dancing, and celebration to mark the beginning of our journey together",
          dressCode: "Indian Ethnic Wear / Indo-Western"
        }
      ]
    }
  ]
};
