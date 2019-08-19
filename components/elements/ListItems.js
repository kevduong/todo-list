import React from "react";
import styled from 'styled-components';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';

const StyledListItemText = styled(ListItemText)`
  text-decoration: ${(props) => props.checked ? "line-through" : "none"};
`;

const StyledListItemIcon = styled(ListItemIcon)`
  display: none;

  &:hover {
    display: block;
  }
`;

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }

    this.checkedBox = this.checkedBox.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  checkedBox() {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }

  removeItem(i) {
    this.setState(state => {
      const list = this.props.items.filter((item, j) => i !== j);

      return {
        list,
      };
    });
  };

  render() {
    return (
      <List>
        {/* Mapping through the list of items 
      from the state of the BaseCard comp */}
        {this.props.items.map(item => (
          <ListItem role={undefined} dense button>
            <ListItemIcon>
              <Checkbox edge="start" disableRipple onClick={this.checkedBox} />
            </ListItemIcon>
            <StyledListItemText checked={this.state.checked}>{item}
            </StyledListItemText>
            <StyledListItemIcon>
              <DeleteIcon onClick={this.removeItem} />
            </StyledListItemIcon>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ListItems;
