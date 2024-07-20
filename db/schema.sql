DROP DATABASE IF EXISTS cars_dev;
CREATE DATABASE cars_dev;

\c cars_dev;

CREATE TABLE Cars (
    CarID INT PRIMARY KEY AUTO_INCREMENT,
    Make VARCHAR(50),
    Model VARCHAR(50),
    Year INT,
    Color VARCHAR(20),
    Price DECIMAL(10, 2),
    IsFavorite BOOLEAN
);
