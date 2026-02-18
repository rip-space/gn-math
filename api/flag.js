export default function handler(req, res) {
  const flag = process.env.MY_FEATURE_FLAG === "on";
  res.status(200).json({ enabled: flag });
}
