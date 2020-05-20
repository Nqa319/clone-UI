import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const MyNew = (props) => {
  return (
    <View style={styles.news}>
      <Image style={styles.imgnews} source={props.image} />
      <Image style={styles.headerIcon} source={props.user} />
      <Text
        style={{margin: 10, marginTop: 80, fontWeight: 'bold', color: 'white'}}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  news: {height: 200, width: (width * 2) / 7,marginVertical:10,marginLeft:10},
  imgnews: {
    height: 200,
    width: (width * 2) / 7,
    borderRadius:15,

  },
  headerIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'dodgerblue',
    marginTop: -190,
    marginLeft:10
  },
});
export default MyNew;
