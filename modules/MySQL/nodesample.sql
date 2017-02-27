-- MySQL dump 10.13  Distrib 5.6.12, for Win64 (x86_64)
--
-- Host: localhost    Database: nodesample
-- ------------------------------------------------------
-- Server version	5.6.12

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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `code` varchar(45) DEFAULT NULL,
  `createDate` varchar(45) DEFAULT NULL,
  `owner` varchar(45) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `bookcol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'ACADEMY DINOSAUR','1','Sat, 19 Nov 2016 03:59:16 GMT',NULL,NULL,NULL),(2,'123','321','Sun, 20 Nov 2016 03:53:52 GMT',NULL,NULL,NULL),(3,'666','666','Sun, 20 Nov 2016 04:21:25 GMT',NULL,NULL,NULL),(4,'222','333','Sun, 20 Nov 2016 04:22:31 GMT',NULL,NULL,NULL),(5,'555','555','Sun, 20 Nov 2016 04:23:44 GMT',NULL,NULL,NULL),(6,'gogogo','123456sdf','Sun, 20 Nov 2016 04:25:31 GMT',NULL,NULL,NULL),(7,'gogogo','1234565','Sun, 20 Nov 2016 04:26:56 GMT',NULL,NULL,NULL),(8,'123','123123','Sun, 20 Nov 2016 04:29:05 GMT',NULL,NULL,NULL),(9,'alan1book','1234sada','Sun, 20 Nov 2016 04:30:05 GMT','alan1',5,NULL),(10,'够够够','123','Wed, 23 Nov 2016 13:47:49 GMT','alan1',5,NULL),(11,'够够够','1233','Wed, 23 Nov 2016 13:47:51 GMT','alan1',5,NULL),(12,'够够够','12334','Wed, 23 Nov 2016 13:47:53 GMT','alan1',5,NULL),(13,'够够够2','12334','Wed, 23 Nov 2016 13:47:55 GMT','alan1',5,NULL),(14,'nice','12334','Wed, 23 Nov 2016 13:47:59 GMT','alan1',5,NULL),(15,'nicea','12334','Wed, 23 Nov 2016 13:48:02 GMT','alan1',5,NULL),(16,'123','123','Wed, 23 Nov 2016 14:17:19 GMT','alan1',5,NULL),(17,'123','123','Wed, 23 Nov 2016 14:17:20 GMT','alan1',5,NULL),(18,'123','123','Wed, 23 Nov 2016 14:17:22 GMT','alan1',5,NULL),(19,'123','123','Wed, 23 Nov 2016 14:17:22 GMT','alan1',5,NULL),(20,'123','123','Wed, 23 Nov 2016 14:17:22 GMT','alan1',5,NULL),(21,'123','123','Wed, 23 Nov 2016 14:17:23 GMT','alan1',5,NULL),(22,'123','123','Wed, 23 Nov 2016 14:17:23 GMT','alan1',5,NULL),(23,'123','123','Wed, 23 Nov 2016 14:17:23 GMT','alan1',5,NULL),(24,'123','123','Wed, 23 Nov 2016 14:17:23 GMT','alan1',5,NULL),(25,'123','123','Wed, 23 Nov 2016 14:17:24 GMT','alan1',5,NULL),(26,'123','123','Wed, 23 Nov 2016 14:17:24 GMT','alan1',5,NULL),(27,'123','123','Wed, 23 Nov 2016 14:17:24 GMT','alan1',5,NULL),(28,'123','123','Wed, 23 Nov 2016 14:17:25 GMT','alan1',5,NULL),(29,'123','123','Wed, 23 Nov 2016 14:17:25 GMT','alan1',5,NULL),(30,'123','123','Wed, 23 Nov 2016 14:17:25 GMT','alan1',5,NULL),(31,'123','123','Wed, 23 Nov 2016 14:17:26 GMT','alan1',5,NULL),(32,'123','123','Wed, 23 Nov 2016 14:17:26 GMT','alan1',5,NULL),(33,'123','123','Wed, 23 Nov 2016 14:17:26 GMT','alan1',5,NULL),(34,'123','123','Wed, 23 Nov 2016 14:17:26 GMT','alan1',5,NULL),(35,'gogogo','123123','Wed, 23 Nov 2016 14:17:48 GMT','alan1',5,NULL),(36,'gogogo','123123','Wed, 23 Nov 2016 14:17:50 GMT','alan1',5,NULL),(37,'gogogo','123123','Wed, 23 Nov 2016 14:17:50 GMT','alan1',5,NULL),(38,'gogogo','123123','Wed, 23 Nov 2016 14:17:50 GMT','alan1',5,NULL),(39,'gogogo','123123','Wed, 23 Nov 2016 14:17:50 GMT','alan1',5,NULL);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(64) NOT NULL COMMENT '用户名',
  `userpass` varchar(64) NOT NULL COMMENT '用户密码',
  `createDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'alan','123456',NULL),(2,'deng','123456',NULL),(3,'we','123456',NULL),(4,'we001','we001',NULL),(5,'alan1','e10adc3949ba59abbe56e057f20f883e',NULL),(6,'kikiyou','e10adc3949ba59abbe56e057f20f883e','Mon, 31 Oct 2016 13:26:22 GMT');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-27 20:53:35
