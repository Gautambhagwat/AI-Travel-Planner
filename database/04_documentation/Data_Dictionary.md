\# AI Travel Website — Data Dictionary



\## 1. ROLES

Stores user authorization roles across the platform.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `role\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique identifier for each role |

| `role\_name` | VARCHAR(50) | NOT NULL, UNIQUE | Name of the role (e.g., ADMIN, USER) |



\---



\## 2. USERS

Stores account profiles for platform users.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `user\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique identifier for each user |

| `role\_id` | BIGINT | FK (ROLES.role\_id), NOT NULL | Role assigned to user |

| `full\_name` | VARCHAR(100) | NOT NULL | User's full name |

| `email` | VARCHAR(255) | NOT NULL, UNIQUE | Primary login email address |

| `password\_hash` | VARCHAR(255) | NOT NULL | Hashed password string |

| `date\_of\_birth` | DATE | NULL | User's date of birth |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Account creation timestamp |

| `updated\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP | Account last update timestamp |



\---



\## 3. USER\_PREFERENCES

Stores individual user travel preferences for AI recommendations.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `preference\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique identifier for preferences entry |

| `user\_id` | BIGINT | FK (USERS.user\_id), UNIQUE, NOT NULL | Owner user reference (1:1 relationship) |

| `budget\_min` | DECIMAL(10,2) | NULL | Minimum preferred budget |

| `budget\_max` | DECIMAL(10,2) | NULL | Maximum preferred budget |

| `preferred\_trip\_duration` | INT | NULL | Preferred trip length in days |

| `travel\_style` | VARCHAR(50) | NULL | Style tag (e.g., Solo, Family, Luxury) |

| `preferred\_activities` | TEXT | NULL | Comma-separated or text activity preferences |

| `preferred\_transport` | VARCHAR(50) | NULL | Mode of transportation preferred |

| `updated\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP | Timestamp of last preference update |



\---



\## 4. DESTINATIONS

Contains travel destination locations available in the system.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `destination\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique identifier for destination |

| `name` | VARCHAR(150) | NOT NULL | Name of the destination |

| `country` | VARCHAR(100) | NOT NULL | Country location |

| `state\_region` | VARCHAR(100) | NULL | State or regional territory |

| `description` | TEXT | NULL | Summary overview of destination |

| `latitude` | DECIMAL(10,7) | NULL | Geographic coordinate latitude |

| `longitude` | DECIMAL(10,7) | NULL | Geographic coordinate longitude |

| `image\_url` | VARCHAR(500) | NULL | URL link to destination cover image |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Record creation timestamp |



\---



\## 5. ACTIVITIES

Stores points of interest and experiences associated with destinations.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `activity\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique activity identifier |

| `destination\_id` | BIGINT | FK (DESTINATIONS.destination\_id), NOT NULL | Parent destination reference |

| `name` | VARCHAR(150) | NOT NULL | Activity title |

| `description` | TEXT | NULL | Detailed description of the activity |

| `category` | VARCHAR(100) | NULL | Activity type (e.g., Hiking, Food, Museum) |

| `estimated\_cost` | DECIMAL(10,2) | NULL | Estimated cost per person |

| `duration\_minutes` | INT | NULL | Typical duration in minutes |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Record creation timestamp |



\---



\## 6. TRIPS

Stores trip bookings and itineraries created by users.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `trip\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique trip identifier |

| `user\_id` | BIGINT | FK (USERS.user\_id), NOT NULL | Owner user reference |

| `destination\_id` | BIGINT | FK (DESTINATIONS.destination\_id), NOT NULL | Target destination reference |

| `trip\_name` | VARCHAR(150) | NOT NULL | User-assigned trip name |

| `start\_date` | DATE | NULL | Trip start date |

| `end\_date` | DATE | NULL | Trip end date |

| `budget` | DECIMAL(10,2) | NULL | Total allocated budget for trip |

| `travellers\_count` | INT | DEFAULT 1 | Number of travelers attending |

| `status` | VARCHAR(30) | DEFAULT 'PLANNED' | Status (PLANNED, ONGOING, COMPLETED, CANCELLED) |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Record creation timestamp |

| `updated\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP | Record last update timestamp |



\---



\## 7. ITINERARIES

Main schedule wrapper for a planned trip.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `itinerary\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique itinerary identifier |

| `trip\_id` | BIGINT | FK (TRIPS.trip\_id), UNIQUE, NOT NULL | Parent trip reference (1:1 relationship) |

| `title` | VARCHAR(150) | NOT NULL | Title of the itinerary |

| `description` | TEXT | NULL | Itinerary description |

| `generated\_by` | VARCHAR(30) | DEFAULT 'AI' | Generator source (AI or MANUAL) |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Record creation timestamp |

| `updated\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP | Record last update timestamp |



\---



\## 8. ITINERARY\_ITEMS

Individual schedule line items inside an itinerary.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `item\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique itinerary item identifier |

| `itinerary\_id` | BIGINT | FK (ITINERARIES.itinerary\_id), NOT NULL | Parent itinerary reference |

| `activity\_id` | BIGINT | FK (ACTIVITIES.activity\_id), NOT NULL | Scheduled activity reference |

| `day\_number` | INT | NOT NULL | Day index in trip timeline (e.g., Day 1) |

| `start\_time` | TIME | NULL | Planned start time |

| `end\_time` | TIME | NULL | Planned end time |

| `notes` | TEXT | NULL | Custom user notes for this scheduled item |



\---



\## 9. RECOMMENDATIONS

Stores AI-suggested destinations, activities, or trips for users.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `recommendation\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique recommendation identifier |

| `user\_id` | BIGINT | FK (USERS.user\_id), NOT NULL | Target user reference |

| `trip\_id` | BIGINT | FK (TRIPS.trip\_id), NULL | Associated trip reference (if applicable) |

| `destination\_id` | BIGINT | FK (DESTINATIONS.destination\_id), NULL | Suggested destination reference |

| `activity\_id` | BIGINT | FK (ACTIVITIES.activity\_id), NULL | Suggested activity reference |

| `recommendation\_type` | VARCHAR(50) | NULL | Type (DESTINATION, ACTIVITY, ITINERARY) |

| `reason` | TEXT | NULL | Explanation generated for recommendation |

| `score` | DECIMAL(5,2) | NULL | Confidence or ranking match score |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Recommendation timestamp |



\---



\## 10. AI\_GENERATIONS

Tracks raw prompt inputs and model responses for audit and caching.



| Column Name | Data Type | Key / Constraints | Description |

| :--- | :--- | :--- | :--- |

| `generation\_id` | BIGINT | PK, AUTO\_INCREMENT | Unique log entry identifier |

| `user\_id` | BIGINT | FK (USERS.user\_id), NOT NULL | User requesting AI generation |

| `trip\_id` | BIGINT | FK (TRIPS.trip\_id), NULL | Associated trip reference |

| `generation\_type` | VARCHAR(50) | NULL | Type of query (e.g., ITINERARY\_PLAN, ACTIVITY\_RECS) |

| `prompt` | TEXT | NULL | User prompt supplied to AI model |

| `response` | TEXT | NULL | Full text response returned by AI model |

| `model\_name` | VARCHAR(100) | NULL | AI Model used (e.g., gpt-4o, gemini-1.5-pro) |

| `status` | VARCHAR(30) | NULL | Execution outcome (SUCCESS, FAILED) |

| `created\_at` | TIMESTAMP | DEFAULT CURRENT\_TIMESTAMP | Timestamp of execution |

