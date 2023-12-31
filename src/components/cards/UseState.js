import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UseState = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="inputs">
      <Button variant="warning" onClick={() => setCount(count - 1)}>
        <FontAwesomeIcon icon="fa-minus fa-2x" />
      </Button>
      <span className="value">{count}</span>
      <Button variant="warning" onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon="fa-plus fa-2x" />
      </Button>
    </div>
  );
};

export default UseState;
