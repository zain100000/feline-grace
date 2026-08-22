/**
 * @file Purpose.constant.util.js
 * @module Constants/Purpose
 * @description Static content and principles structure for Our Purpose section.
 */

export const purposeData = {
  title: "OUR PURPOSE",
  subtitle: "Three principles, quietly upheld",
  principles: [
    {
      id: "heritage",
      title: "Heritage",
      iconName: "Crown", // Maps to lucide-react Crown icon
      description:
        "Pedigrees traced across generations, documented with the rigour of a private archive.",
    },
    {
      id: "care",
      title: "Care",
      iconName: "HeartHandshake", // Maps to lucide-react HeartHandshake icon
      description:
        "Veterinary-led rituals, nutrition, and grooming designed around each temperament.",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      iconName: "Sparkles", // Maps to lucide-react Sparkles icon
      description:
        "Interiors, travel, and companionship curated so elegance is lived, not staged.",
    },
  ],
};
