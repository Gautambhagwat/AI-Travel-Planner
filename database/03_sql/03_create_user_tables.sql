USE user_db;


CREATE TABLE users
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100),

    email VARCHAR(150) UNIQUE,

    password VARCHAR(255),

    phone VARCHAR(20),

    city VARCHAR(100),

    country VARCHAR(100)
);