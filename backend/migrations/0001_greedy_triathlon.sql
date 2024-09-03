CREATE TABLE IF NOT EXISTS "cinformation" (
	"id" serial PRIMARY KEY NOT NULL,
	"membership" text NOT NULL,
	"fullName" text NOT NULL,
	"email" text,
	"mobileNumber" text NOT NULL,
	"constituency" text NOT NULL,
	"party" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "cinformation_email_unique" UNIQUE("email"),
	CONSTRAINT "cinformation_mobileNumber_unique" UNIQUE("mobileNumber")
);
--> statement-breakpoint
DROP TABLE "posts_table";--> statement-breakpoint
DROP TABLE "users_table";