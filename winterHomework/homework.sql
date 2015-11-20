/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : homework

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-03-12 23:09:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for information_login
-- ----------------------------
DROP TABLE IF EXISTS `information_login`;
CREATE TABLE `information_login` (
  `homework_id` int(11) NOT NULL AUTO_INCREMENT,
  `homework_name` varchar(255) NOT NULL,
  `homework_password` varchar(255) NOT NULL,
  PRIMARY KEY (`homework_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of information_login
-- ----------------------------
INSERT INTO `information_login` VALUES ('42', 'dasda', 'qerqe');
INSERT INTO `information_login` VALUES ('43', 'wqeqw', 'qweqw');
INSERT INTO `information_login` VALUES ('44', 'aff', '123');
INSERT INTO `information_login` VALUES ('45', 'fda', '123');
INSERT INTO `information_login` VALUES ('46', 'ree', '13');
INSERT INTO `information_login` VALUES ('47', 'ewrfwe', '124');

-- ----------------------------
-- Table structure for information_reg
-- ----------------------------
DROP TABLE IF EXISTS `information_reg`;
CREATE TABLE `information_reg` (
  `homework_id` int(11) NOT NULL AUTO_INCREMENT,
  `homework_name` varchar(255) NOT NULL,
  `homework_password` varchar(255) NOT NULL,
  PRIMARY KEY (`homework_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of information_reg
-- ----------------------------

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `msg_content` varchar(255) NOT NULL,
  `msg_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
