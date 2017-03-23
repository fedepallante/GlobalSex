import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreate extends Component {
  onButtonPress() {
    const { name, address, taskType, equipment, phone } = this.props;

    this.props.taskCreate({ name, address, taskType, equipment, phone });
  }

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, address, taskType, equipment, phone } = state.taskForm;

  return { name, address, taskType, equipment, phone };
};

export default connect(mapStateToProps, {
  taskUpdate, taskCreate
})(TaskCreate);
