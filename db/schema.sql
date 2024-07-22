DROP DATABASE IF EXISTS cars_dev;
CREATE DATABASE cars_dev;

\c cars_dev;

CREATE TABLE Cars (
    id SERIAL PRIMARY KEY,
    make VARCHAR(50),
    model VARCHAR(50),
    year INT,
    color VARCHAR(20),
    price DECIMAL(10, 2),
    is_favorite BOOLEAN
);
