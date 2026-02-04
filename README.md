# Wedding Invitation & RSVP Website

A modern, beautiful wedding invitation website with RSVP functionality, built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- **Beautiful Landing Page**: Hero section with countdown timer, venue information, event schedule, dress code, and photo gallery
- **RSVP Form**: Guest RSVP with validation, guest count, dietary restrictions, and personal messages
- **Admin Dashboard**: Secure admin panel to view all RSVPs, filter guests, and manage responses
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Lucide React Icons
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Netlify
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works great)
- A Netlify account (for deployment)

### 1. Clone the Repository

```bash
git clone https://github.com/AadityaSapate/wedding-invite.git
cd invitation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once your project is ready, go to **Project Settings** > **API**
3. Copy your **Project URL** and **anon public** key
4. Go to the **SQL Editor** and run the schema from `src/lib/supabase/schema.sql`

### 4. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

### 5. Customize Your Wedding Details

Edit `src/config/site.ts` with your wedding information:

```typescript
export const siteConfig = {
  names: {
    bride: "Jane",  // Your names
    groom: "John"
  },
  date: "2026-06-15T16:00:00",  // Wedding date and time
  venue: {
    name: "Elegant Gardens",  // Venue name
    address: "123 Wedding Lane, City, State 12345",  // Full address
    mapsUrl: "https://maps.google.com/..."  // Google Maps link
  },
  events: [
    // Customize your event timeline
  ],
  dressCode: {
    title: "Semi-Formal Attire",
    description: "..."
  }
};
```

### 6. Add Your Photos

Add your couple photos to `public/images/gallery/`:
- Name them: `photo1.jpg`, `photo2.jpg`, etc.
- Recommended: Optimize images to < 500KB each
- Supported formats: JPG, PNG, WEBP

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## Supabase Setup

### Create Admin User

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Users**
3. Click **Add user** > **Create new user**
4. Enter an email and password for admin access
5. Use these credentials to log in at `/admin/login`

### Test RSVP Form

1. Fill out the RSVP form on your local site
2. Check Supabase **Table Editor** > **rsvps** to see the submission
3. Log in to admin dashboard at `/admin/login` to view responses

## Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and click "Add new site"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. Deploy!

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Project Structure

```
invitation/
├── src/
│   ├── app/                    # Next.js app routes
│   │   ├── page.tsx           # Main landing page
│   │   ├── thank-you/         # Post-RSVP confirmation
│   │   └── admin/             # Admin section
│   │       ├── login/         # Admin login
│   │       └── dashboard/     # RSVP dashboard
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── VenueInfo.tsx
│   │   │   ├── EventDetails.tsx
│   │   │   ├── DressCode.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   └── RSVPForm.tsx
│   │   └── admin/             # Admin components
│   ├── lib/
│   │   ├── supabase/          # Supabase configuration
│   │   ├── actions/           # Server actions
│   │   ├── types.ts           # TypeScript types
│   │   └── utils.ts           # Utility functions
│   ├── config/
│   │   └── site.ts            # Wedding configuration
│   └── middleware.ts          # Auth middleware
├── public/
│   └── images/                # Static assets
├── .env.example               # Example environment variables
├── .env.local                 # Your environment variables (git-ignored)
├── netlify.toml               # Netlify configuration
└── package.json
```

## Key Features Explained

### Landing Page
- **Hero Section**: Names, date, countdown timer, and call-to-action
- **Venue Info**: Location details with embedded Google Maps
- **Event Schedule**: Timeline of wedding day events
- **Dress Code**: Attire guidelines for guests
- **Photo Gallery**: Display your couple photos in a masonry grid

### RSVP System
- **Form Validation**: Client-side validation with Zod
- **Guest Count**: Allow guests to specify number of attendees
- **Dietary Restrictions**: Collect food allergy information
- **Personal Messages**: Let guests share well wishes
- **Thank You Page**: Confirmation after successful submission

### Admin Dashboard
- **Authentication**: Secure login with Supabase Auth
- **Statistics Cards**: Quick overview of total RSVPs, attending, not attending, and guest count
- **Search & Filter**: Find guests by name/email and filter by attendance status
- **Detailed View**: See all guest information including dietary restrictions and messages
- **Real-time Data**: Fetches latest RSVPs from Supabase

## Customization Tips

### Change Color Scheme

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    500: '#e74c63',  // Main accent color
  },
  sage: {
    500: '#82916c',  // Secondary accent
  }
}
```

### Update Fonts

Edit `src/app/layout.tsx` to change Google Fonts:

```typescript
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
```

### Modify Form Fields

Edit `src/components/sections/RSVPForm.tsx` to add/remove fields and update validation schema.

## Troubleshooting

### Build Errors

**Error**: "Cannot find module '@supabase/ssr'"
```bash
npm install @supabase/supabase-js @supabase/ssr
```

**Error**: "Invalid environment variables"
- Check that `.env.local` exists and has correct Supabase values
- Ensure environment variables are set in Netlify dashboard for production

### RSVP Form Not Working

1. Check Supabase connection in browser console
2. Verify RLS policies are enabled in Supabase
3. Confirm the `rsvps` table exists with correct schema
4. Check that anonymous inserts are allowed in RLS policies

### Admin Dashboard Not Loading

1. Verify you created an admin user in Supabase Auth
2. Check that middleware is protecting `/admin/dashboard`
3. Ensure auth cookies are being set correctly
4. Try logging out and back in

## Contributing

Feel free to fork this project and customize it for your wedding! If you make improvements, consider submitting a pull request.

## License

MIT License - feel free to use this for your wedding!

## Credits

Built with ❤️ using:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Lucide Icons](https://lucide.dev/)

## Support

For issues or questions:
- Check the [Issues](https://github.com/AadityaSapate/wedding-invite/issues) page
- Review Supabase documentation
- Check Next.js documentation

---

**Congratulations on your wedding! 🎉💍**
