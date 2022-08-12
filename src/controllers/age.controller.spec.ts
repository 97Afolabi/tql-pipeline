// import chai from "chai";
import chai from "chai";
import Mocha from "mocha";
import AgeController from "./age.controller";

const assert = chai.assert;
const { suite, test } = Mocha;

suite("AgeController", function () {
  const LOWEST_TIMESTAMP = -2208989615000; // 1900-01-01
  const CURRENT_TIMESTAMP = Date.now();
  const MOCK_TIMESTAMP = 166026660029;

  test("should be defined", function () {
    assert.isDefined(new AgeController());
  });

  suite("Validate timestamp input", function () {
    test("should be on or after 1900-01-01", function () {
      assert.isAtLeast(MOCK_TIMESTAMP, LOWEST_TIMESTAMP);
    });

    test("should be on or before current timestamp", function () {
      assert.isAtMost(MOCK_TIMESTAMP, CURRENT_TIMESTAMP);
    });

    test("should yield valid date object", function () {
      assert.equal(
        typeof new AgeController().validate(MOCK_TIMESTAMP.toString()),
        "object"
      );
    });
  });

  suite("getAge", function () {
    test("should return age as a number", function () {
      assert.isNumber(
        new AgeController().getYearDifference(new Date(MOCK_TIMESTAMP))
      );
    });
  });
});
