-- Wedding RSVP Database Schema
-- Run this in your Supabase SQL Editor

-- Create RSVPs table
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  guest_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  attending BOOLEAN NOT NULL,
  guest_count INTEGER DEFAULT 1 CHECK (guest_count >= 1 AND guest_count <= 10),
  dietary_restrictions TEXT,
  message TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rsvps_attending ON rsvps(attending);
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rsvps_guest_name ON rsvps(guest_name);

-- Enable Row Level Security
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert RSVPs (for public RSVP form)
CREATE POLICY "Allow public RSVP submissions"
  ON rsvps
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all RSVPs (for admin dashboard)
CREATE POLICY "Allow authenticated users to read RSVPs"
  ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update RSVPs (for admin edits)
CREATE POLICY "Allow authenticated users to update RSVPs"
  ON rsvps
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow authenticated users to delete RSVPs (for admin management)
CREATE POLICY "Allow authenticated users to delete RSVPs"
  ON rsvps
  FOR DELETE
  TO authenticated
  USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_rsvps_updated_at
  BEFORE UPDATE ON rsvps
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for RSVP statistics
CREATE OR REPLACE VIEW rsvp_stats AS
SELECT
  COUNT(*) as total_rsvps,
  COUNT(*) FILTER (WHERE attending = true) as attending_count,
  COUNT(*) FILTER (WHERE attending = false) as not_attending_count,
  COALESCE(SUM(guest_count) FILTER (WHERE attending = true), 0) as total_guests_attending
FROM rsvps;

-- Grant access to the view for authenticated users
GRANT SELECT ON rsvp_stats TO authenticated;
