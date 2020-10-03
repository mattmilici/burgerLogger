CREATE DATABASE burgers_db;
USE seinfeld;

-- Create the table actors.
CREATE TABLE burgers
(
    id int
    AUTO_INCREMENT,
  burger_name varchar
    (30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY
    (id)
);

    -- Insert a set of records.
    INSERT INTO burgers
        (burger_name, devoured)
    VALUES
        ("cheeseburger", true);
    INSERT INTO burgers
        (burger_name, devoured)
    VALUES
        ("hamburger", false);
    INSERT INTO burgers
        (burger_name, devoured)
    VALUES
        ("bacon burger", true);

