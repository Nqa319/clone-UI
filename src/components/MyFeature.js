import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const MyFeature = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.icon} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRightWidth: 1,
    borderColor: 'lavender',
  },
  img: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  text: {
    fontSize: 13,
    fontWeight: '900'
  },
});
export default MyFeature;
