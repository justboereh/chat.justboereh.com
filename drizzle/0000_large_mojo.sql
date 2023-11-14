CREATE TABLE `messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`text` text NOT NULL,
	`date` datetime NOT NULL,
	CONSTRAINT `messages_id` PRIMARY KEY(`id`)
);
