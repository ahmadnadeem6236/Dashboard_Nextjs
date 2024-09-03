CREATE TABLE IF NOT EXISTS "task" (
	"id" serial PRIMARY KEY NOT NULL,
	"taskName" text NOT NULL,
	"selectAssignee" text[] DEFAULT { NOT NULL,
	"selectPriority" text,
	"selectCategory" text,
	"dueDate" timestamp,
	"description" text,
	"fileName" text
);
