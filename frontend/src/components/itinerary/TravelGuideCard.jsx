import {
    Sparkles,
    Utensils,
    MapPin,
    Lightbulb,
} from "lucide-react";

function TravelGuideCard({ summary }) {
    if (!summary) return null;

    return (
        <div className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
                        AI Travel Guide
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-secondary-900">
                        Local Recommendations
                    </h2>
                </div>

                <div className="rounded-2xl bg-primary-50 p-4 text-primary-700">
                    <Sparkles size={28} />
                </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <Utensils className="text-primary-600" size={20} />
                        <h3 className="font-semibold">Best Foods</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-secondary-600">
                        {summary.bestFoods?.map((food) => (
                            <li key={food}>• {food}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <MapPin className="text-primary-600" size={20} />
                        <h3 className="font-semibold">Must Visit</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-secondary-600">
                        {summary.mustVisit?.map((place) => (
                            <li key={place}>• {place}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <Lightbulb className="text-primary-600" size={20} />
                        <h3 className="font-semibold">Travel Tips</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-secondary-600">
                        {summary.travelTips?.map((tip) => (
                            <li key={tip}>• {tip}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TravelGuideCard;