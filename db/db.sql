DROP DATABASE IF EXISTS psicobotdb;
CREATE DATABASE psicobotdb;

USE psicobotdb;
DROP TABLE IF EXISTS bot_links;

CREATE TABLE IF NOT EXISTS bot_links (
	id VARCHAR(20) NOT NULL,
    url VARCHAR(1000) NOT NULL,
    PRIMARY KEY(id)
);
INSERT INTO bot_links values('!test','url hol');
select * from  bot_links;
