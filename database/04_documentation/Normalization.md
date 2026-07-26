\# AI Travel Website — Database Normalization Analysis



This document outlines the normalization process applied to the \*\*AI Travel Website\*\* relational schema to eliminate data redundancy, prevent update anomalies, and maintain data integrity.



\---



\## 1. First Normal Form (1NF)

A relation is in 1NF if all attributes contain \*\*atomic (indivisible) values\*\*, and every row is unique.



\* \*\*Atomic Values:\*\* Every column in all 10 tables holds a single value per record. Multi-valued attributes (such as multiple itinerary activities or user roles) were separated into dedicated tables like `ITINERARY\_ITEMS` and `ROLES`.

\* \*\*Primary Keys:\*\* Every table defines a surrogate primary key using `BIGINT AUTO\_INCREMENT` (e.g., `user\_id`, `trip\_id`, `destination\_id`).

\* \*\*No Repeating Groups:\*\* Instead of storing lists of activities inside `TRIPS` or `ITINERARIES`, each scheduled entry lives in `ITINERARY\_ITEMS` as an individual record.



\---



\## 2. Second Normal Form (2NF)

A relation is in 2NF if it is in 1NF and \*\*all non-key attributes are fully functionally dependent on the primary key\*\* (no partial dependencies on composite keys).



\* \*\*Single-Column Keys:\*\* Since all tables utilize single-column primary keys (`BIGINT AUTO\_INCREMENT`), partial dependency on a composite key is naturally prevented.

\* \*\*Separation of Entities:\*\* 

&#x20; \* Destination details (`country`, `state\_region`, `latitude`, `longitude`) are stored independently in `DESTINATIONS` rather than being repeated inside `ACTIVITIES` or `TRIPS`.

&#x20; \* User roles (`role\_name`) were extracted into `ROLES` to avoid repeating role names across millions of records in `USERS`.



\---



\## 3. Third Normal Form (3NF)

A relation is in 3NF if it is in 2NF and \*\*no non-key attribute depends transitively on another non-key attribute\*\* (no transitive dependencies).



\* \*\*Elimination of Transitive Dependencies ($X \\rightarrow Y \\rightarrow Z$):\*\*

&#x20; \* In `ITINERARY\_ITEMS`, details about an activity (such as `activity\_name` or `estimated\_cost`) are not stored. Only the `activity\_id` reference is stored, keeping activity data strictly dependent on `ACTIVITIES.activity\_id`.

&#x20; \* In `TRIPS`, location attributes like `country` or `city` are not stored. The table references `destination\_id`, ensuring location attributes depend solely on `DESTINATIONS.destination\_id`.

&#x20; \* In `USERS`, permissions or role properties are not stored directly. The table references `role\_id`, keeping role parameters strictly in `ROLES`.



\---



\## Summary of Relationships



| Parent Table | Child Table | Relationship Type | Key Mechanism |

| :--- | :--- | :--- | :--- |

| `ROLES` | `USERS` | One-to-Many ($1:N$) | `USERS.role\_id` $\\rightarrow$ `ROLES.role\_id` |

| `USERS` | `USER\_PREFERENCES` | One-to-One ($1:1$) | `USER\_PREFERENCES.user\_id` $\\rightarrow$ `USERS.user\_id` (UNIQUE) |

| `USERS` | `TRIPS` | One-to-Many ($1:N$) | `TRIPS.user\_id` $\\rightarrow$ `USERS.user\_id` |

| `DESTINATIONS` | `TRIPS` | One-to-Many ($1:N$) | `TRIPS.destination\_id` $\\rightarrow$ `DESTINATIONS.destination\_id` |

| `DESTINATIONS` | `ACTIVITIES` | One-to-Many ($1:N$) | `ACTIVITIES.destination\_id` $\\rightarrow$ `DESTINATIONS.destination\_id` |

| `TRIPS` | `ITINERARIES` | One-to-One ($1:1$) | `ITINERARIES.trip\_id` $\\rightarrow$ `TRIPS.trip\_id` (UNIQUE) |

| `ITINERARIES` | `ITINERARY\_ITEMS` | One-to-Many ($1:N$) | `ITINERARY\_ITEMS.itinerary\_id` $\\rightarrow$ `ITINERARIES.itinerary\_id` |

| `ACTIVITIES` | `ITINERARY\_ITEMS` | One-to-Many ($1:N$) | `ITINERARY\_ITEMS.activity\_id` $\\rightarrow$ `ACTIVITIES.activity\_id` |

| `USERS` | `RECOMMENDATIONS` | One-to-Many ($1:N$) | `RECOMMENDATIONS.user\_id` $\\rightarrow$ `USERS.user\_id` |

| `USERS` | `AI\_GENERATIONS` | One-to-Many ($1:N$) | `AI\_GENERATIONS.user\_id` $\\rightarrow$ `USERS.user\_id` |

