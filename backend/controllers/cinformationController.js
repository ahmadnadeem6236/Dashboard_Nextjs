import { Postgresdb } from "../config/PostgresDB.js";
import express from "express";
import { cinformationTable } from "../config/schema.js";
import { asc, desc } from "drizzle-orm";

export async function addCinformation(req, res) {
  try {
    const data = req.body;
    const result = await Postgresdb.insert(cinformationTable)
      .values(data)
      .returning();
    res.status(201).json({ result });
  } catch (e) {
    console.error(e);
  }
}

export async function getUser(req, res) {
  try {
    const user = await Postgresdb.select()
      .from(cinformationTable)
      .orderBy(desc(cinformationTable.id))
      .limit(1);
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
  }
}
