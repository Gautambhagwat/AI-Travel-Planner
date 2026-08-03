USE ai_travel_website;

CREATE INDEX idx_users_email
ON users(email);

CREATE INDEX idx_trip_user
ON trips(user_id);

CREATE INDEX idx_trip_destination
ON trips(destination_id);

CREATE INDEX idx_preference_user
ON preferences(user_id);