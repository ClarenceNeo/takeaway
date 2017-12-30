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
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (110,4,6,27),(112,1,1,27);
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat`
--

LOCK TABLES `cat` WRITE;
/*!40000 ALTER TABLE `cat` DISABLE KEYS */;
INSERT INTO `cat` VALUES (15,'美食',NULL),(16,'快餐便当',NULL),(17,'特色菜系',NULL),(18,'异国料理',NULL),(19,'小吃夜宵',NULL),(20,'甜品饮品',NULL),(21,'果蔬生鲜',NULL),(22,'商店超市',NULL),(23,'鲜花绿植',NULL),(24,'医药健康',NULL),(25,'早餐',NULL),(26,'午餐',NULL),(27,'下午茶',NULL),(28,'晚餐',NULL),(29,'夜宵',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,27,'1514364180','[{\"title\":\"u9178u8fa3u571fu8c46u4e1d\",\"product_id\":\"1\",\"price\":\"8.88\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"84\"},{\"title\":\"u624bu6495u5305u83dc\",\"product_id\":\"2\",\"price\":\"12\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"83\"},{\"title\":\"u5febu4e50u67e0u6aac\",\"product_id\":\"6\",\"price\":\"20\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"82\"},{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"4\",\"user_id\":\"27\",\"id\":\"80\"}]',NULL),(2,27,'1514364860','[{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"85\"}]',NULL),(3,27,'1514364953','[{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"85\"}]',NULL),(4,27,'1514364974','[{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"85\"}]',NULL),(5,27,'1514365195','[{\"title\":\"u5febu4e50u67e0u6aac\",\"product_id\":\"6\",\"price\":\"20\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"86\"},{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"85\"}]',NULL),(15,27,'1514365918','[{\"title\":\"u9178u8fa3u571fu8c46u4e1d\",\"product_id\":\"1\",\"price\":\"8.88\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"97\"},{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"96\"},{\"title\":\"u9ebbu5a46u8c46u8150\",\"product_id\":\"4\",\"price\":\"12\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"95\"},{\"title\":\"u5febu4e50u67e0u6aac\",\"product_id\":\"6\",\"price\":\"20\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"94\"}]',NULL),(16,27,'1514366495','[{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"98\"}]',NULL),(17,27,'1514366607','[{\"title\":\"u5febu4e50u67e0u6aac\",\"product_id\":\"6\",\"price\":\"20\",\"count\":\"4\",\"user_id\":\"27\",\"id\":\"102\"},{\"title\":\"u9178u8fa3u571fu8c46u4e1d\",\"product_id\":\"1\",\"price\":\"8.88\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"101\"}]',NULL),(18,27,'1514539114','[{\"title\":\"u5febu4e50u67e0u6aac\",\"product_id\":\"6\",\"price\":\"20\",\"count\":\"3\",\"user_id\":\"27\",\"id\":\"106\"},{\"title\":\"u624bu6495u5305u83dc\",\"product_id\":\"2\",\"price\":\"12\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"105\"},{\"title\":\"u9178u8fa3u571fu8c46u4e1d\",\"product_id\":\"1\",\"price\":\"8.88\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"104\"},{\"title\":\"u9ebbu5a46u8c46u8150\",\"product_id\":\"4\",\"price\":\"12\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"103\"}]',NULL),(19,27,'1514539332','[{\"title\":\"u5febu4e50u67e0u6aac\",\"product_id\":\"6\",\"price\":\"20\",\"count\":\"2\",\"user_id\":\"27\",\"id\":\"109\"},{\"title\":\"u9178u8fa3u571fu8c46u4e1d\",\"product_id\":\"1\",\"price\":\"8.88\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"108\"},{\"title\":\"u519cu5bb6u5c0fu7092u8089\",\"product_id\":\"5\",\"price\":\"23\",\"count\":\"1\",\"user_id\":\"27\",\"id\":\"107\"}]',NULL);
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
  `delivery_fee` int(10) unsigned DEFAULT NULL,
  `delivery_time` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'酸辣土豆丝',8.88,'https://fuss10.elemecdn.com/9/aa/d61ac8e6c57373c1ecd4d6ac879f5jpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85',NULL,NULL,NULL,34,5,23),(2,'手撕包菜',12,'https://fuss10.elemecdn.com/9/ed/45173699dffccaf7589ec41ecaa7fjpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85',NULL,NULL,NULL,56,5,45),(4,'麻婆豆腐',12,'https://fuss10.elemecdn.com/e/53/3bcbafc27f4f11e59c0caa3d84ac9jpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85',NULL,NULL,NULL,78,8,36),(5,'农家小炒肉',23,'https://fuss10.elemecdn.com/5/3f/afda56dc4e7e2afcbfccb3eb13f5djpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85',NULL,NULL,NULL,45,5,23),(6,'快乐柠檬',20,'https://fuss10.elemecdn.com/0/8d/d847f56880bab0af0b927c8356f8epng.png?imageMogr2/thumbnail/140x140',NULL,NULL,NULL,124,8,25);
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
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

-- Dump completed on 2017-12-30 10:32:50
