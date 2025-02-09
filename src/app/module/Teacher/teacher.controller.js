import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { TeachreServices } from "./teacher.service.js";
import httpStatus from "http-status";

const addNewTeacher = catchAsync(async (req, res) => {
  const payloade = req.body;

  const addTeacher = await TeachreServices.addNewTeacherOnDB(payloade);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Teacher added successfully",
    data: addTeacher,
  });
});

export const TeacherController = {
  addNewTeacher,
};
