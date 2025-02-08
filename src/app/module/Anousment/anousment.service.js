import { Announcement } from "./anousment.model.js";

const insertAnnounsmentOnDB = async (payloade) => {
  const result = await Announcement.create(payloade);
  return result;
};

export const AnnouncementService = {
  insertAnnounsmentOnDB,
};
