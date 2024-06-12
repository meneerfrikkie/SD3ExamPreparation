-- a) Create a table called ElectionResults with the following columns:
CREATE TABLE ElectionResults (
    Province VARCHAR(255),
    WardName VARCHAR(255),
    WardNumber INT,
    Party VARCHAR(255),
    ProvincialPartyLeader VARCHAR(255),
    NumberOfVotes INT
);

-- b) SQL code to find how many votes the Pastafarian Party won in the Linguini ward in Gauteng:
SELECT NumberOfVotes
FROM ElectionResults
WHERE Party = 'Pastafarian Party' AND WardName = 'Linguini' AND Province = 'Gauteng';

-- c)  SQL code to find how many votes the Pastafarian Party won across the whole country:
SELECT SUM(NumberOfVotes) AS TotalVotes
FROM ElectionResults
WHERE Party = 'Pastafarian Party';

-- d) SQL code to find the number of wards where the Pastafarian Party won more votes than the National Pasta Front:
SELECT COUNT(DISTINCT WardName) AS WardsWithMoreVotes
FROM ElectionResults AS ER1
WHERE Party = 'Pastafarian Party'
AND NumberOfVotes > (
    SELECT NumberOfVotes
    FROM ElectionResults AS ER2
    WHERE ER2.Party = 'National Pasta Front'
    AND ER1.WardName = ER2.WardName
);

-- f) Declarations necessary to store this data in the Third Normal Form (3NF):
CREATE TABLE Province (
    ProvinceID INT PRIMARY KEY,
    ProvinceName VARCHAR(255)
);

CREATE TABLE Ward (
    WardID INT PRIMARY KEY,
    WardName VARCHAR(255),
    WardNumber INT,
    ProvinceID INT,
    FOREIGN KEY (ProvinceID) REFERENCES Province(ProvinceID)
);

CREATE TABLE Party (
    PartyID INT PRIMARY KEY,
    PartyName VARCHAR(255),
    ProvincialPartyLeader VARCHAR(255)
);

CREATE TABLE ElectionResults (
    ElectionResultID INT PRIMARY KEY,
    WardID INT,
    PartyID INT,
    NumberOfVotes INT,
    FOREIGN KEY (WardID) REFERENCES Ward(WardID),
    FOREIGN KEY (PartyID) REFERENCES Party(PartyID)
);



