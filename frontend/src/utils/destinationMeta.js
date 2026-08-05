export const DESTINATION_META = {
    goa: {
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
        country: "India",
        desc: "Sun-drenched beaches, Portuguese heritage & vibrant nightlife.",
    },

    manali: {
        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
        country: "India",
        desc: "Snow-capped peaks, adventure sports & pine-scented valleys.",
    },

    jaipur: {
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
        country: "India",
        desc: "The Pink City — majestic forts, royal palaces & vibrant bazaars.",
    },

    kerala: {
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
        country: "India",
        desc: "Lush backwaters, spice gardens & tranquil Ayurvedic retreats.",
    },

    bali: {
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        country: "Indonesia",
        desc: "Terraced rice fields, sacred temples & world-class surf.",
    },

    paris: {
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        country: "France",
        desc: "The City of Light — art, cuisine, fashion & the Eiffel Tower.",
    },

    kyoto: {
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        country: "Japan",
        desc: "Ancient temples, bamboo forests & timeless Japanese culture.",
    },

    dubai: {
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        country: "UAE",
        desc: "Futuristic skylines, luxury shopping & desert adventures.",
    },

    tokyo: {
        image:
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        country: "Japan",
        desc: "Neon-lit modernity blended with deep-rooted tradition.",
    },

    maldives: {
        image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
        country: "Maldives",
        desc: "Crystal-clear lagoons, overwater villas & pristine coral reefs.",
    },

    santorini: {
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
        country: "Greece",
        desc: "Iconic whitewashed villages, volcanic beaches & breathtaking sunsets.",
    },

    rajasthan: {
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
        country: "India",
        desc: "Desert dunes, ancient forts & the colorful spirit of Rajputana.",
    },
};


export function getDestinationImage(destination = "") {
    const key = destination.toLowerCase().trim();

    return (
        DESTINATION_META[key]?.image ||
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
    );
}