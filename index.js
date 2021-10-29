const csvtojson = require("csvtojson");

csvtojson()
  .fromFile("data.csv")
  .then((csvData) => {
    console.log(csvData);
  });

/*   [
  ({
    id: "1",
    name: "Node.js",
    description: "JavaScript runtime environment",
    createdAt: "2019-09-03",
  },
  {
    id: "2",
    name: "Vue.js",
    description: "JavaScript Framework for building UI",
    createdAt: "2019-09-06",
  },
  {
    id: "3",
    name: "Angular.js",
    description: "Platform for building mobile & desktop web app",
    createdAt: "2019-09-09",
  })
]; */
