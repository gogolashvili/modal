import image from "./image.jpeg";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modalDiv">
        <img src={image} alt="nice pic" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content">
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your firs tade?</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love
            </button>
            <button className="btnOutLine">
              <span className="bold">NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
