import express from "express";
import { Request, Response } from "express";
import user from "../schemas/user.schema";

import packages from "../schemas/package.schema";
const getAllUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await user.find({});
    if (!users) {
      return res.status(404).send({
        message: "Users not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "User list is fetched successfully",
      success: true,
      users,
    });
  } catch (e) {
    console.log(e);
  }
};
const get_travelagency = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await user.find({});
    if (!users) {
      return res.status(404).send({
        message: "Users not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "User list is fetched successfully",
      success: true,
      users,
    });
  } catch (e) {
    console.log(e);
  }
};
const addPackages = async (req: Request, res: Response): Promise<any> => {
  console.log("hi");
  const {
    package_name,

    destination,
    package_desc,
    inclusions,

    base_price,
    discount_price,
    final_price,
    exclusions,
  } = req.body;
  console.log(
    package_name,

    destination,
    package_desc,
    inclusions,

    base_price,
    discount_price,
    final_price
  );
  const package_img = req.file?.filename;
  if (
    !package_img ||
    !package_name ||
    !destination ||
    !package_desc ||
    !base_price ||
    !discount_price ||
    !final_price
  ) {
    return res.status(400).send({
      message: "Please fill all the fields in the form",
      success: false,
    });
  }

  const checkPackageExist = await packages.findOne({ package_name });
  if (checkPackageExist) {
    return res.status(400).send({
      message: "The package already exists",
      success: false,
    });
  }
  const inclusion = JSON.parse(inclusions);
  const packageResult = await new packages({
    package_name,
    package_img,
    destination,
    package_desc,
    inclusion,

    base_price,
    discount_price,
    final_price,
    exclusions,
  }).save();

  return res.status(201).send({
    message: "Package added successfully",
    packageResult,
    success: true,
  });
};
const offers = async (req: Request, res: Response) => {
  try {
  } catch (e: unknown) {
    console.log(e);
  }
};

export { getAllUser, addPackages, offers, get_travelagency };
