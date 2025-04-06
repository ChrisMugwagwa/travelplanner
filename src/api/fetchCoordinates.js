export async function fetchCoordinates(location) {
    const res = await fetch(`/api/geocode?location=${encodeURIComponent(location)}`);
    const data = await res.json();
    return { lat: data.lat, lng: data.lng };
  }