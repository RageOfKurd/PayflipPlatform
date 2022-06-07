import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Card = (props) => {
  return (
    <MDBCard
      alignment="center"
      style={{ maxWidth: "22rem", maxHeight: "35rem" }}
    >
      <MDBCardImage
        src="https://media.idownloadblog.com/wp-content/uploads/2017/10/iphone-8-mockup-downloadable.jpg"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>
          {props.name + " "}
          {<span style={{ fontSize: 15, color: "green" }}>{props.cost}</span>}
        </MDBCardTitle>

        <MDBCardText>{props.desc}</MDBCardText>
        <button
          type="submit"
          className="btn bg-redpayflip text-white w-80 mt-1 mb-0"
          value={props.key}
        >
          Purchase
        </button>
      </MDBCardBody>
    </MDBCard>
  );
};
