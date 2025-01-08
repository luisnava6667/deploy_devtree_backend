import { Router } from "express";
import {
  createAccount,
  getUser,
  getUserByHandle,
  login,
  searchByHandle,
  updateProfile,
  uploadImage,
} from "./handlers";
import { body } from "express-validator";
import { handleInpurErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";

const router = Router();

// Auth and register routes
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("El handle no puede ir vacio"),
  body("name").notEmpty().withMessage("El nombre no puede ir vacio"),
  body("email").isEmail().withMessage("Email no valido"),
  body("password")
    .isLength({
      min: 8,
    })
    .withMessage("El password es muy corto, minimo 8 caracteres"),
  handleInpurErrors,
  createAccount,
);

router.post(
  "/auth/login",
  body("email").isEmail().withMessage("Email no valido"),
  body("password").notEmpty().withMessage("El password es obligatorio"),
  handleInpurErrors,
  login,
);

router.get("/user", authenticate, getUser);

router.patch(
  "/user",
  body("handle").notEmpty().withMessage("El handle no puede ir vacio"),
  authenticate,
  updateProfile,
);

router.post("/user/image", authenticate, uploadImage);

router.get("/:handle", getUserByHandle);

router.post(
  "/search",
  body("handle").notEmpty().withMessage("El handle no puede ir vacio"),
  handleInpurErrors,
  searchByHandle,
);

export default router;

