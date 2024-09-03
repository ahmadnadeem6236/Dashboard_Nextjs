import axios from "axios";
import { Postgresdb } from "../config/PostgresDB.js";
import { msgTable } from "../config/schema.js";

export const sendMessage = async (res, req) => {
  try {
    const key = "hJsT2Y7kmsrCJDOzdm5UeobfKLlY2EiQ0gbDrvOBFg4lUVrlBTvcRxpED3Zf";
    const url = "https://www.fast2sms.com/dev/bulkV2";
    const result = await axios.get(url, {
      params: {
        authorization: `${key}`,
        route: "dlt",
        sender_id: "POLYTS",
        message: "172768",
        variables_values: "",
        flash: "0",
        numbers: "9205526460",
      },
    });
    res.status(201).json({ result });
  } catch (error) {
    console.error("Error sending Message: ", error);
  }
};

export async function msgDb(req, res) {
  try {
    const { message } = req.body;
    const result = await Postgresdb.insert(msgTable)
      .values({ msgContent: message })
      .returning();
    res.status(201).json({ result });
  } catch (e) {
    console.error(e);
  }
}
