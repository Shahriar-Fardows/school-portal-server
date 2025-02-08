import { Announcement } from "./anousment.model.js";

const insertAnnounsmentOnDB = async (payloade) => {
  const result = await Announcement.create(payloade);
  return result;
};

const getAnnounsmentFromDB = async () => {
  const result = await Announcement.find();
  return result;
};
export const AnnouncementService = {
  insertAnnounsmentOnDB,
  getAnnounsmentFromDB,
};
