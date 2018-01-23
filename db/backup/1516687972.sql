-- MySQL dump 10.16  Distrib 10.2.12-MariaDB, for osx10.13 (x86_64)
--
-- Host: localhost    Database: takeaway
-- ------------------------------------------------------
-- Server version	10.2.12-MariaDB

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
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat`
--

LOCK TABLES `cat` WRITE;
/*!40000 ALTER TABLE `cat` DISABLE KEYS */;
INSERT INTO `cat` VALUES (30,'特色',NULL),(31,'主食',NULL),(32,'荤菜小炒',NULL),(33,'凉菜类',NULL),(34,'面食',NULL);
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
  `status` varchar(64) DEFAULT 'created',
  PRIMARY KEY (`id`),
  KEY `fk_order_user_id` (`user_id`),
  CONSTRAINT `fk_order_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (34,27,'57934','[{\"title\":\"炸馍片\",\"product_id\":16,\"price\":10,\"count\":3,\"user_id\":27,\"id\":170},{\"title\":\"米饭\",\"product_id\":15,\"price\":2,\"count\":1,\"user_id\":27,\"id\":169},{\"title\":\"红糖糍粑\",\"product_id\":24,\"price\":14,\"count\":1,\"user_id\":27,\"id\":168}]','{\"product\":[{\"id\":16,\"title\":\"炸馍片\",\"price\":10,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":465,\"cat_id\":31},{\"id\":15,\"title\":\"米饭\",\"price\":2,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":2365,\"cat_id\":31},{\"id\":24,\"title\":\"红糖糍粑\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":34,\"cat_id\":30}]}','closed'),(35,27,'86135','[{\"title\":\"鱼香肉丝\",\"product_id\":22,\"price\":24,\"count\":1,\"user_id\":27,\"id\":173},{\"title\":\"水煮肉片\",\"product_id\":23,\"price\":28,\"count\":1,\"user_id\":27,\"id\":172},{\"title\":\"回锅肉\",\"product_id\":20,\"price\":39,\"count\":3,\"user_id\":27,\"id\":171}]','{\"product\":[{\"id\":22,\"title\":\"鱼香肉丝\",\"price\":24,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":39,\"cat_id\":32},{\"id\":23,\"title\":\"水煮肉片\",\"price\":28,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":42,\"cat_id\":32},{\"id\":20,\"title\":\"回锅肉\",\"price\":39,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":76,\"cat_id\":32}]}','created'),(38,27,'71536','[{\"title\":\"炸馍片\",\"product_id\":16,\"price\":10,\"count\":1,\"user_id\":27,\"id\":190},{\"title\":\"米饭\",\"product_id\":15,\"price\":2,\"count\":1,\"user_id\":27,\"id\":189},{\"title\":\"红糖糍粑\",\"product_id\":24,\"price\":14,\"count\":1,\"user_id\":27,\"id\":188}]','{\"product\":[{\"id\":16,\"title\":\"炸馍片\",\"price\":10,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":465,\"cat_id\":31},{\"id\":15,\"title\":\"米饭\",\"price\":2,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":2365,\"cat_id\":31},{\"id\":24,\"title\":\"红糖糍粑\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":34,\"cat_id\":30}]}','received'),(40,26,'81240','[{\"title\":\"蛋炒饭\",\"product_id\":17,\"price\":14,\"count\":1,\"user_id\":26,\"id\":195},{\"title\":\"炸馍片\",\"product_id\":16,\"price\":10,\"count\":1,\"user_id\":26,\"id\":194},{\"title\":\"番茄豆花鱼\",\"product_id\":25,\"price\":30,\"count\":1,\"user_id\":26,\"id\":193}]','{\"product\":[{\"id\":17,\"title\":\"蛋炒饭\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":557,\"cat_id\":31},{\"id\":16,\"title\":\"炸馍片\",\"price\":10,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":465,\"cat_id\":31},{\"id\":25,\"title\":\"番茄豆花鱼\",\"price\":30,\"cover_path\":\"5a507f1b12a11.541.jpg\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":35,\"cat_id\":30}]}','sending'),(41,27,'46641','[{\"title\":\"尖椒炒肉\",\"product_id\":19,\"price\":24,\"count\":3,\"user_id\":27,\"id\":198},{\"title\":\"红糖糍粑\",\"product_id\":24,\"price\":14,\"count\":2,\"user_id\":27,\"id\":197},{\"title\":\"番茄豆花鱼\",\"product_id\":25,\"price\":30,\"count\":1,\"user_id\":27,\"id\":196}]','{\"product\":[{\"id\":19,\"title\":\"尖椒炒肉\",\"price\":24,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":37,\"cat_id\":32},{\"id\":24,\"title\":\"红糖糍粑\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":34,\"cat_id\":30},{\"id\":25,\"title\":\"番茄豆花鱼\",\"price\":30,\"cover_path\":\"5a507f1b12a11.541.jpg\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":35,\"cat_id\":30}]}','created'),(42,27,'84242','[{\"title\":\"番茄豆花鱼\",\"product_id\":25,\"price\":30,\"count\":2,\"user_id\":27,\"id\":202},{\"title\":\"蛋炒饭\",\"product_id\":17,\"price\":14,\"count\":4,\"user_id\":27,\"id\":201},{\"title\":\"炸馍片\",\"product_id\":16,\"price\":10,\"count\":2,\"user_id\":27,\"id\":200}]','{\"product\":[{\"id\":25,\"title\":\"番茄豆花鱼\",\"price\":30,\"cover_path\":\"5a51dd80a4a57.350.jpg\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":35,\"cat_id\":30},{\"id\":17,\"title\":\"蛋炒饭\",\"price\":14,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":557,\"cat_id\":31},{\"id\":16,\"title\":\"炸馍片\",\"price\":10,\"cover_path\":\"5a4af1c22a677.293.png\",\"prop\":null,\"create_at\":null,\"update_at\":null,\"sales\":465,\"cat_id\":31}]}','created');
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (9,'洋葱木耳',15,'5a4af1c22a677.293.png',NULL,NULL,NULL,29,33),(10,'蒜泥黄瓜',15,'5a4af1c22a677.293.png',NULL,NULL,NULL,36,33),(11,'油炸花生米',16,'5a4af1c22a677.293.png',NULL,NULL,NULL,34,33),(12,'西芹腐竹',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,56,33),(13,'小葱拌豆腐',10,'5a4af1c22a677.293.png',NULL,NULL,NULL,44,33),(14,'炝莲菜',18,'5a4af1c22a677.293.png',NULL,NULL,NULL,33,33),(15,'米饭',2,'5a4af1c22a677.293.png',NULL,NULL,NULL,2365,31),(16,'炸馍片',10,'5a4af1c22a677.293.png',NULL,NULL,NULL,465,31),(17,'蛋炒饭',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,557,31),(18,'老干妈腊肉炒饭',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,34,31),(19,'尖椒炒肉',24,'5a4af1c22a677.293.png',NULL,NULL,NULL,37,32),(20,'回锅肉',39,'5a4af1c22a677.293.png',NULL,NULL,NULL,76,32),(21,'西芹腊肉',24,'5a4af1c22a677.293.png',NULL,NULL,NULL,55,32),(22,'鱼香肉丝',24,'5a4af1c22a677.293.png',NULL,NULL,NULL,39,32),(23,'水煮肉片',28,'5a4af1c22a677.293.png',NULL,NULL,NULL,42,32),(24,'红糖糍粑',14,'5a4af1c22a677.293.png',NULL,NULL,NULL,34,30),(25,'番茄豆花鱼',30,'5a51dd80a4a57.350.jpg',NULL,NULL,NULL,35,30),(26,'老成都酸辣粉',13,'5a541bf14571b.309.jpg',NULL,NULL,NULL,12,34),(27,'重庆小面',12,'5a541c6cf2ae2.814.jpg',NULL,NULL,NULL,25,34),(28,'蓉李记担担面',14,'5a541cca0b5ec.928.jpg',NULL,NULL,NULL,56,34),(29,'番茄煎蛋面',10,'5a541d120c374.735.jpg',NULL,NULL,NULL,245,34);
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (26,'user2','58fef1c326e5170f9d33d66d7d0c4023',NULL,NULL,NULL,'user'),(27,'user3','58fef1c326e5170f9d33d66d7d0c4023',NULL,NULL,NULL,'admin');
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

-- Dump completed on 2018-01-23 14:12:54
