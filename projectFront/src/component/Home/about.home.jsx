import React, { Component } from "react";
import "../Footer/Footer";
class Habout extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          alignSelf: "center"
        }}
      >
        <h1
          style={{ textAlign: "center", paddingTop: "50px", fontSize: "25px" }}
        >
          We are Leaders in
        </h1>
        <h2 style={{ textAlign: "center" }}>Creative Digital Recrutement</h2>
        {/* <div class="example"></div> */}
        <hr
          style={{
            border: "2px solid #007bff",
            alignSelf: "center",
            width: "160px"
          }}
        />
        <p style={{ textAlign: "center" }}>
          Besed in Surry Hills, creative hub in Mumbai we are surrounded by
          creativity and that reflects on the type of job we recruit for.
        </p>
        <p style={{ textAlign: "center" }}>
          <button
            className="btn btn-outline-primary"
            style={{
              alignSelf: "center"
            }}
          >
            Find The More About Us
          </button>
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>
    );
  }
}
export default Habout;
