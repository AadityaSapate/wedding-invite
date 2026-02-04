-- Migration: Add accommodation field and remove unused fields
-- Date: 2026-02-04
-- Description: Adds needs_accommodation field to support accommodation requests
--              Removes email, phone, and dietary_restrictions fields that are no longer used

-- Step 1: Remove unused columns
ALTER TABLE rsvps
  DROP COLUMN IF EXISTS email,
  DROP COLUMN IF EXISTS phone,
  DROP COLUMN IF EXISTS dietary_restrictions;

-- Step 2: Add needs_accommodation column
ALTER TABLE rsvps
  ADD COLUMN IF NOT EXISTS needs_accommodation BOOLEAN DEFAULT false;

-- Step 3: Set needs_accommodation to false for existing records where attending = false
UPDATE rsvps
SET needs_accommodation = false
WHERE attending = false;

-- Step 4: Update the rsvp_stats view to include accommodation statistics
CREATE OR REPLACE VIEW rsvp_stats AS
SELECT
  COUNT(*) as total_rsvps,
  COUNT(*) FILTER (WHERE attending = true) as attending_count,
  COUNT(*) FILTER (WHERE attending = false) as not_attending_count,
  COALESCE(SUM(guest_count) FILTER (WHERE attending = true), 0) as total_guests_attending,
  COUNT(*) FILTER (WHERE attending = true AND needs_accommodation = true) as accommodation_needed_count
FROM rsvps;

-- Grant access to the updated view for authenticated users
GRANT SELECT ON rsvp_stats TO authenticated;