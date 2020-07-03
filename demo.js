/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import UtilService from './utils.js';
import ImageZoom from 'react-native-image-pan-zoom';

const { height, width } = Dimensions.get('window');


const data = require('./data.json');
class App extends React.Component {
  componentDidMount() {
    console.log(data);
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <ImageZoom cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={width}
            imageHeight={width * 1403 / 1017}>
            <Image
              style={{ width: width, height: width * 1403 / 1017 }}
              source={require('./imageExample.jpeg')}
            />
          </ImageZoom>


          {
            data.bounding_data.word_data.map((item, index) =>
              <View
                key={index}
                style={[styles.container, {
                  width: UtilService.customWidth(item),
                  height: UtilService.customHeight(item),
                  top: UtilService.customTop(item),
                  left: UtilService.customLeft(item)
                }]}
              >
                {/* <Text>{item.text}</Text> */}
              </View>)
          }

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'blue',
    opacity: 0.7
  }
});

export default App;
