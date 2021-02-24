import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const query = req.query.title;
    const searchedService = await ServiceRepository.searchByText(query);
    res.status(200).json(searchedService);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
