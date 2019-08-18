import React from 'react';
import { Container } from 'semantic-ui-react';

class TaskContainer extends React.Component {

  render() {
    return (
      <div>
        <Container textAlign='left'>
          <ul>
            {this.props.items.map((item) =>
              <li>{item}</li>
            )}
          </ul>
        </Container>
      </div>
    )
  }
}

// const TaskContainer = (props) => (
//   <div>
//     <Container textAlign='left'>
//       <ul>
//         <li>{this.props.items}</li>
//       </ul>
//     </Container>
//   </div>
// )

export default TaskContainer;