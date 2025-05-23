import { db } from "../db/db.js";
export const bookAppointment = (req, res) => {
  const { date, service, user_id, doctor_id } = req.body;
  const doctorId = parseInt(doctor_id);
  console.log(doctorId);
  const q = "select * from appointment where date = ? and doctor_id = ?";
  db.query(q, [date, doctorId], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length)
      return res
        .status(201)
        .json({ message: "Appointment already exists.", success: 0 });
    const q =
      "insert into appointment (date, service, user_id, doctor_id) values(?, ?, ?, ?)";
    db.query(q, [date, service, user_id, doctorId], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({
        message: "Appointment booked successfully.",
        result,
        success: 1,
      });
    });
  });
};

export const acceptAppointment = (req, res) => {
  const id = req.params.id;
  const q = "update appointment set status = 'accepted' where id = ?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({
      message: "Appointment accepted successfully.",
      result,
      success: 1,
    });
  });
};
export const rejectAppointment = (req, res) => {
  const id = req.params.id;
  const q = "update appointment set status = 'rejected' where id = ?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({
      message: "Appointment rejected successfully.",
      result,
      success: 1,
    });
  });
};

export const getAppointment = (req, res) => {
  const q =
    "select a.*, a.id as appo_id, u.* from appointment a join users u on a.doctor_id = u.id";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};
export const getSingleAppointment = (req, res) => {
  const { id } = req.params;
  const appointment_id = parseInt(id);
  const q = "select * from appointment where id = ?";
  db.query(q, [appointment_id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result[0]);
  });
};
export const getAppointmentByUser = (req, res) => {
  const id = parseInt(req.params.id); // user_id from the request parameter

  // Corrected SQL query with proper MySQL comments
  const q = `SELECT a.*, u.name AS user_name, d.name AS doctor_name
FROM appointment a
JOIN users u ON a.user_id = u.id
JOIN users d ON a.doctor_id = d.id 
WHERE a.user_id = ?
ORDER BY a.created_at DESC;`;

  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result); // Return the result of the query
  });
};

export const getAppointmentByDoctor = (req, res) => {
  const id = parseInt(req.params.id);
  const q = `SELECT appointment.*, appointment.id as appo_id, users.*
  FROM appointment
  INNER JOIN users ON appointment.user_id = users.id where appointment.doctor_id = ?;`;
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};
export const cancelAppointment = (req, res) => {
  const id = req.params.id;
  const q = "delete from appointment where id = ?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json({ err, success: 0 });
    res.status(200).json({
      message: "Appointment cancelled successfully.",
      result,
      success: 1,
    });
  });
};
