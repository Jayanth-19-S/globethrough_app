import { Request, Response } from "express";
import user from "../schemas/user.schema";
//update user info
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await user.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (e: unknown) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
//get user controller
const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userResult = await user.findById(userId);
    if (!userResult) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (e: unknown) {
    console.log("error in get user controller ");
    console.log(e);
  }
};

export { updateUser, getUser };
