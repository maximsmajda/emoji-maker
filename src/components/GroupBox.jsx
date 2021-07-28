import React, { useState, useEffect } from "react";

function GroupBox(props) {
  const [hidden, setHidden] = useState(false);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(getHeight(props.id));
  }, [props.id]);

  const getHeight = (id) => {
    const element = document.getElementById(id);
    const elementHeight = element.clientHeight;
    return elementHeight;
  }

  return (
    <div className="group-box">
      <div className="group-box-heading" onClick={() => setHidden(!hidden)}>
        <h3>{props.name}</h3>
      </div>
      <div
        id={props.id}
        style={hidden ? { maxHeight: 0 } : { maxHeight: height }}
        className={hidden ? "group-box-content hidden" : "group-box-content"}
      >
        {props.children}
      </div>
    </div>
  );
}

export default GroupBox;
