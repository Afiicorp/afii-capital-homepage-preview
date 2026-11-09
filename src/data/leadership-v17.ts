// AFII v1.8 — location data reconciled to AFII's published /offices directory.
// Coordinates are approximate city/country reference points, not property geocodes.
export type MapPlace = {
  id: string;
  city: string;
  region: string;
  category: string;
  label: string;
  address: string;
  description: string;
  detail?: string;
  image?: string;
  lat: number;
  lng: number;
  kind: "office" | "network";
};

export const leadershipPeople = [
  { name:"Dr. Mahesh M. Gandhi", initials:"MG", role:"Managing Director & President", city:"Frankfurt", image:"/images/team-mahesh-gandhi.png", linkedin:"https://www.linkedin.com/in/maheshmgandhi/" },
  { name:"Kirti Gulati", initials:"KG", role:"Managing Director & Vice President", city:"Frankfurt", image:"/images/team-kirti-gulati.jpg", linkedin:"https://www.linkedin.com/in/kirtigulati/" },
  { name:"Sidhartha S. Gandhi", initials:"SG", role:"Government Advisory & Infrastructure Development", city:"India", image:"/images/team-sidhartha-gandhi.jpeg", linkedin:"https://www.linkedin.com/in/sidsgandhi/" },
  { name:"Vinit Vidyarthi", initials:"VV", role:"Senior Partner — Insurance & Investment Banking", city:"New Delhi", image:"/images/team-vinit-vidyarthi.jpeg", linkedin:null },
  { name:"Abhijit Avarsekar", initials:"AA", role:"Senior Advisor — Infrastructure Business", city:"Mumbai", image:"/images/team-abhijit-avar-sekar.png", linkedin:"https://www.linkedin.com/in/abhijit-avarrsekar/" },
  { name:"Lt. Gen. (Retd.) Rafi Peled", initials:"RP", role:"Senior Partner — Israel Business", city:"Tel Aviv", image:"/images/team-rafi-peled.jpg", linkedin:null },
  { name:"Nguyen Thi Thanh Nga", initials:"NN", role:"Head — Vietnam Business", city:"Vietnam", image:"/images/team-nguyen-thi-thanh-nga.jpg", linkedin:"https://www.linkedin.com/in/nguyen-thanh-nga-776597162/" },
  { name:"K. Aakash", initials:"KA", role:"Director — AFII Corp", city:"New Delhi", image:"/images/team-kumar-aakash.png", linkedin:"https://www.linkedin.com/in/kumar-aakash/" },
  { name:"Swapnil Gandhi", initials:"SW", role:"Government Advisory & Infrastructure Development", city:"India", image:"/images/team-swapnil-gandhi.jpg", linkedin:null },
  { name:"Michel Buffat", initials:"MB", role:"Strategic Partner — AGENOVA", city:"Switzerland · Europe", image:"/images/team-michel-buffat.JPG", linkedin:null },
  { name:"Vikram Kaushal", initials:"VK", role:"Asset Management & Investment Platforms", city:"India", image:"/images/team-vikram-kaushal.jpg", linkedin:null },
  { name:"Johann Mair", initials:"JM", role:"Senior Partner", city:"Munich · K3M", image:"/images/team-johann-mair.png", linkedin:null },
  { name:"Arun Lohiya", initials:"AL", role:"Senior Advisor — Aviation Business", city:"Ahmedabad", image:"/images/team-arun-lohiya.jpg", linkedin:"https://linkedin.com/in/14111960" },
  { name:"Punam Bhasin", initials:"PB", role:"Director — AFII Corp (India)", city:"India", image:"/images/team-punam-bhasin.jpg", linkedin:"https://www.linkedin.com/in/punam-bhasin-gandhi-3821a4109/" },
  { name:"Ralph Ketelhut", initials:"RK", role:"Senior Partner (K3M)", city:"Munich", image:"/images/team-ralph-ketelhut.jpg", linkedin:null },
  { name:"Matthias Lohmann", initials:"ML", role:"Senior Partner (K3M)", city:"Munich", image:"/images/team-matthias-lohmann.png", linkedin:null },
  { name:"Jonathan Pallares", initials:"JP", role:"Business Partner", city:"Helsinki", image:"/images/team-jonathan-pallares.jpg", linkedin:"https://www.linkedin.com/in/jonathan-pallares-78327436/" },
  { name:"R. P. Gupta", initials:"RG", role:"Senior Advisor — Railways", city:"India", image:"/images/team-rp-gupta.png", linkedin:"https://www.linkedin.com/in/rp-gupta-380a651b/" },
] as const; // AFII_TEAM_V26

