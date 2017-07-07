
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View, Image, Scrollview} from 'react-native';

import Tabs from 'react-native-tabs';

import styles from './Pages/Styles.js';


class FishingProject extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.backgroundPicture}>
        <Image source={require('./assets/flyfishing2.jpg')} style={styles.backgroundPicture}>
          <View style={styles.welcome}>
            <Text style={styles.welcomeContent}>The Fisherman's</Text>
            <Text style={styles.welcomeContent}>Handbook</Text>
          </View>
        </Image>

        <View>
          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
        </View>


        <View>
          <Tabs selected={this.state.page} style={styles.tabBar}
                selectedStyle={{color:'#66bbbb', fontWeight:'bold',}} onSelect={el=>this.setState({page:el.props.name})}>
              <Text name="New Entry" style={styles.oneTab} selectedIconStyle={{borderTopWidth:4,borderTopColor:'#66bbbb'}}>New Entry</Text>
              <Text name="Lake List" style={styles.oneTab} selectedIconStyle={{borderTopWidth:4,borderTopColor:'#66bbbb'}}>Lake List</Text>
              <Text name="Search" style={styles.oneTab} selectedIconStyle={{borderTopWidth:4,borderTopColor:'#66bbbb'}}>Share!</Text>
              {/* <Text name="fourth" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#66bbbb'}}>Fourth</Text>
              <Text name="fifth" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#66bbbb'}}>Fifth</Text> */}
          </Tabs>
        </View>

      </View>
    );
  }
}
AppRegistry.registerComponent('FishingProject', () => FishingProject);
