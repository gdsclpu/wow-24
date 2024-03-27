import { setSpeakers } from "./components/speakers"
import { setTimer } from "./components/timer"

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
    speakers: [{
      name: "Tanmay Kumar", role: "Technical Product Engineer", org: "Boeing, India", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        Website: "https://www.linkedin.com/in/tanmaykumar-nie/"
      }
    },
    {
      name: "Megha Arora", role: "Staff Developer Advocate", org: "MongoDB, India", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        github: "#",
        website: "https://www.linkedin.com/in/arora-megha/"
      }
    },
    {
      name: "Palak Awasthi", role: "Software Engineer II", org: "PayPal, India", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        github: "#",
        website: "https://www.linkedin.com/in/palakawasthi/"
      }
    },
    {
      name: "Mahima Hans", role: "Member of Technical Staff II", org: "Adobe, India", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Eric Bishard", role: "Developer Ecosystem Manager", org: "Metamask, United States", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        twitter: "https://x.com/httpjunkie?s=21",
        github: "#",

      }
    },
    {
      name: "Supriya Purohit", role: "Head of Product and Growth", org: "Cosmocloud, India", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        github: "#",
        website: "https://www.linkedin.com/in/supriyapurohit27"
      }
    },
    {
      name: "Dhruv Patel", role: "Developer Relations Manager", org: "Aspecta.id, United States", image: "/images/speaker.png", socials: {
        instagram: "#",
        facebook: "#",
        twitter: "https://x.com/httpjunkie?s=21",
        github: "#"
        
      }
    },

    ],
    ticketBenefits: []
  },
  "PNE": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpune2024",
    eventDate: "April 7, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "HYD": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 8, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "BLR": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 9, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "DEL": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 10, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "VZG": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 11, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "IDR": {
    headline: "Dil Kehnda Test",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 13, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  }
}


const DEFAULT_SPEAKERS = [
  {
    name: "TBA", role: "Engineer", org: "Google, India", image: "/images/speaker.png", socials: {
      instagram: "#",
      facebook: "#",
      Website: "#"
    }
  },
  {
    name: "TBA", role: "Engineer", org: "Adobe, India", image: "/images/speaker.png", socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "TBA", role: "Engineer", org: "Google, India", image: "/images/speaker.png", socials: {
      instagram: "#",
      facebook: "#",
      // twitter:"#"
    }
  },
  {
    name: "TBA", role: "Engineer", org: "Google, India", image: "/images/speaker.png", socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  // {name:"John Doe",role:"Engineer",org:"Google, India",image:"/images/speaker.png",socials:{
  //     instagram:"#",
  //     facebook:"#",
  //     twitter:"#"
  // }},
  // {name:"John Doe",role:"Engineer",org:"Google, India",image:"/images/speaker.png",socials:{
  //     instagram:"#",
  //     facebook:"#",
  //     twitter:"#"
  // }},
  // {name:"John Doe",role:"Engineer",org:"Google, India",image:"/images/speaker.png",socials:{
  //     instagram:"#",
  //     facebook:"#",
  //     twitter:"#"
  // }},
  // {name:"John Doe",role:"Engineer",org:"Google, India",image:"/images/speaker.png",socials:{
  //     instagram:"#",
  //     facebook:"#",
  //     twitter:"#"
  // }},

]

const getRegion = async () => {
  let response = await fetch("https://ip.ba3a.tech/")
  let data = await response.json();
  // console.log(data);
  return data.regionName.toLowerCase()
}


export async function changeDetails(selectedRegion) {

  if (!selectedRegion) {
    selectedRegion = await getRegion()
  }

  //  console.log({ts:selectedRegion})

  const MY_REGION = HOTSPOT_DETAILS[HOTSPOT_MAP[selectedRegion]];

  console.log({ MY_REGION });


  document.getElementById("hero_head").innerText = MY_REGION.headline;
  document.getElementById("hero_cta").href = MY_REGION.tickeLink;
  setSpeakers(MY_REGION.speakers)
  setTimer(MY_REGION.eventDate || new Date())


  console.log(`Setting region to ${selectedRegion}`);










  // Make dynamic
  // 1. Headline
  // 2. Ticket link
  // 3. Timer
  // 4. Speakers
  // 5. Ticket Benefits
  // 6.  
}




changeDetails(null);