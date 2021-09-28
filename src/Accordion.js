import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion">
        <div className="accord-title" onClick={() => setIsActive(!isActive)}>
          {title}
        </div>
        {isActive ? <div className="accord-content">{content}</div> : ""}
      </div>
    </>
  );
};

export default Accordion;
