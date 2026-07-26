-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ai_travel_website
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,1,'Scuba Diving','Explore marine life and underwater landscapes.','Adventure',2500.00,180,'2026-07-25 02:07:18'),(2,1,'Baga Beach Visit','Relax and enjoy the popular beach atmosphere.','Beach',0.00,180,'2026-07-25 02:07:18'),(3,1,'Fort Aguada Visit','Explore the historic Portuguese-era fort.','Heritage',100.00,120,'2026-07-25 02:07:18'),(4,1,'Water Sports','Enjoy activities such as parasailing and jet skiing.','Adventure',1500.00,120,'2026-07-25 02:07:18'),(5,2,'Solang Valley','Enjoy mountain views and adventure activities.','Adventure',1000.00,240,'2026-07-25 02:07:18'),(6,2,'Rohtang Pass','Experience scenic Himalayan landscapes.','Nature',500.00,300,'2026-07-25 02:07:18'),(7,2,'Beas River Visit','Relax near the scenic Beas River.','Nature',0.00,120,'2026-07-25 02:07:18'),(8,2,'Mountain Trekking','Explore mountain trails with a guided trek.','Adventure',1200.00,360,'2026-07-25 02:07:18'),(9,3,'Amber Fort','Visit the historic hilltop fort.','Heritage',500.00,180,'2026-07-25 02:07:18'),(10,3,'City Palace','Explore the royal palace complex.','Heritage',400.00,150,'2026-07-25 02:07:18'),(11,3,'Hawa Mahal','Visit the iconic Palace of Winds.','Heritage',200.00,90,'2026-07-25 02:07:18'),(12,3,'Local Market','Explore traditional markets and local handicrafts.','Shopping',0.00,180,'2026-07-25 02:07:18'),(13,4,'Gateway of India','Visit one of Mumbai\'s most famous landmarks.','Heritage',0.00,120,'2026-07-25 02:07:18'),(14,4,'Marine Drive','Enjoy a scenic walk along the coast.','Sightseeing',0.00,120,'2026-07-25 02:07:18'),(15,4,'Elephanta Caves','Explore the historic cave temples.','Heritage',500.00,300,'2026-07-25 02:07:18'),(16,4,'Street Food Tour','Experience popular local food.','Food',800.00,180,'2026-07-25 02:07:18'),(17,5,'Alleppey Backwaters','Enjoy a scenic backwater experience.','Nature',2000.00,300,'2026-07-25 02:07:18'),(18,5,'Munnar Tea Gardens','Explore beautiful tea plantations.','Nature',500.00,240,'2026-07-25 02:07:18'),(19,5,'Kovalam Beach','Relax at a scenic coastal destination.','Beach',0.00,180,'2026-07-25 02:07:18'),(20,5,'Kathakali Performance','Experience traditional Kerala performing arts.','Culture',300.00,120,'2026-07-25 02:07:18');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ai_generations`
--

LOCK TABLES `ai_generations` WRITE;
/*!40000 ALTER TABLE `ai_generations` DISABLE KEYS */;
INSERT INTO `ai_generations` VALUES (1,1,1,'ITINERARY','Create a 5-day Goa itinerary for two travellers interested in beaches and adventure within a budget of 22000.','Generated a 5-day itinerary including Baga Beach, Fort Aguada, scuba diving and water sports.','AI-MODEL','COMPLETED','2026-07-25 02:07:18'),(2,3,3,'ITINERARY','Create a 4-day Jaipur heritage itinerary for three travellers.','Generated a heritage-focused itinerary including Amber Fort, City Palace, Hawa Mahal and local markets.','AI-MODEL','COMPLETED','2026-07-25 02:07:18');
/*!40000 ALTER TABLE `ai_generations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `destinations`
--

