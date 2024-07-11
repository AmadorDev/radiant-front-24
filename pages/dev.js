import { useState } from "react";
import Container from "../components/layouts/Container";
import ModalAnimate from "../components/utils/ModalAnimate";
import ModalTa from "../components/utils/ModalTa";

function dev() {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <div className="p-3">page dev</div>
    </Container>
  );
}

export default dev;
