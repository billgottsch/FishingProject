
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
                selectedStyle={{color:'#3050ba'}} onSelect={el=>this.setState({page:el.props.name})}>
              <Text name="first" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#1560fb'}}>First</Text>
              <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#1560fb'}}>Second</Text>
              <Text name="third" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#1560fb'}}>Third</Text>
              <Text name="fourth" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#1560fb'}}>Fourth</Text>
              <Text name="fifth" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#1560fb'}}>Fifth</Text>
          </Tabs>
        </View>

      </View>
    );
  }
}
AppRegistry.registerComponent('FishingProject', () => FishingProject);
