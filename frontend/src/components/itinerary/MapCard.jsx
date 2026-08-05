import { getLocation } from "../../services/mapService";
import { MapPin } from "lucide-react";
import L from "leaflet";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
} from "react-leaflet";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const destinationIcon = new L.Icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const activityIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    iconRetinaUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

function MapCard({ location, itinerary }) {
    const [activityMarkers, setActivityMarkers] = useState([]);

    const activities = [];

    itinerary?.days?.forEach((day) => {
        day.sections?.forEach((section) => {
            section.activities?.forEach((activity) => {
                if (activity.location) {
                    activities.push(activity.location);
                }
            });
        });
    });

    useEffect(() => {
        async function loadActivityMarkers() {
            try {
                const markers = [];

                for (const place of activities) {
                    try {
                        const data = await getLocation(place);

                        if (data) {
                            markers.push({
                                ...data,
                                place,
                            });
                        }
                    } catch (error) {
                        console.error(
                            "Failed loading marker:",
                            place,
                            error
                        );
                    }
                }


                setActivityMarkers(markers);
            } catch (error) {
                console.error(
                    "Activity marker loading failed",
                    error
                );
            }
        }

        if (activities.length > 0) {
            loadActivityMarkers();
        }
    }, [itinerary]);

    if (!location) {
        return null;
    }

    const routeCoordinates = [
        [
            Number(location.latitude),
            Number(location.longitude),
        ],
        ...activityMarkers.map((marker) => [
            Number(marker.latitude),
            Number(marker.longitude),
        ]),
    ];

    return (
        <div className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
                        Destination Map
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-secondary-900">
                        {location.displayName}
                    </h2>
                </div>

                <div className="rounded-2xl bg-primary-50 p-4 text-primary-700">
                    <MapPin size={28} />
                </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
                <MapContainer
                    center={[
                        Number(location.latitude),
                        Number(location.longitude),
                    ]}
                    zoom={12}
                    style={{
                        height: "350px",
                        width: "100%",
                    }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {/* Destination Marker */}
                    <Marker
                        icon={destinationIcon}
                        position={[
                            Number(location.latitude),
                            Number(location.longitude),
                        ]}
                    >
                        <Popup>{location.displayName}</Popup>
                    </Marker>

                    {/* Activity Markers */}
                    {activityMarkers.map((marker, index) => (
                        <Marker
                            key={index}
                            icon={activityIcon}
                            position={[
                                Number(marker.latitude),
                                Number(marker.longitude),
                            ]}
                        >
                            <Popup>
                                <strong>{marker.place}</strong>
                                <br />
                                {marker.displayName}
                            </Popup>
                        </Marker>
                    ))}

                    {/* Travel Route */}
                    <Polyline
                        positions={routeCoordinates}
                        pathOptions={{
                            color: "#2563eb",
                            weight: 4,
                            opacity: 0.8,
                        }}
                    />
                </MapContainer>
            </div>
        </div>
    );
}

export default MapCard;