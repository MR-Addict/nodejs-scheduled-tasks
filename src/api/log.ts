import readLastLines from "read-last-lines";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const file = "log/" + (req.query.file || "glados") + ".txt";
    const lines = Number(req.query.lines) || 1;
    const result = await readLastLines.read(file, lines);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error occurred!");
  }
});

export default router;
