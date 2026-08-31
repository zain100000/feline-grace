/**
 * @file data.constant.hero.util.jsx
 * @module Components/dataConstant
 * @description Curated feline breed data and hero slide content for the luxury pet experience.
 */

// ------------------- CAT IMAGES IMPORTS ------------------- //
// Bengal
import bengal1 from "../assets/cats/bengal/bengal-1.jpeg";
import bengal2 from "../assets/cats/bengal/bengal-2.jpeg";
import bengal3 from "../assets/cats/bengal/bengal-3.jpeg";

// British Shorthair
import british1 from "../assets/cats/british/british-short-hair-1.jpeg";
import british2 from "../assets/cats/british/british-short-hair-2.jpeg";
import british3 from "../assets/cats/british/british-short-hair-3.jpeg";

// Golden
import goldenCat1 from "../assets/cats/golden/golden-1.jpeg";
import goldenCat2 from "../assets/cats/golden/golden-2.jpeg";
import goldenCat3 from "../assets/cats/golden/golden-3.jpeg";

// Maine Coon
import maineCoon1 from "../assets/cats/maine-coon/maine-coon-1.jpeg";
import maineCoon2 from "../assets/cats/maine-coon/maine-coon-2.jpeg";
import maineCoon3 from "../assets/cats/maine-coon/maine-coon-3.jpeg";

// Persian - Cream
import persianCream1 from "../assets/cats/persian/persian-cream-1.jpeg";
import persianCream2 from "../assets/cats/persian/persian-cream-2.jpeg";
import persianCream3 from "../assets/cats/persian/persian-cream-3.jpeg";

// Persian - Golden
import persianGolden1 from "../assets/cats/persian/persian-golden-1.jpeg";
import persianGolden2 from "../assets/cats/persian/persian-golden-2.jpeg";
import persianGolden3 from "../assets/cats/persian/persian-golden-3.jpeg";
import persianGolden4 from "../assets/cats/persian/persian-golden-4.jpeg";
import persianGolden5 from "../assets/cats/persian/persian-golden-5.jpeg";

// Persian - Grey Blue
import persianGreyBlue1 from "../assets/cats/persian/persian-grey-blue-1.jpeg";
import persianGreyBlue2 from "../assets/cats/persian/persian-grey-blue-2.jpeg";
import persianGreyBlue3 from "../assets/cats/persian/persian-grey-blue-3.jpeg";

// Persian - White
import persianWhite1 from "../assets/cats/persian/persian-white-1.jpeg";
import persianWhite2 from "../assets/cats/persian/persian-white-2.jpeg";
import persianWhite3 from "../assets/cats/persian/persian-white-3.jpeg";

// Ragdoll
import ragdoll1 from "../assets/cats/ragdoll/ragdoll-1.jpeg";
import ragdoll2 from "../assets/cats/ragdoll/ragdoll-2.jpeg";
import ragdoll3 from "../assets/cats/ragdoll/ragdoll-3.jpeg";

// ------------------- HERO SLIDES DATA ------------------- //
export const heroSlides = [
  {
    id: 1,
    title: "Pure Elegance in Every Whisker",
    subtitle:
      "Discover the timeless grace of the world's most aristocratic feline companions.",
    image: persianWhite1,
    cta: "Meet the Persian",
  },
  {
    id: 2,
    title: "Discover World's Royal Breeds",
    subtitle:
      "From the leopard-like Bengal to the noble Maine Coon — explore a curated gallery.",
    image: bengal1,
    cta: "Explore the Gallery",
  },
  {
    id: 3,
    title: "Luxury Living & Care",
    subtitle:
      "A lifestyle devoted to the well-being, heritage, and refined care of every breed.",
    image: british1,
    cta: "Our Philosophy",
  },
];

