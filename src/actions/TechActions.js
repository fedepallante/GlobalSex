/**
 * Created by fedepallante on 2017-03-22.
 */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

import getDirections from 'react-native-google-maps-directions';

export default class gmapsDirections extends Component {

    handleGetDirections = () => {
        const data = {
            source: {
                latitude: -33.8356372,
                longitude: 18.6947617
            },
            destination: {
                latitude: -33.8600024,
                longitude: 18.697459
            }
        }

        getDirections(data)
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.handleGetDirections} title="Get Directions" />
            </View>
        );
    }
}