const captainController = require("../controller/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6 }),
        body("fullname.firstname").isLength({ min: 3 }),
        body("fullname.lastname").isLength({ min: 3 }),
        body("vehicle.color").isLength({ min: 3 }),
        body("vehicle.plate").isLength({ min: 3 }),
        body("vehicle.capacity").isInt({ min: 1 }),
        body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]),
    ],
    captainController.registerCaptain
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    ],
    captainController.loginCaptain
);

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);
router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
