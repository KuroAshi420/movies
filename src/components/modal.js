import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

Modal . setAppElement ( document . getElementById ( 'root' )); 
 
function Moda(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [input,setInput] = React.useState("");
  // const [ratingVal,setratingVal] = React.useState(0);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
  
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  function handelchange  (e) {
    setInput(e.target.value)
  }
  function addTodo  (e) {
    props.add({input,id: Date.now()})
    setInput("")
    e.preventDefault();
  }
  // function ratingchange  (e) {
  //   setratingVal(StarRatingComponent.value)
  // }
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input type="text" 
            value ={input}
            onChange = {handelchange}/>
            <button onClick={addTodo}>Create</button>
            <StarRatingComponent
             name="rate2" 
            //  value ={rating}
            // onChange = {ratingchange}
             />
          </form>
        </Modal>
      </div>
    );
}
  
export default Moda

