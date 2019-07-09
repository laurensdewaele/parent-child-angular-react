import React from "react";

import { OneParent } from "./scenarios/1-primitive-parent-timeout/OneParent";
import { TwoParent } from "./scenarios/2-complex-structure/TwoParent";
import { ThreeParent } from "./scenarios/3-key/ThreeParent";
import { FourParent } from "./scenarios/4-refs/FourParent";
import { FiveParent } from "./scenarios/5-handle-state-parent/FiveParent";
import { SixParent } from "./scenarios/6-primitive-parent-setState-callback/SixParent";

const App = () => (
  <>
    <h1>
      Testing different scenarios on how to tell a child component to do
      something. E.g. resetting a form.
    </h1>
    <ol>
      <li>
        <h2  style={{ color: "red" }}>Primitive on the parent and using setTimeout</h2>
        <OneParent />
      </li>
      <li>
        <h2 style={{ color: "red" }}>Complex data structure.</h2>
        <p>We need to compare the props => shouldComponentUpdate or react.memo (functional)</p>
        <TwoParent />
      </li>
      <li>
        <h2>Hard reset child with React keys</h2>
        <ThreeParent />
      </li>
      <li>
        <h2>
          Using React ref, kinda like Angular ViewChild. They have to be class
          components instead of functional ones.
        </h2>
        <FourParent />
      </li>
      <li>
        <h2 style={{ color: "green" }}>Letting the parent handle the child's state</h2>
        <FiveParent />
      </li>
      <li>
        <h2>Primitive on the parent with setState callback</h2>
        <SixParent />
      </li>
    </ol>
  </>
);

export default App;
