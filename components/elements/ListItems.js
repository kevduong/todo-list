import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

class ListItems extends React.Component {
  render() {
    return (
      <List>
      {/* Mapping through the list of items 
      from the state of the BaseCard comp */}
      {this.props.items.map(item => (
        <ListItem role={undefined} dense button>
          <ListItemIcon>
            <Checkbox edge="start" disableRipple />
          </ListItemIcon>
            <ListItemText>{item}</ListItemText>
        </ListItem>
        ))}
      </List>
    );
  }
}

export default ListItems;
