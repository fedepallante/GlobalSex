import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    TASK_UPDATE,
    TASK_CREATE,
    TASKS_FETCH_SUCCESS,
    TASK_SAVE_SUCCESS
} from './types';



export const taskUpdate = ({ prop, value }) => {
    return {
        type: TASK_UPDATE,
        payload: { prop, value }
    };
};

export const taskCreate = ({ name, address, taskType, equipment, phone }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/tasks`)
            .push({ name, address, taskType, equipment, phone })
            .then(() => {
                dispatch({ type: TASK_CREATE });
                Actions.taskList({ type: 'reset' });
            });
    };
};

export const tasksFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/tasks`)
            .on('value', snapshot => {
                dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const taskSave = ({ name, address, taskType, equipment, phone }) => {

    return (dispatch) => {
        firebase.database().ref(`/tasks`)
            .set({ name, address, taskType, equipment, phone })
            .then(() => {
                dispatch({ type: TASK_SAVE_SUCCESS });
                Actions.taskList({ type: 'reset' });
            });
    };
};

export const taskDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/tasks`)
            .remove()
            .then(() => {
                Actions.taskList({ type: 'reset' });
            });
    };
};
