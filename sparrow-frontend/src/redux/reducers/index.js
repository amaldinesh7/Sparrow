import { combineReducers } from 'redux';
import userReducer from './userReducer';

// const userReducer = () => {

//     return [
//         { name: 'Amal Dinesh', email: 'amalkdinesh@gmail.com', phone: 9745597425 },
//         { name: 'Test', email: 'test@mail.com', phone: 1234567890 }
//     ];
// };

// const selectedUserReducer = (selectedUser = null, action) => {
//     if (action.type === 'USER_SELECTED') {
//         return action.payload;
//     }

//     return selectedUser;
// };

export default combineReducers({
    users: userReducer
});