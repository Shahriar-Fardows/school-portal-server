import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AnnouncementService } from "./anousment.service.js";

const insertAnnounsment = catchAsync(async (req, res) => {
  const payloade = req.body;

  const addOnDB = await AnnouncementService.insertAnnounsmentOnDB(payloade);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Announcement added successfully",
    data: addOnDB,
  });
});

export const AnnouncementController = {
  insertAnnounsment,
};
