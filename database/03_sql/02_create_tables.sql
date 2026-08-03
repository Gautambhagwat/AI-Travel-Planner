USE ai_travel_website;


CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    phone VARCHAR(20),

    city VARCHAR(100),

    country VARCHAR(100)
);




CREATE TABLE destinations (

    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(150) NOT NULL,

    country VARCHAR(100) NOT NULL,

    description TEXT,

    latitude DECIMAL(10,7),

    longitude DECIMAL(10,7),

    image_url VARCHAR(500)
);





CREATE TABLE trips (

    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT NOT NULL,

    destination_id BIGINT NOT NULL,

    trip_name VARCHAR(150) NOT NULL,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    number_of_people INT DEFAULT 1,

    total_price DECIMAL(10,2),

    status VARCHAR(30) DEFAULT 'PLANNED',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_trip_user
        FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_trip_destination
        FOREIGN KEY(destination_id)
        REFERENCES destinations(id)
);




CREATE TABLE preferences (

    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT NOT NULL,

    budget VARCHAR(30),

    travel_style VARCHAR(50),

    CONSTRAINT fk_preference_user
        FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);





CREATE TABLE preference_interests (

    preference_id BIGINT NOT NULL,

    interests VARCHAR(100),

    CONSTRAINT fk_interest_preference
        FOREIGN KEY(preference_id)
        REFERENCES preferences(id)
        ON DELETE CASCADE
);