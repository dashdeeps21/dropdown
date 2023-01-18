import Dropdown from "./Dropdown";
import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState("Select");
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <Dropdown selected={selected} setSelected={setSelected} />

      <br />
      <br />
      <br />
    </div>
  );
}
