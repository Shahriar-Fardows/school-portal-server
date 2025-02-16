import { Student } from "./student.model";

const addStudentOnDB = async (payloade) => {
  const add = await Student.create(payloade);

  return add;
};

const getStudentFormDB = async () => {
  const studnet = await Student.find();
  return studnet;
};

export const StudentService = {
  addStudentOnDB,
  getStudentFormDB,
};
