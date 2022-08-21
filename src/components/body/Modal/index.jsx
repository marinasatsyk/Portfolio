import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

export const useModal = () => {
    const [isModalOpened, setModalOpened] = useState(false);

    function toggle() {
        setModalOpened(!isModalOpened);
    }

    return {
        isModalOpened,
        toggle,
    };
};
export const Modal = ({ isModalOpened, hide, title, ...props }) =>
    isModalOpened
        ? ReactDOM.createPortal(
              <>
                  <div className="modalBackground" onClick={hide}>
                      <div className="modalContainer">
                          {/* <div className="titleCloseBtn">
                              <div className="wrapperBtn">
                                  <button
                                      className="modal-close-button"
                                      onClick={hide}
                                  >
                                      <span>&times;</span>
                                  </button>
                              </div>
                          </div> */}
                          {/* <div className="title-modal">
                              <h4>{title}</h4>
                          </div> */}
                          <div className="modal-body">{props.children}</div>
                      </div>
                  </div>
              </>,
              document.body
          )
        : null;
