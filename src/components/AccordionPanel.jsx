import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const AccordionPanel = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="faq__accordion-panel" onClick={toggleExpand}>
      <h2 id="panel1-heading ">
        <button
          className="faq__accordion-trigger"
          aria-controls="panel1-content"
          aria-expanded={isExpanded}
        >
          <span id="panel1-title ">{question}</span>

          <svg
            className={`faq__accordion-icon ${isExpanded ? "open" : ""}`}
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y={isMobile ? 7 : 10}
              width="22"
              height="2"
              rx="1"
              className="vertical"
            />
            {/* <rect y="10" width="22" height="2" rx="1" className="vertical" /> */}
            <rect
              y={isMobile ? 7.5 : 10}
              width="22"
              height="2"
              rx="1"
              className="horizontal"
            />
            {/* <rect y="10" width="22" height="2" rx="1" className="horizontal" /> */}
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
