import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const body = req.body;
  console.log("esto vale body ", body);
  res.status(201).json({
    message: "created",
    data: { body },
  });
};
