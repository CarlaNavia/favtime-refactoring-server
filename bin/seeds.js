const mongoose = require("mongoose");
const ServiceType = require("../src/models/serviceType");

mongoose.connect(`mongodb://localhost/favtime-refactoring`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const serviceType = [
  {
    title: "Babysitters",
    iconCode: 1,
    services: [],
  },
  {
    title: "Elderly caregivers",
    iconCode: 2,
    services: [],
  },
  {
    title: "Health services",
    iconCode: 3,
    services: [],
  },
  {
    title: "Home duties",
    iconCode: 4,
    services: [],
  },
  {
    title: "Language classes",
    iconCode: 5,
    services: [],
  },
  {
    title: "Move",
    iconCode: 6,
    services: [],
  },
  {
    title: "Personal trainers",
    iconCode: 7,
    services: [],
  },
  {
    title: "Repairs",
    iconCode: 8,
    services: [],
  },
  {
    title: "School support",
    iconCode: 9,
    services: [],
  },
  {
    title: "Transport",
    iconCode: 10,
    services: [],
  },
  {
    title: "Others",
    iconCode: 11,
    services: [],
  },
];

ServiceType.create(serviceType, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${serviceType.length} service type`);
  mongoose.connection.close();
});
