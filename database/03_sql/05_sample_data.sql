USE ai_travel_website;

INSERT INTO users
(full_name,email,password,phone,city,country)
VALUES
('Admin User',
'[email protected]',
'admin123',
'9999999999',
'Pune',
'India');



INSERT INTO destinations
(name,country,description,latitude,longitude,image_url)
VALUES
(
'Goa',
'India',
'Beach destination',
15.2993,
74.1240,
'https://example.com/goa.jpg'
);



INSERT INTO trips
(user_id,destination_id,trip_name,start_date,end_date,number_of_people,total_price,status)
VALUES
(
1,
1,
'Goa Vacation',
'2026-08-15',
'2026-08-20',
2,
25000,
'PLANNED'
);



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
(1,'Food'),
(1,'Nature');