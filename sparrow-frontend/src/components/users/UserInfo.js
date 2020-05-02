import React, {useState} from 'react';
import { useParams,useHistory} from 'react-router-dom';
import usersApi from '../../api/usersApi';

import Card from '../shared/UIElements/Card';
import Button from '../shared/UIElements/Button';
import Modal from '../shared/UIElements/Modal';
import './UserInfo.css';

const UserInfo = props => {
    const uId = useParams().id;

    const [showConfirmModal, setShowConfirmModal] = useState(false);
   
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    const confirmDeleteHandler = () => {
        usersApi.delete(`/models/${uId}`)
          .then(function (response) {
              //Temporary Setup - Nedd to show deleted Successfully 
            setShowConfirmModal(false);
            handleClick();
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    
    // console.log(props.id);
    return (
        <React.Fragment>
            <Modal
                show = {showConfirmModal}
                onCancel = {cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                    </React.Fragment>
                }>
                <p> Are you sure you want to remove this user?</p>
            </Modal>
            <li className="user-info">
                <Card className="user-info__content">
                    <div className="user-info__info">
                        <h1>{props.name}</h1>
                        <h2>Phone <span className="colon1">:</span>  {props.phone}</h2>
                        <h2>DOB <span className="colon2">:</span> {props.dob}</h2>
                        <h2>Email <span className="colon3">:</span>  {props.email}</h2>
                    </div>
                    <div className="user-info__actions">
                        <Button className="update-btn" to={`/${props.id}/update`}>Update</Button>
                        <Button danger onClick={showDeleteWarningHandler}> Delete </Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default UserInfo;