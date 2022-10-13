import { Request, Response } from "express";
import { createUserStore } from "./users-store";

export const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await createUserStore(body);
    res.status(201).json({
      message: "created",
      data,
    });
  } catch (error) {
    console.error("[createUserError]: ", error);
  }
};
