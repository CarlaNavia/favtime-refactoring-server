export default (req, res, next) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(204).send();
};
