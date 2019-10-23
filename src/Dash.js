import React, { Fragment, Image } from 'react'
import { StyleSheet, Platform, } from 'react-native'

import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';


//components
import Divider from './components/Divider'

// pages
import Home from './pages/Home'
import Messages from './pages/Messages'

const messages = [
  { id: 1, name: 'Diego Fernandes', avatar_url: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4', last_message: 'Lorem ipsum', time: '18:20 PM' },
  { id: 2, name: 'Rodrigo Rafael', avatar_url: 'https://avatars2.githubusercontent.com/u/15212018?v=4', last_message: 'Lorem ipsum', time: '10:12 AM' },
]

const blogList = [
  { id: 1, title: 'Implementando Shimmer Effect no React Native', author: 'Claudio Orlandi', author_avatar: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/wp-content/uploads/2018/06/capa_react-native-shimmer-868x488.png', likes: 1290, comments: 129, time: '21 de Junho' },
  { id: 2, title: 'Utilizando mapas no React Native com Mapbox', author: 'Higo Ribeiro', author_avatar: 'https://secure.gravatar.com/avatar/8834a7ccea235ca4cca9c970d95e27f3?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/wp-content/uploads/2060/06/react-native-map-mapbox-868x488.png', likes: 1290, comments: 129, time: '20 de Junho' },
]


const Notification = () => null

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4'

const App = () => (
  <Container style={styles.safe}>
    <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
      <Left>
        <Thumbnail small source={{ uri: logo_url }} />
      </Left>
      <Body>
        <Title>My App</Title>
      </Body>
    </Header>
    <View style={styles.container}>
      <Tabs>
        <Tab heading={
          <TabHeading style={styles.tabHeading} >
            <Icon type="FontAwesome" name="home" />
          </TabHeading>}>

          <Home blogList={blogList} />
        </Tab>
        <Tab heading={
          <TabHeading style={styles.tabHeading} >
            <Icon type="FontAwesome" name="bell-o" />
          </TabHeading>}>

          <Notification />
        </Tab>
        <Tab heading={
          <TabHeading style={styles.tabHeading} >
            <Icon type="FontAwesome" name="envelope-o" />
          </TabHeading>}>

          <Messages messages={messages} />
        </Tab>
      </Tabs>
    </View>
  </Container>
)

export default App

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: {
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  },
  safe: {
    marginTop: Platform.OS === 'android' ? 25 : 0
  }
})