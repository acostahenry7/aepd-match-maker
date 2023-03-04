import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function WinnerModal(props) {
  const {
    setWhoMustSpin,
    setWhoSpined,
    whoSpined,
    spinTimes,
    show,
    onHide,
    winnerArr,
    winnerIndex,
  } = props;

  const handleHide = () => {
    winnerArr.splice(winnerIndex, 1);
    setTimeout(() => {
      if (whoSpined == 0 && spinTimes != 0) {
        setWhoSpined(1);
        setWhoMustSpin(1);
      } else {
        setWhoSpined(0);
        setWhoMustSpin(0);
      }
    }, 500);

    onHide();
  };

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        handleHide();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Resultado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Y la persona seleccionada es...</p>
        <h4>{props.winner}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleHide();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
