import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Bellefair from '../assets/fonts/Bellefair-Regular';

const styles = StyleSheet.create({

  tabBar: {
    backgroundColor:'#e5e5e5',
  },

  oneTab: {
    fontSize: 15,
  },

  backgroundPicture: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  welcome: {
    alignItems:'center',
    marginTop: 175,
  },

  welcomeContent: {
    fontFamily:'Bellefair-Regular',
    fontSize:40,
    color:'#111',
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop:5,
    marginBottom: 5,
  },
});
export default styles
