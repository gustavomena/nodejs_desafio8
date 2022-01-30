const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
chai.use(chaiHttp);

describe("testing  Mocha y Chai-http", function () {
  it("ckecking endpoint", function () {
    chai
      .request(server)
      .get("/deportes")
      .end(function (err, res) {
        let data = JSON.parse(res.text);

        chai.expect(data).to.have.property("deportes");

        chai.expect(data.deportes).to.be.an("array");
      });
  });
});