const HOTSPOT_MAP = {
  "punjab": "PUN",
  "chandigarh": "PUN",
  "telangana": "HYD",
  "karnataka": "BLR",
  "new delhi": "DEL",
  "maharashtra": "PNE",
  "andhra pradesh": "VZG",
  "madhya pradesh": "IDR"
}

const HOTSPOT_DETAILS = {
  "PUN": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "PNE": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpune2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "HYD": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "BLR": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "DEL": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "VZG": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "IDR": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  }
}

const getRegion = async () => {
  let response = await fetch("https://ip.ba3a.tech/")
  let data = await response.json();
  console.log(data);
  return HOTSPOT_MAP[data.regionName.toLowerCase()] || "PUN"
}


export async function changeDetails(selectedRegion) {
  // Make dynamic
  // 1. Headline
  // 2. Ticket link
  // 3. Timer
  // 4. Speakers
  // 5. Ticket Benefits
  // 6.  
  let region = selectedRegion || await getRegion();
  console.log(`Setting region to ${region}`);
  document.getElementById("hero_cta").href = HOTSPOT_DETAILS[region].tickeLink;
}

changeDetails(null);