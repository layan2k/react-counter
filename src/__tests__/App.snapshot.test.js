import renderer from "react-test-renderer";

import App from "../App";

test("renders learn react link", () => {
const tree = renderer.create(<App />).toJSON();
expect(tree).toMatchInlineSnapshot(`
[
  <div
    className="Toastify"
  />,
  <div
    className="sc-bdnyFh hilPsi"
  >
    <div
      className="sc-gtsqUy eqvTS"
    >
      <button
        className="sc-hKFymg jeNmO"
        onClick={[Function]}
      >
        -
      </button>
      <div
        className="sc-dlniIP hjFaNB"
      >
        0
      </div>
      <button
        className="sc-hKFymg jeNmO"
        onClick={[Function]}
      >
        +
      </button>
    </div>
    <div
      className="sc-eCAqax biHJlU"
    >
      <button
        className="sc-hKFymg jeNmO"
        onClick={[Function]}
      >
        Reset Button
      </button>
    </div>
  </div>,
]
`);
});