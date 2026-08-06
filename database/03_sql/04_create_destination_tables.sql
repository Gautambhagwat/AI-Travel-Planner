USE destination_db;


CREATE TABLE destinations
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(150),

    city VARCHAR(100),

    country VARCHAR(100),

    description TEXT,

    price DOUBLE,

    image_url VARCHAR(255),

    days INT,

    rating DOUBLE
);