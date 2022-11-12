import { apiHandler } from "../../utils/api/api-handler";
import { dbConnect, getDocuments, insertDocument } from "../../data/mongo";
import { initMiddleware } from "../../utils/functions";
import validateMiddleware from "../../middleware/validate-middleware";
import { check, validationResult } from "express-validator";

export default apiHandler({
  get: getAll,
  post: create,
});

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("email")
        .notEmpty()
        .withMessage("please enter your email address")
        .isEmail()
        .withMessage("Please enter a valid email address"),

      check("name")
        .notEmpty()
        .withMessage("Please enter your name")
        .isAlpha("en-US", { ignore: " -" })
        .withMessage(
          "Names consist of alphabetic characters, spaces  or dashes only."
        ),

      check("message").notEmpty().withMessage("Please enter your message"),
    ],
    validationResult
  )
);

async function getAll(req, res) {
  const client = await dbConnect();

  const response = await getDocuments(client, "messages");

  console.log(response);
  res.status(200).json({
    status: "success",
    message: response,
  });
}

async function create(req, res) {
  await validateBody(req, res);

  //* validation passed
  const client = await dbConnect();

  //* connection was successful
  const { email, name, message } = req.body;

  const response = await insertDocument(client, "messages", {
    email,
    name,
    message,
  });

  res.status(201).json({
    status: "success",
    message: {
      id: response.insertedId,
      email,
      name,
      message,
    },
  });
}
