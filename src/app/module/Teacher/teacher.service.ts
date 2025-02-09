import { Teacher } from "./teacher.model.js";

const addNewTeacherOnDB = async (payloade) => {
  const result = await Teacher.create(payloade);
  return result;
};

export const TeachreServices = {
  addNewTeacherOnDB,
};
