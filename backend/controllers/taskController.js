import { Postgresdb } from "../config/PostgresDB.js";
import { taskTable } from "../config/schema.js";

export async function addTask(req, res) {
  try {
    const data = req.body;
    const result = await Postgresdb.insert(taskTable).values(data).returning();
    res.status(201).json({ result });
  } catch (e) {
    console.error(e);
  }
}

export async function getTask(req, res) {
  try {
    const data = await Postgresdb.select().from(taskTable);
    res.status(201).json({ data });
  } catch (e) {
    console.log(e);
  }
}
