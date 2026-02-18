export default function handler(req, res) {
  res.status(200).json({
    code: process.env.INJECT_CODE || ""
  });
}
