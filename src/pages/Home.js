import React from 'react';
import { View, Image } from 'react-native';
import {
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Text,
  Content,
  Card,
  CardItem
} from 'native-base'

// import { Container } from './styles';

const Home = ({ blogList }) => (
  <Content>
    {blogList.map(blog => (
      <Card key={blog.id}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: blog.author_avatar }} />
            <Body>
              <Text>{blog.title}</Text>
              <Text note>{blog.author}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: blog.cover_image_url }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>{blog.likes}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{blog.comments}</Text>
            </Button>
          </Body>
          <Right>
            <Text note>{blog.time}</Text>
          </Right>
        </CardItem>
      </Card>))}
  </Content>

)
export default Home
