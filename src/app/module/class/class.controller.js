import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const addClass = catchAsync((req, res) => {
  const payloade = req.body;

  const addOnDB = "";
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Announcement added successfully",
    data: addOnDB,
  });
});

export const ClassController = {
  addClass,
};
