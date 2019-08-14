import React from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'

const btnStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: 20
}

class AddButton extends React.Component {
  constructor() {
    super();

    this.state = {
      inputStatus: "inputHide"
    };

    this.inputClose = this.inputClose.bind(this);
    this.inputOpen = this.inputOpen.bind(this);
  }

  inputClose(e) {
    e.stopPropagation();
    this.setState({
      inputStatus: "inputHide",
      fade: true
    });
  }

  inputOpen() {
    this.setState({
      inputStatus: "inputShow"
    })
  }

  render() {
    const fade = this.state.fade

    return (
      <div>
        {this.state.inputStatus == 'inputHide' ?
          <Button
            animated
            color="teal"
            style={btnStyle}
            onClick={this.inputOpen}
          >
            <Button.Content visible>Add Task</Button.Content>
            <Button.Content hidden className={this.state.inputStatus}>
              <Icon name='plus circle' color="white" />
            </Button.Content>
          </Button> :
          null
        }
        {this.state.inputStatus == 'inputShow' ?
          <Input
            className="inputClose"
            style={btnStyle}
            action={{
              color: 'teal',
              icon: 'plus circle'
            }}
          /> :
          null
        }
      </div>
    )
  }
}

export default AddButton;