const Modal = ({ hideModal1, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={hideModal1}>
            Close
          </button>
        </section>
      </div>
    );
  };



  export default Modal;