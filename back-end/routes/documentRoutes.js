import express from "express";
import { reportDocument, searchDocuments } from "../controllers/documentController.js";

const router = express.Router();

// Route to report a found document (No Multer needed)
router.post("/report", express.json(), reportDocument);

// Route to search for lost documents
router.get("/search", searchDocuments);

export default router;
