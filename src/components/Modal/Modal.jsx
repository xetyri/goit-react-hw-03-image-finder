import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


import s from'./Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPressESC);
  }

    handleKeyPressESC = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  clickOnBack = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.clickOnBack}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }

}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};


export default Modal;
