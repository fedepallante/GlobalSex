import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import TaskForm from './TaskForm';
import { taskUpdate, taskSave, taskDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class TaskEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.task, (value, prop) => {
      this.props.taskUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, address, taskType, equipment, phone } = this.props;

    this.props.taskSave({ name, address, taskType, equipment, phone, uid: this.props.task.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.task;

    this.props.taskDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <TaskForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Task
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, address, taskType, equipment, phone } = state.taskForm;

  return { name, address, taskType, equipment, phone };
};

export default connect(mapStateToProps, {
  taskUpdate, taskSave, taskDelete
})(TaskEdit);
