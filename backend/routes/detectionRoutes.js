const express = require("express");
const router = express.Router();
const multer = require("multer");
const detectionController = require("../controllers/detectionController");

// Multer pour stocker les fichiers uploadés dans /uploads
const upload = multer({ dest: "uploads/" });

// POST /api/detection → upload d’une image
router.post("/", upload.single("image"), detectionController.analyzeImage);

module.exports = router;
