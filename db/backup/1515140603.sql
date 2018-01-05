-- MySQL dump 10.16  Distrib 10.2.10-MariaDB, for osx10.13 (x86_64)
--
-- Host: localhost    Database: takeaway
-- ------------------------------------------------------
-- Server version	10.2.10-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `count` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`product_id`),
  KEY `fk_cart_product_id` (`product_id`),
  CONSTRAINT `fk_cart_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (188,24,1,27),(189,15,1,27),(190,16,1,27);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat`
--

DROP TABLE IF EXISTS `cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `cover_path` varchar(2084) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat`
--

LOCK TABLES `cat` WRITE;
/*!40000 ALTER TABLE `cat` DISABLE KEYS */;
INSERT INTO `cat` VALUES (30,'特色',NULL),(31,'主食',NULL),(32,'荤菜小炒',NULL),(33,'凉菜类',NULL);
/*!40000 ALTER TABLE `cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `order_num` varchar(64) NOT NULL COMMENT '如：A-8788627842',
  `product` text DEFAULT NULL COMMENT '[{id: 1, count: 2},{id: 2, count: 5}]',
  `snapshot` text DEFAULT NULL COMMENT '{product: [{id: 1, cover_url: "...", price: 5}], user: {id: 1, username: "whh"}}',
  PRIMARY KEY (`id`),
  KEY `fk_order_user_id` (`user_id`),
  CONSTRAINT `fk_order_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (33,27,'66333','[{\"title\":\"番茄豆花鱼\",\"product_id\":25,\"price\":29,\"count\":1,\"user_id\":27,\"id\":167}]','{\"product\":[{\"id\":25,\"title\":\"番茄豆花鱼\",\"price\":29,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":35,\"cat_id\":30}]}'),(34,27,'57934','[{\"title\":\"炸馍片\",\"product_id\":16,\"price\":10,\"count\":3,\"user_id\":27,\"id\":170},{\"title\":\"米饭\",\"product_id\":15,\"price\":2,\"count\":1,\"user_id\":27,\"id\":169},{\"title\":\"红糖糍粑\",\"product_id\":24,\"price\":14,\"count\":1,\"user_id\":27,\"id\":168}]','{\"product\":[{\"id\":16,\"title\":\"炸馍片\",\"price\":10,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":465,\"cat_id\":31},{\"id\":15,\"title\":\"米饭\",\"price\":2,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":2365,\"cat_id\":31},{\"id\":24,\"title\":\"红糖糍粑\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":34,\"cat_id\":30}]}'),(35,27,'86135','[{\"title\":\"鱼香肉丝\",\"product_id\":22,\"price\":24,\"count\":1,\"user_id\":27,\"id\":173},{\"title\":\"水煮肉片\",\"product_id\":23,\"price\":28,\"count\":1,\"user_id\":27,\"id\":172},{\"title\":\"回锅肉\",\"product_id\":20,\"price\":39,\"count\":3,\"user_id\":27,\"id\":171}]','{\"product\":[{\"id\":22,\"title\":\"鱼香肉丝\",\"price\":24,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":39,\"cat_id\":32},{\"id\":23,\"title\":\"水煮肉片\",\"price\":28,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":42,\"cat_id\":32},{\"id\":20,\"title\":\"回锅肉\",\"price\":39,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":76,\"cat_id\":32}]}'),(36,26,'76336','[{\"title\":\"炸馍片\",\"product_id\":16,\"price\":10,\"count\":1,\"user_id\":26,\"id\":175},{\"title\":\"番茄豆花鱼\",\"product_id\":25,\"price\":29,\"count\":1,\"user_id\":26,\"id\":174}]','{\"product\":[{\"id\":16,\"title\":\"炸馍片\",\"price\":10,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":465,\"cat_id\":31},{\"id\":25,\"title\":\"番茄豆花鱼\",\"price\":29,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":35,\"cat_id\":30}]}'),(37,26,'21037','[{\"title\":\"老干妈腊肉炒饭\",\"product_id\":18,\"price\":14,\"count\":1,\"user_id\":26,\"id\":179},{\"title\":\"回锅肉\",\"product_id\":20,\"price\":39,\"count\":1,\"user_id\":26,\"id\":178},{\"title\":\"米饭\",\"product_id\":15,\"price\":2,\"count\":3,\"user_id\":26,\"id\":176}]','{\"product\":[{\"id\":18,\"title\":\"老干妈腊肉炒饭\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":34,\"cat_id\":31},{\"id\":20,\"title\":\"回锅肉\",\"price\":39,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":76,\"cat_id\":32},{\"id\":15,\"title\":\"米饭\",\"price\":2,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":2365,\"cat_id\":31}]}');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `price` double unsigned NOT NULL,
  `cover_path` varchar(2084) DEFAULT NULL,
  `prop` text DEFAULT NULL,
  `create_at` int(10) unsigned DEFAULT NULL,
  `update_at` int(10) unsigned DEFAULT NULL,
  `sales` int(10) unsigned DEFAULT NULL,
  `cat_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cat` (`cat_id`),
  CONSTRAINT `fk_cat` FOREIGN KEY (`cat_id`) REFERENCES `cat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (9,'洋葱木耳',15,'5a4af1c22a677.293.png',NULL,NULL,NULL,29,33),(10,'蒜泥黄瓜',15,'5a4af1c22a677.293.png',NULL,NULL,NULL,36,33),(11,'油炸花生米',16,'5a4af1c22a677.293.png',NULL,NULL,NULL,34,33),(12,'西芹腐竹',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,56,33),(13,'小葱拌豆腐',10,'5a4af1c22a677.293.png',NULL,NULL,NULL,44,33),(14,'炝莲菜',18,'5a4af1c22a677.293.png',NULL,NULL,NULL,33,33),(15,'米饭',2,'5a4af1c22a677.293.png',NULL,NULL,NULL,2365,31),(16,'炸馍片',10,'5a4af1c22a677.293.png',NULL,NULL,NULL,465,31),(17,'蛋炒饭',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,557,31),(18,'老干妈腊肉炒饭',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,34,31),(19,'尖椒炒肉',24,'5a4af1c22a677.293.png',NULL,NULL,NULL,37,32),(20,'回锅肉',39,'5a4af1c22a677.293.png',NULL,NULL,NULL,76,32),(21,'西芹腊肉',24,'5a4af1c22a677.293.png',NULL,NULL,NULL,55,32),(22,'鱼香肉丝',24,'5a4af1c22a677.293.png',NULL,NULL,NULL,39,32),(23,'水煮肉片',28,'5a4af1c22a677.293.png',NULL,NULL,NULL,42,32),(24,'红糖糍粑',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,34,30),(25,'番茄豆花鱼',29,'5a4af1c22a677.293.png',NULL,NULL,NULL,35,30);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(24) NOT NULL,
  `password` varchar(128) NOT NULL,
  `location` text DEFAULT NULL COMMENT '{location_id: 1, detail: "樱花园3单元"}',
  `create_at` int(10) unsigned DEFAULT NULL,
  `update_at` int(10) unsigned DEFAULT NULL,
  `permission` varchar(24) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (26,'user2','3298c528f03f541ca4b41a3a4ba70aac',NULL,NULL,NULL,'user'),(27,'user3','3298c528f03f541ca4b41a3a4ba70aac',NULL,NULL,NULL,'admin'),(28,'user4','3298c528f03f541ca4b41a3a4ba70aac',NULL,NULL,NULL,'user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-05 16:23:24
