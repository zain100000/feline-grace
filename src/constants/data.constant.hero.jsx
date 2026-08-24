/**
 * @file data.constant.hero.util.jsx
 * @module Components/dataConstant
 * @description Curated feline and canine breed data and hero slide content for the data experience.
 */

import hero1 from "../assets/images/9.jpeg";
import hero2 from "../assets/images/2.jpeg";
import hero3 from "../assets/images/3.jpeg";

// Matched according to the sequence of images provided
import dachshundImg from "../assets/images/1.jpeg";
import huskyImg from "../assets/images/2.jpeg";
import goldenImg from "../assets/images/3.jpeg";
import savannahImg from "../assets/images/4.jpeg";
import malamuteImg from "../assets/images/5.jpeg";
import britishBlueImg from "../assets/images/6.jpeg";
import britishGoldenImg from "../assets/images/7.jpeg";
import ragdollBlueImg from "../assets/images/8.jpeg";
import persianWhiteImg from "../assets/images/9.jpeg";
import ragdollSealImg from "../assets/images/10.jpeg";
import ragdollBlueKittenImg from "../assets/images/11.jpeg";
import poodleImg from "../assets/images/12.jpeg";
import orangeTabbyImg from "../assets/images/13.jpeg";
import ragdollBicolorImg from "../assets/images/14.jpeg";

export const heroSlides = [
  {
    id: 1,
    title: "Pure Elegance in Every Whisker",
    subtitle:
      "Discover the timeless grace of the world's most aristocratic feline companions.",
    image:
      "https://images.pexels.com/photos/10518574/pexels-photo-10518574.jpeg?auto=compress&cs=tinysrgb&h=1024&w=1024",
    cta: "Meet the Persian",
  },
  {
    id: 2,
    title: "Discover World's Royal Breeds",
    subtitle:
      "From the leopard-like Bengal to the noble Maine Coon — explore a curated gallery.",
    image:
      "https://images.pexels.com/photos/16761428/pexels-photo-16761428.jpeg?auto=compress&cs=tinysrgb&h=1024&w=1024",
    cta: "Explore the Gallery",
  },
  {
    id: 3,
    title: "Luxury Living & Care",
    subtitle:
      "A lifestyle devoted to the well-being, heritage, and refined care of every breed.",
    image:
      "https://images.pexels.com/photos/19840574/pexels-photo-19840574.jpeg?auto=compress&cs=tinysrgb&h=1024&w=1024",
    cta: "Our Philosophy",
  },
];

// ------------------- CATS DATA ------------------- //
export const cats = [
  {
    id: 1,
    name: "Savannah",
    breed: "Savannah Cat",
    origin: "United States",
    price: "AED 8,500",
    image: savannahImg,
    description:
      "An exotic mosaic of wild beauty and domestic grace, this Savannah cat features a stunning gold coat marked with bold black spots. By its regal posture and tall, alert ears, it brings an untamed, aristocratic presence right into the home.",
    stats: {
      lifespan: "12–20 years",
      weight: "5–11 kg",
      temperament: "Active & Confident",
      grooming: "Weekly",
    },
    tags: ["Active", "Confident", "Highly Curious"],
  },
  {
    id: 2,
    name: "Blue",
    breed: "British Shorthair",
    origin: "United Kingdom",
    price: "AED 3,600",
    image: britishBlueImg,
    description:
      "The classic 'teddy bear' of the feline world, this Blue British Shorthair is celebrated for its plush, dense coat and large, round, copper-blue eyes. Its calm, dignified demeanor makes it the ultimate low-maintenance, high-affection lap companion.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–8 kg",
      temperament: "Calm & Undemanding",
      grooming: "Weekly",
    },
    tags: ["Calm", "Undemanding", "Easygoing"],
  },
  {
    id: 3,
    name: "Goldie",
    breed: "British Shorthair (Golden)",
    origin: "United Kingdom",
    price: "AED 4,200",
    image: britishGoldenImg,
    description:
      "Bathed in warm golden hues, this British Shorthair features a dense, plush coat that perfectly frames its iconic round face and mesmerizing aqua-blue eyes. It is a gentle, independent soul that enjoys quiet observation and cozy cuddles.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–8 kg",
      temperament: "Affectionate & Reserved",
      grooming: "Weekly",
    },
    tags: ["Affectionate", "Reserved", "Placid"],
  },
  {
    id: 4,
    name: "Ragdoll Blue Point",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,500",
    image: ragdollBlueImg,
    description:
      "A testament to softness, this blue-point Ragdoll is famous for its fluffy, non-matting semi-longhair coat and striking blue eyes. Known for their docile nature and tendency to go limp when picked up, they are the ultimate 'puppy cat' companions.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Docile & Gentle",
      grooming: "2–3x weekly",
    },
    tags: ["Docile", "Gentle", "Friendly"],
  },
  {
    id: 5,
    name: "Persian White",
    breed: "Persian",
    origin: "Iran (Persia)",
    price: "AED 2,800",
    image: persianWhiteImg,
    description:
      "A vision of pristine, fluffy luxury, this white Persian cat embodies centuries of aristocratic breeding. With its flowing silken coat and serene, doll-like expression, it is the quintessential companion of connoisseurs who value tranquility and grace.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Gentle & Affectionate",
      grooming: "Daily",
    },
    tags: ["Gentle", "Affectionate", "Calm"],
  },
  {
    id: 6,
    name: "Ragdoll Seal Point Kitten",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,000",
    image: ragdollSealImg,
    description:
      "Fragile and utterly adorable, this sleeping seal-point Ragdoll kitten is a tiny cloud of cream fur with dark-pointed ears. Its deeply relaxed and trusting nature is a hallmark of the breed, promising a lifetime of gentle companionship.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Relaxed & Sweet",
      grooming: "2–3x weekly",
    },
    tags: ["Relaxed", "Sweet", "People-oriented"],
  },
  {
    id: 7,
    name: "Ragdoll Blue Point Kitten",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,200",
    image: ragdollBlueKittenImg,
    description:
      "With oversized, expressive sapphire eyes, this Ragdoll kitten exudes innocent charm. Its distinctive white 'mask' and soft grey points blend beautifully with its fluffy coat, making it a stunning and cuddly companion for any home.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Playful & Affectionate",
      grooming: "2–3x weekly",
    },
    tags: ["Playful", "Affectionate", "Sociable"],
  },
  {
    id: 8,
    name: "Orange Tabby",
    breed: "Domestic Shorthair",
    origin: "Worldwide",
    price: "AED 1,500",
    image: orangeTabbyImg,
    description:
      "A portrait of absolute comfort, this ginger and white tabby cat shows off delightful, pink toe beans while sleeping soundly. They are playful, spirited companions with a famous sunny disposition that brings warmth and joy to any household.",
    stats: {
      lifespan: "12–18 years",
      weight: "4–6 kg",
      temperament: "Playful & Outgoing",
      grooming: "Weekly",
    },
    tags: ["Playful", "Outgoing", "Affectionate"],
  },
  {
    id: 9,
    name: "Ragdoll Blue Bicolor",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,800",
    image: ragdollBicolorImg,
    description:
      "An outdoor vision of sheer elegance, this blue bicolor Ragdoll is a masterpiece of symmetry and fluff. With its stunning, vivid blue eyes and picture-perfect white markings, it combines gentle, laid-back affection with show-stopping beauty.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Quiet & Tolerant",
      grooming: "2–3x weekly",
    },
    tags: ["Quiet", "Tolerant", "Companionable"],
  },
];

