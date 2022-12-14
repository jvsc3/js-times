function getTime(country) {
  const timeZones = {
    "United_Kingdom": "Europe/London",
    "United_States": "America/New_York",
    "Japan": "Asia/Tokyo"
    // you can add more by following given syntax: "{value}: "{reg, country}/{city}"
  };

  if (!(country in timeZones)) {
    throw new Error(`Unknown country: ${country}`);
  }

  const timeZone = timeZones[country];

  const date = new Date();
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  date.setTime(date.getTime() + Intl.DateTimeFormat().resolvedOptions().timeZone * 60 * 60 * 1000);

  return date.toTimeString().substring(0, 8);
}
