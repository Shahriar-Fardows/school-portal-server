import { Class } from "./class.model";

const addClassOnDB = async (payloade) => {
  const add = await Class.create(payloade);
  return add;
};

const getClassFromDB = async () => {
  const classData = await Class.find();

  return classData;
};

export const ClassServices = {
  addClassOnDB,
  getClassFromDB,
};
