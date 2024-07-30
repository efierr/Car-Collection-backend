DROP DATABASE IF EXISTS cars_dev_fd1o;
CREATE DATABASE cars_dev_fd1o;

\c cars_dev_fd1o;

CREATE TABLE Cars (
    id SERIAL PRIMARY KEY,
    make VARCHAR(50),
    model VARCHAR(50),
    year INT,
    color VARCHAR(20),
    price DECIMAL(10, 2),
    is_favorite BOOLEAN,
    img_url TEXT
);
