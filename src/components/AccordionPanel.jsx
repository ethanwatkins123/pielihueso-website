import { useState } from "react";

import { iconExpandImg, iconCloseImg } from "../utils";

const AccordionPanel = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="faq__accordion-panel" onClick={toggleExpand}>
      <h2 id="panel1-heading">
        <button
          className="faq__accordion-trigger text-heading-secondary"
          aria-controls="panel1-content"
          aria-expanded={isExpanded}
        >
          <span id="panel1-title ">{question}</span>

          {/* <svg
            aria-hidden="true"
            className={`faq__accordion-icon ${isExpanded ? "open" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect
              className="horizontal"
              y="7"
              width="16"
              height="2"
              fill="#1D1D1B"
            />
            <rect
              className="vertical"
              x="9"
              width="16"
              height="2"
              transform="rotate(90 9 0)"
              fill="#1D1D1B"
            />
          </svg> */}

          <svg
            className={`faq__accordion-icon ${isExpanded ? "open" : ""}`}
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="7" width="16" height="2" rx="1" className="vertical" />
            <rect y="7" width="16" height="2" rx="1" className="horizontal" />
          </svg>
        </button>
      </h2>
      <div
        className="faq__accordion-content"
        id="panel1-content"
        aria-labelledby="panel1-heading"
        aria-hidden={!isExpanded}
        role="region"
      >
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionPanel;
