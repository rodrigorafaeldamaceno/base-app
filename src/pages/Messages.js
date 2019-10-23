import React, { Fragment } from 'react';
import { View } from 'react-native';

import Divider from '../components/Divider'

import {
  Left,
  Right,
  Body,
  Icon,
  Fab,
  List,
  ListItem,
  Thumbnail,
  Text,
} from 'native-base'


// import { Container } from './styles';

export default function Messages({ messages }) {
  return (
    <>
      <List>
        {messages.map(message => (
          <ListItem avatar key={message.id}>
            <Left>
              <Thumbnail source={{ uri: message.avatar_url }} />
            </Left>
            <Body>
              <Text>{message.name}</Text>
              <Text note>{message.last_message}</Text>
            </Body>
            <Right>
              <Text note>{message.time}</Text>
            </Right>
            <Divider />
          </ListItem>

        ))}
      </List>
      <Fab
        direction="up"
        position="bottomRight"
        style={{ backgroundColor: "#7159C1" }}
      >
        <Icon type="FontAwesome" name="plus" />
      </Fab>
    </>
  );
}
