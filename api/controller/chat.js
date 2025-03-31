import { db } from "../db/db.js";

export const sendMessage = (req, res, io) => {
  const { senderId, receiverId, message } = req.body;

  if (!senderId || !receiverId || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)",
    [senderId, receiverId, message],
    (err, result) => {
      if (err) return res.status(500).json(err);

      db.query(
        "SELECT * FROM messages WHERE id = ?",
        [result.insertId],
        (err, newMessage) => {
          if (err) return res.status(500).json(err);

          // Emit only to receiver
          io.to(`user-${receiverId}`).emit("receiveMessage", newMessage[0]);

          res.json({
            success: true,
            message: newMessage[0],
            isOwn: true,
          });
        }
      );
    }
  );
};

export const getMessages = (req, res) => {
  const { senderId, receiverId } = req.query;

  if (!senderId || !receiverId) {
    return res
      .status(400)
      .json({ error: "Both senderId and receiverId are required" });
  }
}