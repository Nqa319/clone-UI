import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import MyFeature from './src/components/MyFeature';
import MyNew from './src/components/MyNew';
const {height, width} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.header}>
        <Image
          source={require('./src/assets/image/fb-logo.png')}
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <View style={styles.headerViewIcon}>
            <Image
              source={require('./src/assets/icon/search.png')}
              style={styles.headerIcon}
            />
          </View>
          <View style={styles.headerViewIcon}>
            <Image
              source={require('./src/assets/icon/messenger.png')}
              style={styles.headerIcon}
            />
          </View>
        </View>
      </View>
      <View style={styles.userView}>
        <Image
          source={require('./src/assets/image/user.jpg')}
          style={styles.user}
        />
        <Text style={styles.textUser}>Bạn đang nghĩ gì?</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MyFeature
          icon={require('./src/assets/icon/live.png')}
          title="Phát trực tiếp"
        />
        <MyFeature icon={require('./src/assets/icon/album.png')} title="Ảnh" />
        <MyFeature
          icon={require('./src/assets/icon/checkin.png')}
          title="Check in"
        />
      </View>
    </View>
  );
};

const New = () => {
  return (
    <View style={styles.view2}>
      <MyNew
        image={require('./src/assets/image/new1.jpg')}
        user={require('./src/assets/image/user.jpg')}
        title="Nguyen Quang Anh"
      />
      <MyNew
        image={require('./src/assets/image/new1.jpg')}
        user={require('./src/assets/image/user.jpg')}
        title="Nguyen Quang Anh"
      />
      <MyNew
        image={require('./src/assets/image/new1.jpg')}
        user={require('./src/assets/image/user.jpg')}
        title="Nguyen Quang Anh"
      />
      <MyNew
        image={require('./src/assets/image/new1.jpg')}
        user={require('./src/assets/image/user.jpg')}
        title="Nguyen Quang Anh"
      />
    </View>
  );
};

const ListUser = () => {
  return (
    <View style={styles.view3}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./src/assets/image/user.jpg')}
            style={styles.user2}
          />
          <View style={{padding: 10}}>
            <Text style={{fontWeight: 'bold'}}>Nguyen Thi Nhung</Text>
            <Text>26 phút</Text>
          </View>
        </View>
        <Image
          source={require('./src/assets/icon/more.png')}
          style={{height: 15, width: 15, margin: 10}}
        />
      </View>
      <View>
        <Text style={{marginLeft: 10, marginBottom: 10}}>
          Xin chao moi nguoi.
        </Text>
        <Image
          source={require('./src/assets/image/user.jpg')}
          style={{width: '100%'}}
        />
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
        <New />
        <ListUser />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'lightgray'},
  view1: {backgroundColor: 'white', marginBottom: 10},
  view2: {backgroundColor: 'white', flexDirection: 'row', marginBottom: 10},
  view3: {
    backgroundColor: 'white',
  },
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  logo: {height: 30, width: 150, resizeMode: 'center', margin: 10},
  headerRight: {flexDirection: 'row', margin: 10},
  headerViewIcon: {
    backgroundColor: 'lavender',
    borderRadius: 25,
    padding: 5,
    marginHorizontal: 4,
  },
  headerIcon: {height: 30, width: 30},
  user: {width: 50, height: 50, borderRadius: 25, marginLeft: 10},
  textUser: {fontSize: 18, alignSelf: 'center', marginLeft: 10},
  userView: {
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'lavender',
  },
  news: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  imgnews: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  user2: {width: 50, height: 50, borderRadius: 25, margin: 10},
});
