import usersApi from '../../api/usersApi';

//Action Creator
// export const selectUser = (user) => {

//     return {
//         type: 'USER_SELECTED',
//         payload: user

//     };
// };

export const fetchUsers = () => {

    return async (dispatch) => {

        const response = await usersApi.get('/models');

        dispatch({ type: 'FETCH_USERS', payload: response.data });
        
        // return {
        //     type: 'FETCH_USERS'
        // };
    };
};