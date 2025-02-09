import { Teacher } from "./teacher.model.js";

const addNewTeacherOnDB = async (payloade) => {
  const result = await Teacher.create(payloade);
  return result;
};

const getAllTeacherFromDB = async () => {
  const teachers = await Teacher.find();
  return teachers;
};
export const TeachreServices = {
  addNewTeacherOnDB,
  getAllTeacherFromDB,
};
