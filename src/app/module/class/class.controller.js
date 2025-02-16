import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ClassServices } from "./class.service";
import httpStatus from "http-status";

const addClass = catchAsync(async (req, res) => {
  const payloade = req.body;

  const addOnDB = await ClassServices.addClassOnDB(payloade);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "class added successfully",
    data: addOnDB,
  });
});

const getClass = catchAsync(async (req, res) => {
  const classData = await ClassServices.getClassFromDB;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "class proviced successful",
    data: classData,
  });
});

export const ClassController = {
  addClass,
  getClass,
};
