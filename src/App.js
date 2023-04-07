import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="mainDiv">
        <button className="mainBtn" onClick={() => setOpenModal(true)}>
          MODAL
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
}

export default App;
