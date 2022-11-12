export function errorHandler(err, res) {
  return res.status(500).json({ message: err });
}
