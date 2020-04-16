import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import StarRatingComponent from "react-star-rating-component";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));

function Moda(props) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [rating, setRating] = React.useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handelchange(e) {
    setInput(e.target.value);
  }
  function adds(e) {
    props.add({ input, id: Date.now(), rating: rating });
    setInput("");
    setRating(0);
    e.preventDefault();
  }
  function onStarClick(nextValue, prevValue, name) {
    setRating(nextValue);
  }

  return (
    <div className="cls-modal">
      <button onClick={openModal} className="modal">
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Movies form</h2>

        <div>
          <StarRatingComponent
            value={rating}
            onStarClick={onStarClick}
            className="min-rating-stars2"
          />
        </div>
        <form>
          <input
            type="text"
            placeholder="Enter movie name"
            value={input}
            onChange={handelchange}
            className="inpt-modal"
          />{" "}
          <br />
          <button onClick={adds} className="btn-modal">
            Create
          </button>
          <button onClick={closeModal} className="btn-modal">
            close
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Moda;
