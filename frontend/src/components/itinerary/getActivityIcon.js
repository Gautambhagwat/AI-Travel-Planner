/**
 * getActivityIcon.js
 *
 * Returns a Lucide icon component based on keyword detection in the
 * activity text. Falls back to CheckCircle2.
 */

import {
  Utensils,
  Landmark,
  Waves,
  ShoppingBag,
  Building2,
  Car,
  Coffee,
  Camera,
  Tent,
  Ship,
  Music,
  TreePine,
  Sunset,
  Sunrise,
  Sun,
  Moon,
  CheckCircle2,
  Star,
  Globe,
  Church,
  Mountain,
  Wine,
  Beer,
  Bike,
  Bus,
  Train,
  Plane,
  Hotel,
} from "lucide-react";

const RULES = [
  // Food & Drink
  { keywords: ["breakfast", "brunch", "cafe", "coffee", "tea"], icon: Coffee },
  { keywords: ["lunch", "dinner", "restaurant", "eat", "food", "viva", "dining", "cuisine"], icon: Utensils },
  { keywords: ["bar", "pub", "wine", "beer", "cocktail", "drinks"], icon: Wine },

  // Accommodation
  { keywords: ["hotel", "hostel", "resort", "airbnb", "check-in", "check in", "accommodation", "stay"], icon: Hotel },

  // Religious & Cultural
  { keywords: ["basilica", "church", "temple", "mosque", "cathedral", "shrine", "chapel", "monastery"], icon: Church },
  { keywords: ["museum", "gallery", "exhibit", "fort", "palace", "heritage"], icon: Landmark },

  // Nature & Outdoors
  { keywords: ["beach", "sea", "ocean", "coast", "shore", "bay", "marina"], icon: Waves },
  { keywords: ["sunset", "sunrise view"], icon: Sunset },
  { keywords: ["forest", "jungle", "wildlife", "park", "garden", "nature"], icon: TreePine },
  { keywords: ["mountain", "hill", "trek", "hike", "valley"], icon: Mountain },
  { keywords: ["camp", "camping", "tent"], icon: Tent },

  // Transport
  { keywords: ["drive", "car", "taxi", "cab", "auto"], icon: Car },
  { keywords: ["bus", "coach"], icon: Bus },
  { keywords: ["train", "rail"], icon: Train },
  { keywords: ["flight", "fly", "airport", "plane"], icon: Plane },
  { keywords: ["cruise", "ferry", "boat", "ship", "sail"], icon: Ship },
  { keywords: ["cycle", "bike", "bicycle"], icon: Bike },

  // Activities
  { keywords: ["shop", "market", "mall", "bazaar", "souvenir"], icon: ShoppingBag },
  { keywords: ["photo", "photograph", "picture", "instagramm"], icon: Camera },
  { keywords: ["music", "concert", "show", "performance", "festival"], icon: Music },
  { keywords: ["spa", "massage", "relax", "wellness"], icon: Star },
  { keywords: ["tour", "sightseeing", "visit", "explore"], icon: Globe },
];

export function getActivityIcon(activity) {

  if (!activity) {
    return CheckCircle2;
  }


  // Support old string format + new JSON activity format
  const text =
      typeof activity === "string"
          ? activity
          : `
        ${activity.title || ""}
        ${activity.description || ""}
        ${activity.location || ""}
        ${activity.transport || ""}
      `;


  const lower = text.toLowerCase();


  for (const rule of RULES) {

    if (
        rule.keywords.some((kw) =>
            lower.includes(kw)
        )
    ) {
      return rule.icon;
    }

  }


  return CheckCircle2;
}

export const PERIOD_ICONS = {
  morning: Sunrise,
  afternoon: Sun,
  evening: Sunset,
  night: Moon,
};

export function getPeriodIcon(period) {
  return PERIOD_ICONS[period?.toLowerCase()] ?? Sun;
}

export const PERIOD_COLORS = {
  morning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    icon: "text-amber-500",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-400",
    line: "bg-amber-200",
  },
  afternoon: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-700",
    icon: "text-sky-500",
    badge: "bg-sky-100 text-sky-700",
    dot: "bg-sky-400",
    line: "bg-sky-200",
  },
  evening: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    icon: "text-orange-500",
    badge: "bg-orange-100 text-orange-700",
    dot: "bg-orange-400",
    line: "bg-orange-200",
  },
  night: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    text: "text-indigo-700",
    icon: "text-indigo-500",
    badge: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-400",
    line: "bg-indigo-200",
  },
};

export function getPeriodColors(period) {
  return (
    PERIOD_COLORS[period?.toLowerCase()] || {
      bg: "bg-primary-50",
      border: "border-primary-200",
      text: "text-primary-700",
      icon: "text-primary-500",
      badge: "bg-primary-100 text-primary-700",
      dot: "bg-primary-400",
      line: "bg-primary-200",
    }
  );
}
