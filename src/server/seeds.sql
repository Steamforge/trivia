USE triviaDB;
INSERT INTO Games (accessCode, gameData, createdAt, updatedAt) values ('abc123', '{"key": "value"}', NOW(), NOW());

INSERT INTO Players (playerName, createdAt, updatedAt) VALUES ('Aurthur Dent', NOW(), NOW());
