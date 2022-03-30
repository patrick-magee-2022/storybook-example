import PropTypes from 'prop-types';

export const ModalComponent = ({buttonText, title, body }) => {

    return (
        <>
            <button type="button" className={"btn btn-primary"} data-bs-toggle="modal" data-bs-target="#exampleModal">
                {buttonText}
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={false}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {body}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
ModalComponent.propTypes = {
    buttonText: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  };
  
  ModalComponent.defaultProps = {
    buttonText: "Launch Modal",
    title: "Modal Title",
    body: "Modal Body",
  };