CREATE TABLE roles (
    role_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE users (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    role_id BIGINT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_users_role
        FOREIGN KEY (role_id)
        REFERENCES roles(role_id)
);

CREATE TABLE user_preferences (
    preference_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL UNIQUE,
    budget_min DECIMAL(10,2),
    budget_max DECIMAL(10,2),
    preferred_trip_duration INT,
    travel_style VARCHAR(50),
    preferred_activities TEXT,
    preferred_transport VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_preferences_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

CREATE TABLE destinations (
    destination_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    country VARCHAR(100) NOT NULL,
    state_region VARCHAR(100),
    description TEXT,
    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE activities (
    activity_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    destination_id BIGINT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    estimated_cost DECIMAL(10,2),
    duration_minutes INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_activities_destination
        FOREIGN KEY (destination_id)
        REFERENCES destinations(destination_id)
        ON DELETE CASCADE
);

CREATE TABLE trips (
    trip_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    destination_id BIGINT NOT NULL,
    trip_name VARCHAR(150) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    budget DECIMAL(10,2),
    travellers_count INT DEFAULT 1,
    status VARCHAR(30) DEFAULT 'PLANNED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_trips_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_trips_destination
        FOREIGN KEY (destination_id)
        REFERENCES destinations(destination_id)
);

CREATE TABLE itineraries (
    itinerary_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    trip_id BIGINT NOT NULL UNIQUE,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    generated_by VARCHAR(30) DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_itineraries_trip
        FOREIGN KEY (trip_id)
        REFERENCES trips(trip_id)
        ON DELETE CASCADE
);


CREATE TABLE itinerary_items (
    item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    itinerary_id BIGINT NOT NULL,
    activity_id BIGINT NOT NULL,
    day_number INT NOT NULL,
    start_time TIME,
    end_time TIME,
    notes TEXT,

    CONSTRAINT fk_items_itinerary
        FOREIGN KEY (itinerary_id)
        REFERENCES itineraries(itinerary_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_items_activity
        FOREIGN KEY (activity_id)
        REFERENCES activities(activity_id)
);

CREATE TABLE recommendations (
    recommendation_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    trip_id BIGINT,
    destination_id BIGINT,
    activity_id BIGINT,
    recommendation_type VARCHAR(50) NOT NULL,
    reason TEXT,
    score DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_recommendations_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_recommendations_trip
        FOREIGN KEY (trip_id)
        REFERENCES trips(trip_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_recommendations_destination
        FOREIGN KEY (destination_id)
        REFERENCES destinations(destination_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_recommendations_activity
        FOREIGN KEY (activity_id)
        REFERENCES activities(activity_id)
        ON DELETE CASCADE
);


CREATE TABLE ai_generations (
    generation_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    trip_id BIGINT,
    generation_type VARCHAR(50) NOT NULL,
    prompt TEXT NOT NULL,
    response TEXT,
    model_name VARCHAR(100),
    status VARCHAR(30) DEFAULT 'COMPLETED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ai_generations_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_ai_generations_trip
        FOREIGN KEY (trip_id)
        REFERENCES trips(trip_id)
        ON DELETE CASCADE
);


