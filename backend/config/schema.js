import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

export const cinformationTable = pgTable("cinformation", {
  id: serial("id").primaryKey().default(),
  membership: text("membership").notNull(),
  fullName: text("fullName").notNull(),
  email: text("email").unique(),
  mobileNumber: text("mobileNumber").notNull().unique(),
  constituency: text("constituency").notNull(),
  party: text("party").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at"),
});

export const taskTable = pgTable("task", {
  id: serial("id").primaryKey().default(),
  taskName: text("taskName").notNull(),
  selectAssignee: text("selectAssignee").array().notNull(),
  selectPriority: text("selectPriority"),
  selectCategory: text("selectCategory"),
  dueDate: date("dueDate", { mode: "string" }),
  description: text("description"),
  fileName: text("fileName"),
});

export const msgTable = pgTable("Message", {
  id: serial("id").primaryKey().default(),
  msgContent: text("msgContent").notNull(),
  schedule: text("schedule"),
});

// export const postsTable = pgTable("posts_table", {
//   id: serial("id").primaryKey(),
//   title: text("title").notNull(),
//   content: text("content").notNull(),
//   userId: integer("user_id")
//     .notNull()
//     .references(() => usersTable.id, { onDelete: "cascade" }),
//   createdAt: timestamp("created_at").notNull().defaultNow(),
//   updatedAt: timestamp("updated_at")
//     .notNull()
//     .$onUpdate(() => new Date()),
// });
