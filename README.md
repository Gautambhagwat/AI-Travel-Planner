# 🌍 Itinera – AI Travel Planner

An AI-powered travel planning platform that generates personalized travel itineraries based on user preferences, budget, travel dates, and interests. Built using a modern microservices architecture, Itinera simplifies trip planning by combining intelligent recommendations, interactive maps, weather insights, and centralized trip management.

---

## 📌 Features

- 🔐 Secure User Authentication (JWT)
- 🤖 AI-Powered Itinerary Generation
- 🧳 Trip Creation Wizard
- 📍 Destination Recommendations
- 🗺️ Interactive Maps Integration
- 🌤️ Weather Information
- 💰 Budget Planning
- ❤️ User Travel Preferences
- 📋 Saved Trips Dashboard
- ⚡ Microservices Architecture

---

# 🏗️ System Architecture

```
                   React Frontend
                         │
                         │
                  API Gateway
                         │
 ┌───────────────┬───────────────┬───────────────┐
 │               │               │               │
Auth Service  User Service   Trip Service   AI Service
 │               │               │               │
Destination   Preference    Weather      Maps Service
 Service        Service       Service
                         │
                      MySQL
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Leaflet Maps

---

## Backend

- Spring Boot
- Spring Cloud
- Spring Security
- JWT Authentication
- Spring Data JPA
- Spring Cloud Gateway
- Eureka Service Discovery

---

## Database

- MySQL

---

## AI Integration

- OpenRouter API
- AI-generated travel itinerary
- Personalized travel recommendations

---

## DevOps

- Docker
- Docker Compose
- Git
- GitHub

---

# 📂 Project Structure

```
AI-Travel-Planner
│
├── frontend/
│
├── backend/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── user-service/
│   ├── trip-service/
│   ├── destination-service/
│   ├── preference-service/
│   ├── maps-service/
│   ├── weather-service/
│   ├── ai-service/
│   └── eureka-server/
│
└── docker-compose.yml
```

---

# ⚙️ Microservices

| Service | Description |
|----------|-------------|
| API Gateway | Central entry point for all APIs |
| Eureka Server | Service discovery |
| Auth Service | User authentication & JWT |
| User Service | User profile management |
| Trip Service | Trip creation and management |
| Destination Service | Destination information |
| Preference Service | Stores user travel preferences |
| Maps Service | Location & map integration |
| Weather Service | Weather forecasting |
| AI Service | Generates personalized itineraries |

---

# 🚀 Getting Started

## Prerequisites

- Java 17+
- Maven
- Node.js 18+
- MySQL 8+
- Docker Desktop (Recommended)

---

## Clone Repository

```bash
git clone https://github.com/<your-username>/AI-Travel-Planner.git

cd AI-Travel-Planner
```

---

# Backend Setup

Navigate to each microservice and run:

```bash
mvn clean install

mvn spring-boot:run
```

Start services in the following order:

1. Eureka Server
2. API Gateway
3. Auth Service
4. User Service
5. Destination Service
6. Preference Service
7. Trip Service
8. Maps Service
9. Weather Service
10. AI Service

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Docker Deployment

Run the complete application using Docker:

```bash
docker-compose up --build
```

---

# Environment Variables

Configure the following before running:

### MySQL

```
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_USERNAME=
MYSQL_PASSWORD=
```

### JWT

```
JWT_SECRET=
JWT_EXPIRATION=
```

### AI Service

```
OPENROUTER_API_KEY=
```

---

# API Overview

| Endpoint | Description |
|------------|------------|
| /auth | Authentication APIs |
| /users | User management |
| /trips | Trip management |
| /preferences | User preferences |
| /destinations | Destination APIs |
| /maps | Maps integration |
| /weather | Weather information |
| /ai | AI itinerary generation |

---

# Workflow

1. User registers/login.
2. JWT token is generated.
3. User enters travel details.
4. Preferences are stored.
5. AI Service generates itinerary.
6. Maps & Weather services enrich the itinerary.
7. Trip is saved for future access.

---

# Future Enhancements

- Flight booking integration
- Hotel booking APIs
- Real-time pricing
- Multi-language support
- Travel expense tracking
- Offline itinerary access
- Mobile application
- AI chatbot for travel assistance

---

# 👨‍💻 Team

- Anushka
- Harsh Patel
- Srushti Choudhari
- Gautam Bhagwat


---

# 📜 License

This project was developed as an academic project for educational purposes.

---

# 📸 Screenshots

Add screenshots of:

- Login Page
- Dashboard
- Trip Creation Wizard
- AI Generated Itinerary
- Map View
- Saved Trips

---

# ⭐ Acknowledgements

- Spring Boot
- React
- MySQL
- OpenRouter AI
- Docker
- Leaflet Maps
