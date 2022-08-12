import chai from "chai";
import Mocha from "mocha";
import chaiHttp from "chai-http";
import server from "../server";

const assert = chai.assert;
const { suite, test } = Mocha;
chai.use(chaiHttp);

suite("Functional Tests", function () {
  test("Test GET /", function (done) {
    chai
      .request(server)
      .get("/")
      .end(function (err, res) {
        if (err) err;
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        done();
      });
  });

  test("Test GET /howold", function (done) {
    chai
      .request(server)
      .get("/howold?dob=" + Date.now())
      .end(function (err, res) {
        if (err) err;
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.status, "success");
        assert.isNumber(res.body.age);
        done();
      });
  });
});
