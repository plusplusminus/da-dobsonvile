import React from "react";
import { colors } from 'common/styles/variables';

function Colors() {
  const colorsArray = [];

  Object.keys(colors).forEach((name) => {
    if (colors[name]) {
      colorsArray.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
            }}
          />
          <pre
            style={{
              display: "inline-block",
              lineHeight: "30px",
              margin: 0,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }
  });

  return (
    <div>
      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {colorsArray.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${colors.Border}` }}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
