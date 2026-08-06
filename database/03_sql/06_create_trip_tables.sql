USE trip_db;


CREATE TABLE trips
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,


    user_id BIGINT,


    destination_id BIGINT,


    trip_name VARCHAR(150),


    start_date VARCHAR(50),


    end_date VARCHAR(50),


    number_of_people INT,


    total_price DOUBLE,


    status VARCHAR(50)
);