// ------------------- CATS DATA ------------------- //
export const cats = [
  // --- BENGAL ---
  {
    id: 1,
    name: "Leopard Majesty",
    breed: "Bengal",
    origin: "United States",
    price: "AED 8,500",
    image: bengal1,
    description:
      "An exotic mosaic of wild beauty and domestic grace, featuring a stunning marbled rosette coat. Active, highly intelligent, and regal in posture.",
    stats: {
      lifespan: "12–16 years",
      weight: "4–7 kg",
      temperament: "Active & Energetic",
      grooming: "Weekly",
    },
    tags: ["Exotic", "Active", "Intelligent"],
  },
  {
    id: 2,
    name: "Amber Rosette",
    breed: "Bengal",
    origin: "United States",
    price: "AED 8,800",
    image: bengal2,
    description:
      "Boasting high contrast rosettes and a shimmering coat, this Bengal exhibits an athletic build and a love for high perches.",
    stats: {
      lifespan: "12–16 years",
      weight: "4–7 kg",
      temperament: "Curious & Confident",
      grooming: "Weekly",
    },
    tags: ["Bold", "Curious", "Athletic"],
  },
  {
    id: 3,
    name: "Wild Velvet",
    breed: "Bengal",
    origin: "United States",
    price: "AED 9,000",
    image: bengal3,
    description:
      "A rare exhibition of domestic leopard heritage. Silky soft pelt paired with expressive nocturnal eyes.",
    stats: {
      lifespan: "12–16 years",
      weight: "4.5–7.5 kg",
      temperament: "Playful & Sociable",
      grooming: "Weekly",
    },
    tags: ["Rare", "Playful", "Striking"],
  },

  // --- BRITISH SHORTHAIR ---
  {
    id: 4,
    name: "Classic Blue",
    breed: "British Shorthair",
    origin: "United Kingdom",
    price: "AED 3,600",
    image: british1,
    description:
      "The quintessential teddy bear feline with a plush density coat, round copper eyes, and a soothing, dignified demeanor.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–8 kg",
      temperament: "Calm & Undemanding",
      grooming: "Weekly",
    },
    tags: ["Calm", "Iconic", "Plush"],
  },
  {
    id: 5,
    name: "Lord Sterling",
    breed: "British Shorthair",
    origin: "United Kingdom",
    price: "AED 3,900",
    image: british2,
    description:
      "Broad-chested with a thick coat, this British Shorthair enjoys quiet observation and effortless lap companionship.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–8 kg",
      temperament: "Gentle & Reserved",
      grooming: "Weekly",
    },
    tags: ["Dignified", "Gentle", "Quiet"],
  },
  {
    id: 6,
    name: "Smokey Teddy",
    breed: "British Shorthair",
    origin: "United Kingdom",
    price: "AED 3,800",
    image: british3,
    description:
      "Featuring dense velvety fur and a sweet round profile. A perfect, easy-going companion for tranquil households.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–7.5 kg",
      temperament: "Easygoing & Loving",
      grooming: "Weekly",
    },
    tags: ["Affectionate", "Placid", "Loyal"],
  },

  // --- GOLDEN ---
  {
    id: 7,
    name: "Aurelia",
    breed: "Golden Shorthair",
    origin: "United Kingdom",
    price: "AED 4,200",
    image: goldenCat1,
    description:
      "Bathed in warm golden hues, this companion features aqua-tinted eyes and a remarkably placid personality.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–7 kg",
      temperament: "Affectionate & Reserved",
      grooming: "Weekly",
    },
    tags: ["Golden", "Warm", "Affectionate"],
  },
  {
    id: 8,
    name: "Midas Touch",
    breed: "Golden Shorthair",
    origin: "United Kingdom",
    price: "AED 4,500",
    image: goldenCat2,
    description:
      "Rich honey-toned fur with brilliant facial symmetry. Known for quiet purring and high devotion.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–7.5 kg",
      temperament: "Sweet & Devoted",
      grooming: "Weekly",
    },
    tags: ["Devoted", "Plush", "Quiet"],
  },
  {
    id: 9,
    name: "Saffron Glow",
    breed: "Golden Shorthair",
    origin: "United Kingdom",
    price: "AED 4,400",
    image: goldenCat3,
    description:
      "Radiant apricot undertones frame a cheerful, rounded face. Highly adaptive and friendly.",
    stats: {
      lifespan: "12–17 years",
      weight: "4–7 kg",
      temperament: "Friendly & Gentle",
      grooming: "Weekly",
    },
    tags: ["Radiant", "Friendly", "Gentle"],
  },

  // --- MAINE COON ---
  {
    id: 10,
    name: "Atlas Monarch",
    breed: "Maine Coon",
    origin: "United States",
    price: "AED 7,500",
    image: maineCoon1,
    description:
      "A gentle giant boasting lynx-like ear tufts, a massive bushy tail, and an affectionate, dog-like personality.",
    stats: {
      lifespan: "12–15 years",
      weight: "6–11 kg",
      temperament: "Friendly & Intelligent",
      grooming: "2–3x weekly",
    },
    tags: ["Gentle Giant", "Tufted", "Sociable"],
  },
  {
    id: 11,
    name: "Thunder Paws",
    breed: "Maine Coon",
    origin: "United States",
    price: "AED 7,800",
    image: maineCoon2,
    description:
      "Large-framed feline aristocrat with a water-repellent lion mane coat and expressive tufted paws.",
    stats: {
      lifespan: "12–15 years",
      weight: "6.5–11.5 kg",
      temperament: "Playful & Loyal",
      grooming: "2–3x weekly",
    },
    tags: ["Majestic", "Large", "Loyal"],
  },
  {
    id: 12,
    name: "Highland King",
    breed: "Maine Coon",
    origin: "United States",
    price: "AED 8,000",
    image: maineCoon3,
    description:
      "Impressive structure paired with a chirping voice. Highly companionable and thrives in family environments.",
    stats: {
      lifespan: "12–15 years",
      weight: "7–12 kg",
      temperament: "Affectionate & Vocal",
      grooming: "2–3x weekly",
    },
    tags: ["Noble", "Vocal", "Loving"],
  },

  // --- PERSIAN CREAM ---
  {
    id: 13,
    name: "Vanilla Silk",
    breed: "Persian (Cream)",
    origin: "Iran (Persia)",
    price: "AED 3,200",
    image: persianCream1,
    description:
      "A soft cream coat with doll-like facial expressions. Extremely placid and loves quiet, cushioned resting spots.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–6.5 kg",
      temperament: "Quiet & Peaceful",
      grooming: "Daily",
    },
    tags: ["Soft", "Quiet", "Aristocratic"],
  },
  {
    id: 14,
    name: "Peaches",
    breed: "Persian (Cream)",
    origin: "Iran (Persia)",
    price: "AED 3,400",
    image: persianCream2,
    description:
      "Luxurious flowing cream fur with pastel undertones. Demure, polite, and deeply attached to its owner.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–6.5 kg",
      temperament: "Gentle & Demure",
      grooming: "Daily",
    },
    tags: ["Demure", "Fluffy", "Gentle"],
  },
  {
    id: 15,
    name: "Buttercream Angel",
    breed: "Persian (Cream)",
    origin: "Iran (Persia)",
    price: "AED 3,300",
    image: persianCream3,
    description:
      "Delicate cream coloration with long flowing guard hairs. Serene energy perfect for relaxing indoor spaces.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–6.5 kg",
      temperament: "Serene & Sweet",
      grooming: "Daily",
    },
    tags: ["Serene", "Pastel", "Sweet"],
  },

  // --- PERSIAN GOLDEN ---
  {
    id: 16,
    name: "Sultan Golden",
    breed: "Persian (Golden)",
    origin: "Iran (Persia)",
    price: "AED 4,000",
    image: persianGolden1,
    description:
      "A royal gold-shaded Persian boasting emerald eyes and a plush, flowing mane.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Calm & Dignified",
      grooming: "Daily",
    },
    tags: ["Royal", "Golden", "Emerald Eyes"],
  },
  {
    id: 17,
    name: "Amber Cloud",
    breed: "Persian (Golden)",
    origin: "Iran (Persia)",
    price: "AED 4,200",
    image: persianGolden2,
    description:
      "Warm golden shading over a dense white undercoat. Extremely peaceful companion.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Affectionate & Placid",
      grooming: "Daily",
    },
    tags: ["Shaded", "Affectionate", "Placid"],
  },
  {
    id: 18,
    name: "Imperial Sun",
    breed: "Persian (Golden)",
    origin: "Iran (Persia)",
    price: "AED 4,100",
    image: persianGolden3,
    description:
      "Gilded coat highlights matched with sweet doll features and a serene lifestyle.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Gentle & Quiet",
      grooming: "Daily",
    },
    tags: ["Imperial", "Quiet", "Gentle"],
  },
  {
    id: 19,
    name: "Gilded Blossom",
    breed: "Persian (Golden)",
    origin: "Iran (Persia)",
    price: "AED 4,300",
    image: persianGolden4,
    description:
      "Richly shaded warm coat with broad round face structure and serene amber hues.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Relaxed & Loyal",
      grooming: "Daily",
    },
    tags: ["Rich", "Relaxed", "Loyal"],
  },
  {
    id: 20,
    name: "Crown Jewel",
    breed: "Persian (Golden)",
    origin: "Iran (Persia)",
    price: "AED 4,500",
    image: persianGolden5,
    description:
      "Show-quality golden Persian coat with silky texture and magnificent eye outline.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Regal & Friendly",
      grooming: "Daily",
    },
    tags: ["Show-Quality", "Regal", "Friendly"],
  },

  // --- PERSIAN GREY BLUE ---
  {
    id: 21,
    name: "Shadow Mist",
    breed: "Persian (Grey Blue)",
    origin: "Iran (Persia)",
    price: "AED 3,500",
    image: persianGreyBlue1,
    description:
      "Mystical slate-blue fur with long flowing guard hairs and deep copper eyes.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Calm & Mellow",
      grooming: "Daily",
    },
    tags: ["Slate Blue", "Mellow", "Mystical"],
  },
  {
    id: 22,
    name: "Sapphire Dusk",
    breed: "Persian (Grey Blue)",
    origin: "Iran (Persia)",
    price: "AED 3,700",
    image: persianGreyBlue2,
    description:
      "Deep smoky-blue coat density with relaxed temperament and soft purring habits.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Docile & Quiet",
      grooming: "Daily",
    },
    tags: ["Smoky", "Docile", "Quiet"],
  },
  {
    id: 23,
    name: "Silver Fog",
    breed: "Persian (Grey Blue)",
    origin: "Iran (Persia)",
    price: "AED 3,600",
    image: persianGreyBlue3,
    description:
      "Cool grey tones blending into silken textures. Elegant, soft-spoken, and affectionate.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Gentle & Affectionate",
      grooming: "Daily",
    },
    tags: ["Cool Tones", "Gentle", "Elegant"],
  },

  // --- PERSIAN WHITE ---
  {
    id: 24,
    name: "Snow Queen",
    breed: "Persian (Pure White)",
    origin: "Iran (Persia)",
    price: "AED 2,800",
    image: persianWhite1,
    description:
      "Pure white silken coat with captivating eyes and a gentle doll-faced expression.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Gentle & Affectionate",
      grooming: "Daily",
    },
    tags: ["Pristine", "Gentle", "Doll-Faced"],
  },
  {
    id: 25,
    name: "Winter Lily",
    breed: "Persian (Pure White)",
    origin: "Iran (Persia)",
    price: "AED 3,000",
    image: persianWhite2,
    description:
      "A pristine white fur coat paired with serene elegance and quiet indoor grace.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Quiet & Elegant",
      grooming: "Daily",
    },
    tags: ["Snowy", "Elegant", "Quiet"],
  },
  {
    id: 26,
    name: "Arctic Pearl",
    breed: "Persian (Pure White)",
    origin: "Iran (Persia)",
    price: "AED 3,100",
    image: persianWhite3,
    description:
      "Fluffy white cloud coat with gentle nature, perfect for lap warming and relaxation.",
    stats: {
      lifespan: "12–17 years",
      weight: "3.5–7 kg",
      temperament: "Sweet & Peaceful",
      grooming: "Daily",
    },
    tags: ["Pearl", "Sweet", "Peaceful"],
  },

  // --- RAGDOLL ---
  {
    id: 27,
    name: "Blue Point Cloud",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,500",
    image: ragdoll1,
    description:
      "Famous for going limp with affection, featuring semi-longhair blue points and sapphire eyes.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Docile & Gentle",
      grooming: "2–3x weekly",
    },
    tags: ["Puppy-Cat", "Docile", "Blue Point"],
  },
  {
    id: 28,
    name: "Seal Bicolor",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,800",
    image: ragdoll2,
    description:
      "Distinct inverted 'V' white face mask with rich dark seal points and plush body fur.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Relaxed & Sociable",
      grooming: "2–3x weekly",
    },
    tags: ["Bicolor", "Relaxed", "Sociable"],
  },
  {
    id: 29,
    name: "Velvet Whispers",
    breed: "Ragdoll",
    origin: "United States",
    price: "AED 4,600",
    image: ragdoll3,
    description:
      "Deep blue sapphire eyes framed by soft cream and grey points. Exceptionally docile.",
    stats: {
      lifespan: "12–17 years",
      weight: "4.5–9 kg",
      temperament: "Tolerant & Sweet",
      grooming: "2–3x weekly",
    },
    tags: ["Sapphire Eyes", "Docile", "Sweet"],
  },
];
