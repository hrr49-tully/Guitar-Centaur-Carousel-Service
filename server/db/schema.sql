DROP DATABASE IF EXISTS centaur;

CREATE DATABASE centaur;

USE centaur;

CREATE TABLE items (
  id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
  itemNum INT UNIQUE,
  POSNum INT UNIQUE,
  avgScore INT,
  reviewCount INT,
  title VARCHAR(255)
);

CREATE TABLE photos (
  id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
  itemID INT,
  photoDescription VARCHAR(255),
  srcURL VARCHAR(255),
  FOREIGN KEY (itemID) REFERENCES items(id)
);

-- To create: from root of repo, run this script:
--  mysql -u root < server/db/schema.sql
