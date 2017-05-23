/**
 * Created by cly on 2017/5/22.
 */
import React,{PureComponent} from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';
import {Badge} from "../../../../widgets";


import BaseComponent from "../../../../core/baseComponent";

import Icon from 'react-native-vector-icons/Ionicons';
import {tabBarIcon} from "../../RouterFactory";

export default class MessageScreen extends PureComponent{

  static navigationOptions = ({navigation})=>
    (
      { title: "消息",
      }
    );




  constructor(props){
    super(props);
    //const { navigate } = this.props.navigation;
    //this.navigate = navigate;
  }

  render() {
    const {navigate} = this.props.navigation;
    return(<View>
      <Text>这是消息</Text>
      <Button
        onPress={() => navigate('ChatScreen', { user: 'hammer' })}
        title="Chat with hammer"
      />
    </View>)
  }

}