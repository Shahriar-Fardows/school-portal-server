// import req from "express/lib/request.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AnnouncementService } from "./anousment.service.js";
import httpStatus from "http-status";

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

const getAnnounsment = catchAsync(async (req, res) => {
  const data = await AnnouncementService.getAnnounsmentFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Announcement proded",
    data: data,
  });
});

export const AnnouncementController = {
  insertAnnounsment,
  getAnnounsment,
};
