import React, {Component} from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

const TaskButtons= () => {
        return (
            <TouchableOpacity>
                <Image
                    source={require('../img/001-smartphone-call.svg')}
                />
            </TouchableOpacity>
        );
    };


export default TaskButtons;