import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const btnStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: 20
}

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          animated
          color="teal"
          style={btnStyle}
        >
          <Button.Content visible>Add Task</Button.Content>
          <Button.Content hidden>
            <Icon name='plus circle' />
          </Button.Content>
        </Button>
      </div>
    )
  }
}

export default AddButton