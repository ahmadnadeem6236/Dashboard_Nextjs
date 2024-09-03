CREATE TABLE IF NOT EXISTS "Message" (
	"id" serial PRIMARY KEY NOT NULL,
	"msgContent" text NOT NULL,
	"schedule" text
);