const sourceImages = "https://afii-capital-website.vercel.app/images/";

export const offices: MapPlace[] = [
  {
    id:"germany",city:"Eschborn / Frankfurt",region:"Germany",category:"Group Headquarters",
    label:"AFII Structured Finance GmbH",address:"Alfred-Herrhausen-Allee 3–5, 65760 Eschborn, Germany",
    description:"Registered office of AFII Structured Finance GmbH. Amtsgericht Frankfurt am Main, HRB 140747.",
    detail:"Managing Directors: Dr. Mahesh Pal Singh Gandhi and Ms. Kirti Gulati.",
    image:sourceImages+"office-germany.jpg",lat:50.1438,lng:8.5704,kind:"office"
  },
  {
    id:"uk",city:"London",region:"United Kingdom",category:"Registered Office",
    label:"AFII Capital Partners Limited",address:"124–128 City Road, London EC1V 2NX, United Kingdom",
    description:"Published United Kingdom office for AFII Capital Partners Limited.",
    image:sourceImages+"uk-london.jpg",lat:51.5277,lng:-0.0888,kind:"office"
  },
  {
    id:"delhi",city:"New Delhi",region:"India",category:"India Office",
    label:"AFII Corporate Advisors Limited",address:"Madan Sara Mathew Lane, B1/14 Safdarjung Enclave, New Delhi 110029, India",
    description:"India office and representative contact.",
    detail:"Representative Director: Kumar Aakash. Senior Advisor: Vinit Vidyarthi.",
    image:sourceImages+"office-delhi.jpg",lat:28.5665,lng:77.1995,kind:"office"
  },
  {
    id:"mumbai",city:"Mumbai",region:"India",category:"Infrastructure Advisory",
    label:"AFII — Infrastructure Advisory",address:"The A-Club, Suite W4, One IndiaBulls, Tower 2A, 8th Floor, Lower Parel, Mumbai 400013, India",
    description:"Published infrastructure advisory presence in Mumbai.",
    detail:"Contact: Abhijit K. Avarsekar.",
    image:sourceImages+"office-mumbai.jpg",lat:18.9967,lng:72.8245,kind:"office"
  },
  {
    id:"uae",city:"Dubai",region:"United Arab Emirates",category:"Middle East Office",
    label:"AFII Middle East LLC FZ",address:"5842+944, Dubai, United Arab Emirates",
    description:"Middle East services and coordination with clients seeking capital or investment connections.",
    detail:"Published contact: Kirti Gulati; general enquiries via reachus@afii.eu.",
    image:sourceImages+"office-uae.jpg",lat:25.2048,lng:55.2708,kind:"office"
  },
  {
    id:"switzerland",city:"Zug",region:"Switzerland",category:"Engineering & EPCM",
    label:"AGENOVA | AFII Subsidiary",address:"Gotthardstrasse 14, 6300 Zug, Switzerland",
    description:"AGENOVA provides engineering and EPCM services, including design coordination, procurement and construction supervision.",
    image:sourceImages+"office-switzerland.jpg",lat:47.1662,lng:8.5155,kind:"office"
  },
];

export const networkLocations: MapPlace[] = [
  {
    id:"israel",city:"Tel Aviv",region:"Israel",category:"Partner Network",label:"Partner and mandate coverage",
    address:"Tel Aviv, Israel",description:"Local network relationships supporting suitable cross-border mandates; not listed as a registered office.",
    image:sourceImages+"office-israel.jpg",lat:32.0853,lng:34.7818,kind:"network"
  },
  {
    id:"singapore",city:"Singapore",region:"Singapore",category:"Partner Network",label:"Partner and mandate coverage",
    address:"68 Circular Rd, Singapore 049422",description:"Published partner and mandate coverage; local engagements remain subject to partner availability.",
    image:sourceImages+"office-singapore.jpg",lat:1.2868,lng:103.8490,kind:"network"
  },
  {
    id:"vietnam",city:"Ho Chi Minh City",region:"Vietnam",category:"Partner Network",label:"Partner and mandate coverage",
    address:"Vinhomes Central Park, Thanh My Tay, Ho Chi Minh City, Vietnam",description:"Published partner-network location in Vietnam.",
    image:sourceImages+"office-vietnam.jpg",lat:10.7957,lng:106.7196,kind:"network"
  },
  {
    id:"romania",city:"Romania",region:"Romania",category:"Partner Network",label:"Partner and mandate coverage",
    address:"Romania — city/address not specified in the published directory",description:"Country-level partner-network coverage. Pin indicates Romania approximately, not a street address.",
    image:sourceImages+"office-romania.jpg",lat:45.9432,lng:24.9668,kind:"network"
  },
];