// ------------------- DOGS DATA ------------------- //
export const dogs = [
  {
    id: 101,
    name: "Merle",
    breed: "Dachshund (Longhaired Dapple)",
    origin: "Germany",
    price: "AED 5,500",
    image: dachshundImg,
    description:
      "An enchanting blend of playful charm and regal elegance, this miniature longhaired Dachshund captivates with its striking silver-dapple coat and soulful, expressive eyes. With its signature stubby legs and silky, feathered ears, it is a spirited and affectionate companion wrapped in a tiny, luxurious package.",
    stats: {
      lifespan: "12–16 years",
      weight: "4.5–8.5 kg",
      temperament: "Lively & Curious",
      grooming: "2–3x weekly",
    },
    tags: ["Lively", "Curious", "Devoted"],
  },
  {
    id: 102,
    name: "Husky",
    breed: "Siberian Husky (Red & White)",
    origin: "Siberia, Russia",
    price: "AED 6,000",
    image: huskyImg,
    description:
      "A striking vision of Arctic vitality, this red and white Husky radiates an infectious, joyous energy. With its wolf-like features, distinct russet coat, and gleeful smile, it is a highly spirited and sociable breed bred for endurance and pack life.",
    stats: {
      lifespan: "12–14 years",
      weight: "16–27 kg",
      temperament: "Energetic & Outgoing",
      grooming: "Weekly (seasonal shedding)",
    },
    tags: ["Energetic", "Outgoing", "Mischievous"],
  },
  {
    id: 103,
    name: "Goldens",
    breed: "Golden Retriever Puppies",
    origin: "Scotland",
    price: "AED 6,500",
    image: goldenImg,
    description:
      "Bundles of sunshine and boundless affection, these Golden Retriever puppies are the epitome of canine warmth. With their wavy, pale-gold fur and floppy ears, they are famously eager to please, possessing a gentle temperament that makes them ideal family companions.",
    stats: {
      lifespan: "10–12 years",
      weight: "25–34 kg",
      temperament: "Friendly & Intelligent",
      grooming: "Weekly",
    },
    tags: ["Friendly", "Intelligent", "Devoted"],
  },
  {
    id: 104,
    name: "Malamute Puppy",
    breed: "Alaskan Malamute Puppy",
    origin: "Alaska, USA",
    price: "AED 7,200",
    image: malamuteImg,
    description:
      "A formidable bundle of fluff with a heart of gold, this Alaskan Malamute puppy exudes future strength wrapped in puppy innocence. With its thick, wooly cream and sable coat and striking masked face, it is a deeply loyal and powerful working breed.",
    stats: {
      lifespan: "10–14 years",
      weight: "32–43 kg",
      temperament: "Loyal & Affectionate",
      grooming: "Weekly (heavy shedding)",
    },
    tags: ["Loyal", "Affectionate", "Independent"],
  },
  {
    id: 105,
    name: "Poodle",
    breed: "Poodle (Toy / Miniature)",
    origin: "Germany / France",
    price: "AED 5,000",
    image: poodleImg,
    description:
      "An intelligent aristocrat in a curly, hypoallergenic coat, this red/apricot Poodle puppy is both dazzling and highly trainable. Its bright, dark eyes and dense, crimped fur speak to a breed known for high intellect and a distinctively loyal personality.",
    stats: {
      lifespan: "12–15 years",
      weight: "2–4 kg (Toy), 4–7 kg (Miniature)",
      temperament: "Smart & Active",
      grooming: "Daily (requires clipping)",
    },
    tags: ["Smart", "Active", "Trainable"],
  },
];
