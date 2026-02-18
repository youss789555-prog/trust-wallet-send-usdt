export default function handler(req, res) {
  if (req.method === "POST") {
    const { address } = req.body;

    console.log("New connected wallet:", address);

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
