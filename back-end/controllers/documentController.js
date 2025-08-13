import Document from "../models/Document.js";

// Report a found document
const reportDocument = async (req, res) => {
  try {
    console.log("Received Form Data:", req.body); // Debugging

    const { docType, serialNumber, location } = req.body;

    // Ensure required fields exist
    if (!docType || !serialNumber || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new document in MongoDB
    const document = await Document.create({
      docType,
      serialNumber,
      location
    });

    res.status(201).json({ message: "Document reported successfully", document });
  } catch (error) {
    console.error("Error reporting document:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Search for lost documents
const searchDocuments = async (req, res) => {
  try {
    const { serialNumber } = req.query;
    const documents = await Document.find(
      serialNumber ? { serialNumber } : {}
    );

    if (documents.length > 0) res.json(documents);
    else res.status(404).json({ message: "No documents found" });
  } catch (error) {
    console.error("Error searching documents:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { reportDocument, searchDocuments }; // ✅ Only one export statement
