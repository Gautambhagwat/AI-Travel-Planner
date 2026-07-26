
USE ai_travel_website;

ALTER TABLE user_preferences
ADD CONSTRAINT chk_preference_budget
CHECK (
    budget_min IS NULL
    OR budget_min >= 0
);

ALTER TABLE user_preferences
ADD CONSTRAINT chk_preference_budget_max
CHECK (
    budget_max IS NULL
    OR budget_max >= 0
);

ALTER TABLE user_preferences
ADD CONSTRAINT chk_preference_duration
CHECK (
    preferred_trip_duration IS NULL
    OR preferred_trip_duration > 0
);

ALTER TABLE activities
ADD CONSTRAINT chk_activity_cost
CHECK (
    estimated_cost IS NULL
    OR estimated_cost >= 0
);

ALTER TABLE activities
ADD CONSTRAINT chk_activity_duration
CHECK (
    duration_minutes IS NULL
    OR duration_minutes > 0
);

ALTER TABLE trips
ADD CONSTRAINT chk_trip_dates
CHECK (
    end_date >= start_date
);


ALTER TABLE trips
ADD CONSTRAINT chk_trip_budget
CHECK (
    budget IS NULL
    OR budget >= 0
);

ALTER TABLE trips
ADD CONSTRAINT chk_travellers_count
CHECK (
    travellers_count > 0
);

ALTER TABLE itinerary_items
ADD CONSTRAINT chk_day_number
CHECK (
    day_number > 0
);

ALTER TABLE itinerary_items
ADD CONSTRAINT chk_item_time
CHECK (
    end_time IS NULL
    OR start_time IS NULL
    OR end_time > start_time
);

ALTER TABLE recommendations
ADD CONSTRAINT chk_recommendation_score
CHECK (
    score IS NULL
    OR (score >= 0 AND score <= 100)
);

ALTER TABLE recommendations
ADD CONSTRAINT chk_recommendation_target
CHECK (
    destination_id IS NOT NULL
    OR activity_id IS NOT NULL
);