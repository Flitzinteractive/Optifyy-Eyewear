const validator = require("validator");

const validateReviewData = (req) => {
  const { name, emailId, comment, star } = req.body;

  if (!name || !emailId || !comment || !star) {
    throw new Error("All Fields Are Required");
  }
  if (comment.length > 200) {
    throw new Error("Comment Should Not Be More Than 200 Characters");
  }
  if (name.length < 3) {
    throw new Error("Name Should Be At Least 3 Characters Long");
  }
  if (!validator.isEmail(emailId)) {
    throw new Error("Please Enter Valid Email");
  }
  if (star > 5) {
    throw new Error("Star Should Not Be Greater Than 5");
  }
  if (star < 1) {
    throw new Error("Star Should Not Be Less Than 1");
  }
  const ALLOWEDFIELD = ["name", "emailId", "comment", "star"];

  const isAllowedField = Object.keys(req.body).every((field) =>
    ALLOWEDFIELD.includes(field)
  );
  if (!isAllowedField) {
    throw new Error("You Can't Pass This Field");
  }
};
const validateRequestServiceData = (req, res) => {
  const { name, emailId, phone, serviceType } = req.body;
  if (!name || !emailId || !phone || !serviceType) {
    throw new Error("All Fields Are Required");
  }
  if (!validator.isEmail(emailId)) {
    throw new Error("Please Enter Valid Email");
  }
  if (name.length < 3) {
    throw new Error("Name Should Be At Least 3 Characters Long");
  }
  if (!validator.isMobilePhone(phone)) {
    throw new Error("Please Enter Valid Phone Number");
  }
  const ALLOWEDFIELD = ["name", "emailId", "phone", "serviceType"];

  const isAllowedField = Object.keys(req.body).every((field) =>
    ALLOWEDFIELD.includes(field)
  );
  if (!isAllowedField) {
    throw new Error("You Can't Pass This Field");
  }
};
module.exports = { validateReviewData, validateRequestServiceData };
