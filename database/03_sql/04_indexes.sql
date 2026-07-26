USE ai_travel_website;

-- Indexes for frequent query optimization
CREATE INDEX idx_users_role_id
ON users(role_id);

CREATE INDEX idx_activities_destination_id
ON activities(destination_id);

CREATE INDEX idx_trips_user_id
ON trips(user_id);

CREATE INDEX idx_trips_destination_id
ON trips(destination_id);

CREATE INDEX idx_itinerary_items_itinerary_id
ON itinerary_items(itinerary_id);

CREATE INDEX idx_itinerary_items_activity_id
ON itinerary_items(activity_id);

CREATE INDEX idx_recommendations_user_id
ON recommendations(user_id);

CREATE INDEX idx_recommendations_trip_id
ON recommendations(trip_id);


CREATE INDEX idx_ai_generations_user_id
ON ai_generations(user_id);


CREATE INDEX idx_ai_generations_trip_id
ON ai_generations(trip_id);