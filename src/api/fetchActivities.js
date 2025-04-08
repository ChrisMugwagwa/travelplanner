export async function fetchActivities(lat, lng, category = 'attractions', radius= 10) {
  try {
    const res = await fetch(`13.41.223.126/api/tripadvisor?lat=${lat}&lng=${lng}&category=${category}&radius=${radius}`);
    if (!res.ok) throw new Error('Failed to fetch activities');
    const data = await res.json();

    // Fetch details for each location using location_id
    const detailedData = await Promise.all(
      data.map(async (location) => {
        try {
          const detailRes = await fetch(`13.41.223.126/api/tripadvisor/details?id=${location.location_id}`);
          const details = await detailRes.json();
          return { ...location, details };
        } catch (detailErr) {
          console.error('Error fetching location details:', detailErr);
          return location; // fallback to basic info
        }
      })
    );

    return Array.isArray(detailedData) ? detailedData : [];
  } catch (err) {
    console.error('Error fetching activities:', err);
    return [];
  }
}