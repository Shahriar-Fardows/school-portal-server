import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StudentService } from "./student.service";

const addStudent = catchAsync(async (req, res) => {
  const payloade = req.body;

  const student = await StudentService.addStudentOnDB(payloade);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "class proviced successful",
    data: student,
  });
});

const getStudent = catchAsync(async (req, res) => {
  const student = await StudentService.getStudentFormDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "class proviced successful",
    data: student,
  });
});
export const StudentController = {
  addStudent,
  getStudent,
};
