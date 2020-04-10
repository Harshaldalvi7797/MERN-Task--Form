import React, { Component } from "react";
import Demo from "../Navigation/demo";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="footer">
          <section
            style={{
              height: "200px",
              backgroundColor: "black"
            }}
          >
            <div
              style={{
                color: "white",
                alignItems: "center",
                paddingTop: "75px"
              }}
            >
              <h4>Subscribe to our Job Seeker Mailing List </h4>
              <form
                className="form-group  center "
                style={{ justifyContent: "center" }}
              >
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="form-control"
                    style={{ border: "1px solid blue" }}
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
