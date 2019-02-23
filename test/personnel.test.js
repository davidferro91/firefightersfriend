var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/personnel", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all personnel", function(done) {
    // Add some examples to the db to test with
    db.Personnel.bulkCreate([
      {
        firstName: "John",
        lastName: "Firefighter",
        title: "Lt",
        password: "password",
        addressLine1: "200 SomeWhere Street",
        addressLine2: "",
        city: "Cleveland",
        state: "OH",
        zipcode: "12345",
        homePhone: "1234567890",
        cellPhone: "1234567890",
        userEmail: "john.fighter@kdkdkd.com",
        username: "asdfashgoasd"
      },
      {
        firstName: "Regina",
        lastName: "Lighter",
        title: "Sgt",
        password: "notPassword",
        addressLine1: "300 Where Road",
        addressLine2: "",
        city: "Parma",
        state: "NY",
        zipcode: "43244",
        homePhone: "1234567890",
        cellPhone: "1234567890",
        userEmail: "Regina.Lighter@kdkdkd.com",
        username: "asdoifhasiughalsidhfasklhfslkdjgz"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/personnel").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            firstName: "John",
            lastName: "Firefighter",
            title: "Lt",
            addressLine1: "200 SomeWhere Street",
            addressLine2: "",
            city: "Cleveland",
            state: "OH",
            zipcode: "12345",
            homePhone: "1234567890",
            cellPhone: "1234567890",
            userEmail: "john.fighter@kdkdkd.com",
            username: "asdfashgoasd"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            firstName: "Regina",
            lastName: "Lighter",
            title: "Sgt",
            addressLine1: "300 Where Road",
            addressLine2: "",
            city: "Parma",
            state: "NY",
            zipcode: "43244",
            homePhone: "1234567890",
            cellPhone: "1234567890",
            userEmail: "Regina.Lighter@kdkdkd.com",
            username: "asdoifhasiughalsidhfasklhfslkdjgz"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
