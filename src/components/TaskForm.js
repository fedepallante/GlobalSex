import React, { Component } from 'react';
import { View, Text, Picker, Switch } from 'react-native';
import { connect } from 'react-redux';
import { taskUpdate } from '../actions';
import { CardSection, Input } from './common';



class TaskForm extends Component {
  render() {
    return (
      <View>

        <CardSection>
          <Input
              label="Nom du client"
              placeholder="Brian"
              value={this.props.name}
              onChangeText={value => this.props.taskUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
              label="Adresse"
              placeholder="6849, Rue Sherbrooke"
              value={this.props.address}
              onChangeText={value => this.props.taskUpdate({ prop: 'address', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Type de tâche"
            placeholder="Installation/Maintenance"
            value={this.props.taskType}
            onChangeText={value => this.props.taskUpdate({ prop: 'taskType', value })}
          />
        </CardSection>

        <CardSection>
          <Input
              label="Équipement nécessaire"
              placeholder="Outils, Pièces"
              value={this.props.equipment}
              onChangeText={value => this.props.taskUpdate({ prop: 'equipment', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.taskUpdate({ prop: 'phone', value })}
          />
        </CardSection>


      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, address, taskType, equipment, phone } = state.taskForm;

  return { name, address, taskType, equipment, phone };
};

export default connect(mapStateToProps, { taskUpdate })(TaskForm);
