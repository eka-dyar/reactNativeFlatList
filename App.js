/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ListView,
  FlatList, // 1. import flatlist
  TouchableOpacity
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

const data = [
  // 2. datanya apa aja
  {
    id: '1',
    title: 'android'
  },
  {
    id: '2',
    title: 'ios'
  },
  {
    id: '3',
    title: 'windows'
  }
]
export default class App extends Component {
  render () {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
        />
      </View>
    )
  }
}

function Item ({ title }) {
  return (
    <View>
      <Text onPress={() => alert(title)}>{title}</Text>
    </View>
  )
}


