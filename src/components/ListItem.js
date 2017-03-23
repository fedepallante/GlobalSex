import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import Communications from 'react-native-communications';


class ListItem extends Component {
    onRowPress() {
        Actions.taskEdit({ task: this.props.task });
    }
    onCallPress() {
        const { phone } = this.props;

        Communications.phonecall({phone})
        //Communications.text(phone, `Message automatisé de Global Sécurité. Votre technicien est en route on sera là dans 30 minute`);
    }
    onRoutePress() {
        const { phone } = this.props;


    }


    render() {
        const { name, address, phone, equipment } = this.props.task;

        return (
              <View>
                <Card style={styles.cardStyle}>
                    <View >
                        <CardSection >
                            <Text style={styles.titleStyle}>
                                Adresse: {address}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text>
                                Nom du client: {name} </Text>
                        </CardSection>
                            <CardSection>
                            <Text>
                                Equipement nécessaire: {equipment}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Button onPress={this.onCallPress.bind(this)}>
                                Appeler
                            </Button>
                            <Button onPress={this.onRoutePress.bind(this)}>
                                En Route
                            </Button>
                            <Button onPress={this.onRowPress.bind(this)}>
                                Détails de la tâche
                            </Button>
                        </CardSection>

                    </View>


                </Card>
              </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    viewStyle: {
        height: 100,
        flex: 2,
    },
    buttonStyleLeft: {
        height:50,
        width: 100,
        backgroundColor: 'blue',
    },
    buttonStyleRight: {
        height:50,
        width: 200,
        backgroundColor: 'green'
    },
    holder: {
        flex: 0.25,
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    },
    cardStyle:{
        backgroundColor: 'blue'
    }
};

export default ListItem;