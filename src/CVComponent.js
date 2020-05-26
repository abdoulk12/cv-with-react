import React from "react";

function CVComponent(props) {
  return (
    <div>
      <h3> {props.item.title}</h3>
      <h4>
        {props.item.startDate} - {props.item.endDate}
      </h4>
      <p
        style={{
          "white-space": "pre-wrap"
        }}
      >
        {props.item.description}{" "}
      </p>
      <hr />
    </div>
  );
}
export default CVComponent;
