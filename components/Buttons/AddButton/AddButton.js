import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const AddButton = () => (
  <div>
    <Button animated color="red">
      <Button.Content visible>Add Task</Button.Content>
      <Button.Content hidden>
        <Icon name='plus circle' color="white" />
      </Button.Content>
    </Button>
  </div>
)

export default AddButton;