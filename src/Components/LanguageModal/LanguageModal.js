/* Plugins */
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';

/* Helpers and Actions */
import { closeLanguageModal } from '../../Actions/languageModalAction';

const LanguageModal = ({ open, closeLanguageModal }) => {
    return(
        <div>
            <Modal show={open} onHide={closeLanguageModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Language Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This modal is to change the language. </p>
                </Modal.Body>
            </Modal>
        </div>
    )
};

const mapState = state => ({
    open: state.languageModalReducer.languageModal
});

const mapDispatch = {
    closeLanguageModal
};

export default (connect(mapState, mapDispatch)(LanguageModal));