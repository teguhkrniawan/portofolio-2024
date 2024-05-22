import React from 'react'
import { BiXCircle } from "react-icons/bi";

const Modal_Img = (props) => {

    const modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    return (
        <div className='modal modal-lg' tabIndex={-1} style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Detail Gambar</h5>
                        <BiXCircle className='fs-5' style={{cursor: 'pointer'}} onClick={(e) => props.changeModal()} />
                    </div>
                    <div className="modal-body">
                        <img src={props.image} alt="gambar-project" style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal_Img