import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.jpg";
import doc4 from "./doc4.jpg";
import doc5 from "./doc5.png";
import doc6 from "./doc6.jpg";
import doc7 from "./doc7.jpg";
import logo from "./logo.jpg";
import groupImage from "./groups.png"
import gs from "./doctorg.png"

import grouppictures from "./group.png"

export const images = { doc1, doc2, doc3, doc4, doc5, doc6, doc7,logo,groupImage,grouppictures,gs };

export const vetSpecialities = [
  { id: 1, name: "Small Animal Care", image: doc1 },
  { id: 2, name: "Large Animal Care", image: doc2 },
  { id: 3, name: "Exotic Pet Care", image: doc3 },
  { id: 4, name: "Surgery", image: doc4 },
  { id: 5, name: "Dermatology", image: doc5 },
  { id: 6, name: "Dentistry", image: doc6 },
  { id: 7, name: "Emergency & Critical Care", image: doc7 },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    image: doc1,
    speciality: "Small Animal Care",
    degree: "DVM, MS (Veterinary Medicine)",
    experience: "8 years",
    about: "Specialist in small animal care, particularly dogs and cats. Expert in preventive medicine and internal medicine.",
    fees: 800,
    address: "House 12, Road 5, Dhanmondi, Dhaka"
  },
  {
    id: 2,
    name: "Dr. Mahmud Hossain",
    image: doc2,
    speciality: "Large Animal Care",
    degree: "DVM, PhD (Animal Science)",
    experience: "12 years",
    about: "Experienced in large animal treatment, especially cattle and horses. Provides advanced livestock health and nutrition consultancy.",
    fees: 1000,
    address: "Agriculture University Campus, Mymensingh"
  },
  {
    id: 3,
    name: "Dr. Nusrat Jahan",
    image: doc3,
    speciality: "Exotic Pet Care",
    degree: "DVM, Diploma in Exotic Animal Medicine",
    experience: "6 years",
    about: "Passionate about birds, rabbits, and reptiles. Provides specialized care for exotic pets.",
    fees: 700,
    address: "Sector 10, Uttara, Dhaka"
  },
  {
    id: 4,
    name: "Dr. Farhan Kabir",
    image: doc4,
    speciality: "Veterinary Surgery",
    degree: "DVM, MS (Surgery & Radiology)",
    experience: "10 years",
    about: "Specialist surgeon for pets and farm animals. Skilled in orthopedic and soft tissue surgeries.",
    fees: 1200,
    address: "Chattogram Veterinary Hospital, Agrabad, Chattogram"
  },
  {
    id: 5,
    name: "Dr. Shaila Akter",
    image: doc5,
    speciality: "Dermatology",
    degree: "DVM, MS (Veterinary Dermatology)",
    experience: "7 years",
    about: "Expert in skin diseases, allergies, and hair-related problems in pets.",
    fees: 900,
    address: "Banani, Block C, Dhaka"
  },
  {
    id: 6,
    name: "Dr. Tanvir Alam",
    image: doc6,
    speciality: "Veterinary Dentistry",
    degree: "DVM, PG Diploma (Dentistry)",
    experience: "9 years",
    about: "Specialist in pet dental care, including oral surgeries and gum disease treatment.",
    fees: 950,
    address: "Khilgaon, Dhaka"
  },
  {
    id: 7,
    name: "Dr. Sumaiya Karim",
    image: doc7,
    speciality: "Emergency & Critical Care",
    degree: "DVM, MS (Critical Care)",
    experience: "11 years",
    about: "Handles emergency cases and critical care for small and large animals.",
    fees: 1500,
    address: "24/7 Pet Hospital, Gulshan, Dhaka"
  },
  {
    "id": 8,
    "name": "Dr. Kamal Uddin",
    "image": doc1,
    "speciality": "Animal Nutrition",
    "degree": "DVM, PhD (Animal Nutrition)",
    "experience": "14 years",
    "about": "Provides scientific diet planning and nutritional support for farm and pet animals.",
    "fees": 1100,
    "address": "Jessore Veterinary Center, Jessore"
  },
  {
    "id": 9,
    "name": "Dr. Faria Nizam",
    "image": doc2,
    "speciality": "Ophthalmology",
    "degree": "DVM, MS (Eye Care)",
    "experience": "6 years",
    "about": "Expert in treating eye infections, cataracts, and vision-related issues in animals.",
    "fees": 1000,
    "address": "Rajshahi City Veterinary Hospital, Rajshahi"
  },
  {
    "id": 10,
    "name": "Dr. Hasan Chowdhury",
    "image": doc3,
    "speciality": "Oncology",
    "degree": "DVM, PhD (Veterinary Oncology)",
    "experience": "13 years",
    "about": "Specialist in cancer diagnosis and treatment for pets and livestock.",
    "fees": 1600,
    "address": "Apollo Pet Care, Baridhara, Dhaka"
  },
  {
    "id": 11,
    "name": "Dr. Laila Sultana",
    "image": doc4,
    "speciality": "Reproduction & Fertility",
    "degree": "DVM, MS (Theriogenology)",
    "experience": "9 years",
    "about": "Expert in animal breeding, fertility, and reproductive health management.",
    "fees": 950,
    "address": "Bogura Veterinary Clinic, Bogura"
  },
  {
    "id": 12,
    "name": "Dr. Arif Mahmud",
    "image": doc5,
    "speciality": "Pathology",
    "degree": "DVM, PhD (Veterinary Pathology)",
    "experience": "15 years",
    "about": "Provides diagnostic support and treatment planning based on pathology tests.",
    "fees": 1200,
    "address": "Sylhet Veterinary Lab, Sylhet"
  },
  {
    "id": 13,
    "name": "Dr. Nazia Hossain",
    "image": doc6,
    "speciality": "Behavior Therapy",
    "degree": "DVM, Diploma (Animal Behavior)",
    "experience": "5 years",
    "about": "Helps pets overcome anxiety, aggression, and behavioral issues.",
    "fees": 800,
    "address": "Gulshan Pet Training Center, Dhaka"
  },
  {
    "id": 14,
    "name": "Dr. Rakibul Islam",
    "image": doc7,
    "speciality": "Radiology & Imaging",
    "degree": "DVM, MS (Radiology)",
    "experience": "10 years",
    "about": "Expert in diagnostic imaging including X-ray, ultrasound, and MRI for animals.",
    "fees": 1300,
    "address": "Barisal Veterinary Imaging Center, Barisal"
  },
  {
    "id": 15,
    "name": "Dr. Sharmeen Akhter",
    "image": doc5,
    "speciality": "Internal Medicine",
    "degree": "DVM, MS (Medicine)",
    "experience": "8 years",
    "about": "Provides advanced internal medicine for chronic and infectious diseases in animals.",
    "fees": 1000,
    "address": "Mymensingh Veterinary Hospital, Mymensingh"
  },
  {
    "id": 16,
    "name": "Dr. Rafiq Anwar",
    "image": doc6,
    "speciality": "Aquatic Animal Medicine",
    "degree": "DVM, MS (Aquaculture)",
    "experience": "12 years",
    "about": "Specialist in fish and aquatic animal health management.",
    "fees": 900,
    "address": "Khulna Aquatic Health Center, Khulna"
  },
  {
    "id": 17,
    "name": "Dr. Sabrina Yasmin",
    "image": doc3,
    "speciality": "Zoonotic Diseases",
    "degree": "DVM, PhD (Public Health)",
    "experience": "11 years",
    "about": "Works on preventing and treating zoonotic diseases affecting both animals and humans.",
    "fees": 1400,
    "address": "ICDDR,B, Mohakhali, Dhaka"
  },
  {
    "id": 18,
    "name": "Dr. Imran Hossain",
    "image": doc3,
    "speciality": "Wildlife Medicine",
    "degree": "DVM, Diploma (Wildlife Medicine)",
    "experience": "7 years",
    "about": "Provides medical care for wild animals and conservation projects.",
    "fees": 1100,
    "address": "Sundarbans Wildlife Project, Khulna"
  },
  {
    "id": 19,
    "name": "Dr. Tasnim Ahmed",
    "image": doc1,
    "speciality": "Avian Medicine",
    "degree": "DVM, MS (Poultry Science)",
    "experience": "9 years",
    "about": "Expert in poultry and bird medicine, vaccination, and production management.",
    "fees": 1000,
    "address": "Gazipur Poultry Research Center, Gazipur"
  },
  {
    "id": 20,
    "name": "Dr. Omar Faruq",
    "image": doc7,
    "speciality": "Parasitology",
    "degree": "DVM, PhD (Parasitology)",
    "experience": "16 years",
    "about": "Specialist in controlling internal and external parasites in pets and livestock.",
    "fees": 1200,
    "address": "Rangpur Veterinary Clinic, Rangpur"
  }
];
