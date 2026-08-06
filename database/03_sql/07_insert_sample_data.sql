USE user_db;


INSERT INTO users
(full_name,email,password,phone,city,country)

VALUES

(
'Srushti Choudhari',
'srushti@gmail.com',
'123456',
'9876543210',
'Mumbai',
'India'
);



USE destination_db;


INSERT INTO destinations
(name,city,country,description,price,image_url,days,rating)

VALUES

(
'Goa Beach',
'Goa',
'India',
'Beautiful beach destination',
15000,
'goa.jpg',
5,
4.5
);



USE preference_db;


INSERT INTO preferences
(user_id,budget,travel_style)

VALUES

(
1,
'Medium',
'Adventure'
);



INSERT INTO preference_interests
(preference_id,interests)

VALUES

(1,'Beach'),

(1,'Photography');



USE trip_db;


INSERT INTO trips
(
user_id,
destination_id,
trip_name,
start_date,
end_date,
number_of_people,
total_price,
status
)

VALUES

(
1,
1,
'Goa Vacation',
'2026-08-10',
'2026-08-15',
2,
30000,
'CONFIRMED'
);