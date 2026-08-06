USE preference_db;


CREATE TABLE preferences
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT,

    budget VARCHAR(100),

    travel_style VARCHAR(100)
);



CREATE TABLE preference_interests
(
    preference_id BIGINT,

    interests VARCHAR(100),

    FOREIGN KEY(preference_id)
    REFERENCES preferences(id)
);