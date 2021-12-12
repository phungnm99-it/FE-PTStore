var moment = require("moment"); // require
export const timeFormat = (dateStr) => {
  return moment(dateStr).format("D/M/Y").toString();
};

export const timeFormatInputUser = (dateStr) => {
  return moment(dateStr).format("Y-M-DD").toString();
};

export const timeFormatDetail = (dateStr) => {
  return moment(dateStr).format("HH:mm:ss DD-MM-YYYY").toString();
};
