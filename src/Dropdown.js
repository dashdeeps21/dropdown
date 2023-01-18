import { useState } from "react";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Yes", "Probably not"];
  return (
    <div className="dropdown">
      <h3>Should you use a dropdown?</h3>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <div class="carret"> </div>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
