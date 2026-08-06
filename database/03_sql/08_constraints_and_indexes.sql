/*
=================================================
CONSTRAINTS AND INDEXES
AI TRAVEL WEBSITE
=================================================
*/


/*
=================================================
AUTH DATABASE
=================================================
*/

USE auth_db;


ALTER TABLE users
MODIFY username VARCHAR(100) NOT NULL;


ALTER TABLE users
MODIFY email VARCHAR(150) NOT NULL;


ALTER TABLE users
MODIFY password VARCHAR(255) NOT NULL;


ALTER TABLE users
ADD CONSTRAINT uq_auth_email
UNIQUE(email);



CREATE INDEX idx_auth_username
ON users(username);



CREATE INDEX idx_auth_email
ON users(email);




/*
=================================================
USER DATABASE
=================================================
*/

USE user_db;


ALTER TABLE users
MODIFY full_name VARCHAR(100) NOT NULL;


ALTER TABLE users
MODIFY email VARCHAR(150) NOT NULL;


ALTER TABLE users
ADD CONSTRAINT uq_user_email
UNIQUE(email);



ALTER TABLE users
ADD CONSTRAINT chk_phone_length
CHECK(LENGTH(phone)>=10);



CREATE INDEX idx_user_email
ON users(email);



CREATE INDEX idx_user_city
ON users(city);





/*
=================================================
DESTINATION DATABASE
=================================================
*/

USE destination_db;


ALTER TABLE destinations
MODIFY name VARCHAR(150) NOT NULL;


ALTER TABLE destinations
MODIFY country VARCHAR(100) NOT NULL;


ALTER TABLE destinations
ADD CONSTRAINT chk_destination_price
CHECK(price >= 0);



ALTER TABLE destinations
ADD CONSTRAINT chk_destination_rating
CHECK(rating BETWEEN 0 AND 5);



CREATE INDEX idx_destination_country
ON destinations(country);



CREATE INDEX idx_destination_city
ON destinations(city);



CREATE INDEX idx_destination_rating
ON destinations(rating);




/*
=================================================
PREFERENCE DATABASE
=================================================
*/

USE preference_db;


ALTER TABLE preferences
MODIFY user_id BIGINT NOT NULL;


ALTER TABLE preferences
ADD CONSTRAINT chk_budget
CHECK(
budget IN
(
'Low',
'Medium',
'High'
)
);



CREATE INDEX idx_preference_user
ON preferences(user_id);



CREATE INDEX idx_preference_style
ON preferences(travel_style);



ALTER TABLE preference_interests
ADD INDEX idx_interest_preference
(preference_id);





/*
=================================================
TRIP DATABASE
=================================================
*/

USE trip_db;


ALTER TABLE trips
MODIFY user_id BIGINT NOT NULL;


ALTER TABLE trips
MODIFY destination_id BIGINT NOT NULL;


ALTER TABLE trips
ADD CONSTRAINT chk_people
CHECK(number_of_people > 0);



ALTER TABLE trips
ADD CONSTRAINT chk_total_price
CHECK(total_price >= 0);



ALTER TABLE trips
ADD CONSTRAINT chk_trip_status
CHECK
(
status IN
(
'PENDING',
'CONFIRMED',
'CANCELLED',
'COMPLETED'
)
);



CREATE INDEX idx_trip_user
ON trips(user_id);



CREATE INDEX idx_trip_destination
ON trips(destination_id);



CREATE INDEX idx_trip_status
ON trips(status);