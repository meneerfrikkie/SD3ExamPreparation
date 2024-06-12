-- Create Clubs table
CREATE TABLE clubs (
    club_id INT AUTO_INCREMENT PRIMARY KEY,
    club_name VARCHAR(100) NOT NULL
);

-- Create Races table
CREATE TABLE races (
    race_id INT AUTO_INCREMENT PRIMARY KEY,
    race_name VARCHAR(100) NOT NULL,
    distance DECIMAL(5,2) NOT NULL,
    race_date DATE NOT NULL,
    num_participants INT
);

-- Create Runners table
CREATE TABLE runners (
    runner_id INT AUTO_INCREMENT PRIMARY KEY,
    initial CHAR(1) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    gender CHAR(1) NOT NULL,
    age INT,
    club_id INT,
    FOREIGN KEY (club_id) REFERENCES clubs(club_id)
);

-- Create Results table
CREATE TABLE results (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    race_id INT,
    runner_id INT,
    position INT NOT NULL,
    time_taken TIME NOT NULL,
    FOREIGN KEY (race_id) REFERENCES races(race_id),
    FOREIGN KEY (runner_id) REFERENCES runners(runner_id)
);
