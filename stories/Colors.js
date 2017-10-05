import React from "react";
import { colors } from 'common/styles/variables';

const createColorGroup = (prefix) => Object.keys(colors)
  .filter(name => name.includes(prefix));

  const colorSwatch = (colorName) => (
    <div
      style={{
        backgroundColor: colorName,
        borderStyle: "solid",
        borderWidth: "1px",
        height: "32px",
        width: "32px",
      }}
    />
  );

  const colorGroup = (colorName) => (
    <tr key={colorName}>
      <td><code>colors.{colorName}</code></td>
      <td><code>{colors[colorName]}</code></td>
      <td>
        {colorSwatch(colors[colorName])}
      </td>
    </tr>
  );

  const Colors = () => (

    <table className="table">
      <thead className="thead-default">
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr><th colSpan="3"><h6>
          Base colors <small className="text-muted"></small>
        </h6></th></tr>

        {createColorGroup("base").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Brand colors <small className="text-muted">Basic colors used by brand</small>
        </h6></th></tr>
        {createColorGroup("brand").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Border colors <small className="text-muted">Colors for borders</small>
        </h6></th></tr>
        {createColorGroup("border").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Background colors <small className="text-muted">Background colors for cards and sections</small>
        </h6></th></tr>
        {createColorGroup("bg").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Link colors <small className="text-muted">Text links and NavItems</small>
        </h6></th></tr>
        {createColorGroup("link").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Status colors <small className="text-muted">Colors indicating status of component</small>
        </h6></th></tr>
        {createColorGroup("status").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Text colors <small className="text-muted">Colors for text</small>
        </h6></th></tr>
        {createColorGroup("text").map((name) => colorGroup(name))}

        <tr><th colSpan="3"><h6>
          Social colors <small className="text-muted">Used for social icons and specific platforms</small>
        </h6></th></tr>
        {createColorGroup("social").map((name) => colorGroup(name))}

      </tbody>
    </table>
  );

export default Colors;