LOCK TABLES `destinations` WRITE;
/*!40000 ALTER TABLE `destinations` DISABLE KEYS */;
INSERT INTO `destinations` VALUES (1,'Goa','India','Goa','A popular coastal destination known for beaches, nightlife, water sports and Portuguese heritage.',15.2993000,74.1240000,'goa.jpg','2026-07-25 02:07:18'),(2,'Manali','India','Himachal Pradesh','A mountain destination known for scenic landscapes, trekking and adventure activities.',32.2396000,77.1887000,'manali.jpg','2026-07-25 02:07:18'),(3,'Jaipur','India','Rajasthan','The Pink City known for forts, palaces, cultural heritage and traditional markets.',26.9124000,75.7873000,'jaipur.jpg','2026-07-25 02:07:18'),(4,'Mumbai','India','Maharashtra','A vibrant metropolitan city known for entertainment, food, beaches and historic landmarks.',19.0760000,72.8777000,'mumbai.jpg','2026-07-25 02:07:18'),(5,'Kerala','India','Kerala','A scenic destination famous for backwaters, beaches, hills and cultural experiences.',10.8505000,76.2711000,'kerala.jpg','2026-07-25 02:07:18');
/*!40000 ALTER TABLE `destinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `itineraries`
--

LOCK TABLES `itineraries` WRITE;
/*!40000 ALTER TABLE `itineraries` DISABLE KEYS */;
INSERT INTO `itineraries` VALUES (1,1,'5-Day Goa Adventure Itinerary','A balanced itinerary combining beaches, adventure and heritage.','AI','2026-07-25 02:07:18','2026-07-25 02:07:18'),(2,2,'7-Day Kerala Relaxation Itinerary','A relaxing itinerary covering backwaters, beaches and nature.','AI','2026-07-25 02:07:18','2026-07-25 02:07:18'),(3,3,'4-Day Jaipur Heritage Itinerary','A cultural journey through Jaipur\'s historic landmarks.','AI','2026-07-25 02:07:18','2026-07-25 02:07:18'),(4,4,'5-Day Manali Nature Itinerary','An adventure and nature-focused mountain itinerary.','AI','2026-07-25 02:07:18','2026-07-25 02:07:18');
/*!40000 ALTER TABLE `itineraries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `itinerary_items`
--

LOCK TABLES `itinerary_items` WRITE;
/*!40000 ALTER TABLE `itinerary_items` DISABLE KEYS */;
INSERT INTO `itinerary_items` VALUES (1,1,2,1,'10:00:00','13:00:00','Relax at Baga Beach'),(2,1,3,1,'15:00:00','17:00:00','Visit Fort Aguada'),(3,1,1,2,'09:00:00','12:00:00','Morning scuba diving experience'),(4,1,4,2,'15:00:00','17:00:00','Enjoy water sports'),(5,2,16,1,'09:00:00','14:00:00','Explore Alleppey backwaters'),(6,2,17,3,'10:00:00','14:00:00','Visit Munnar tea gardens'),(7,2,18,5,'10:00:00','13:00:00','Relax at Kovalam Beach'),(8,3,9,1,'09:00:00','12:00:00','Explore Amber Fort'),(9,3,10,2,'10:00:00','12:30:00','Visit City Palace'),(10,3,11,2,'15:00:00','16:30:00','Visit Hawa Mahal'),(11,3,12,3,'10:00:00','13:00:00','Explore local markets'),(12,4,5,1,'09:00:00','13:00:00','Visit Solang Valley'),(13,4,7,2,'10:00:00','12:00:00','Relax near Beas River'),(14,4,8,3,'08:00:00','14:00:00','Guided mountain trekking'),(15,4,6,4,'08:00:00','13:00:00','Visit Rohtang Pass');
/*!40000 ALTER TABLE `itinerary_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `recommendations`
--

LOCK TABLES `recommendations` WRITE;
/*!40000 ALTER TABLE `recommendations` DISABLE KEYS */;
INSERT INTO `recommendations` VALUES (1,1,1,1,1,'ACTIVITY','Scuba diving matches the user\'s preference for adventure activities.',95.00,'2026-07-25 02:07:18'),(2,1,1,1,4,'ACTIVITY','Water sports are suitable for the user\'s adventure-focused travel style.',91.00,'2026-07-25 02:07:18'),(3,2,2,5,16,'ACTIVITY','Backwater experiences match the user\'s preference for relaxation and nature.',94.00,'2026-07-25 02:07:18'),(4,3,3,3,9,'ACTIVITY','Amber Fort matches the user\'s interest in heritage and culture.',96.00,'2026-07-25 02:07:18'),(5,4,4,2,8,'ACTIVITY','Mountain trekking matches the user\'s preference for nature and adventure.',93.00,'2026-07-25 02:07:18');
/*!40000 ALTER TABLE `recommendations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (2,'ADMIN'),(1,'USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trips`
--

LOCK TABLES `trips` WRITE;
/*!40000 ALTER TABLE `trips` DISABLE KEYS */;
INSERT INTO `trips` VALUES (1,1,1,'Goa Adventure Trip','2026-08-10','2026-08-14',22000.00,2,'PLANNED','2026-07-25 02:07:18','2026-07-25 02:07:18'),(2,2,5,'Kerala Relaxation Trip','2026-09-05','2026-09-11',28000.00,2,'PLANNED','2026-07-25 02:07:18','2026-07-25 02:07:18'),(3,3,3,'Jaipur Heritage Trip','2026-08-20','2026-08-23',15000.00,3,'PLANNED','2026-07-25 02:07:18','2026-07-25 02:07:18'),(4,4,2,'Manali Nature Trip','2026-10-01','2026-10-05',20000.00,2,'PLANNED','2026-07-25 02:07:18','2026-07-25 02:07:18');
/*!40000 ALTER TABLE `trips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_preferences`
--

LOCK TABLES `user_preferences` WRITE;
/*!40000 ALTER TABLE `user_preferences` DISABLE KEYS */;
INSERT INTO `user_preferences` VALUES (1,1,10000.00,25000.00,5,'Adventure','Beaches, Water Sports, Scuba Diving','Flight','2026-07-25 02:07:18'),(2,2,15000.00,30000.00,7,'Relaxation','Beaches, Nature, Food','Train','2026-07-25 02:07:18'),(3,3,8000.00,20000.00,4,'Culture','Heritage, Food, Shopping','Train','2026-07-25 02:07:18'),(4,4,10000.00,25000.00,5,'Nature','Trekking, Nature, Adventure','Bus','2026-07-25 02:07:18');
/*!40000 ALTER TABLE `user_preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Rahul Sharma','rahul@example.com','TEST_HASH_001','2002-05-15','2026-07-25 02:07:18','2026-07-25 02:07:18'),(2,1,'Priya Patil','priya@example.com','TEST_HASH_002','2001-08-21','2026-07-25 02:07:18','2026-07-25 02:07:18'),(3,1,'Amit Joshi','amit@example.com','TEST_HASH_003','2003-01-10','2026-07-25 02:07:18','2026-07-25 02:07:18'),(4,1,'Sneha Kulkarni','sneha@example.com','TEST_HASH_004','2002-11-30','2026-07-25 02:07:18','2026-07-25 02:07:18'),(5,2,'System Admin','admin@travel.com','TEST_HASH_ADMIN','1990-01-01','2026-07-25 02:07:18','2026-07-25 02:07:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-26  8:52:16
