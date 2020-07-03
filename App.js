import React from 'react';
import { Image, StyleSheet, View, YellowBox, Dimensions, TouchableOpacity } from 'react-native';
import UtilService from './utils.js';
import ImageZoom from 'react-native-image-pan-zoom';

const { width, height } = Dimensions.get('window');
const data = require('./data.json');

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
]);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      position: {
        positionX: 0,
        positionY: 0,
        scale: 1,
        type: 'onPanResponderMove',
        zoomCurrentDistance: 154.9
      }
    }
  }

  render() {
    const { position } = this.state;
    console.log('- ', position)
    return (
      <View>
        <ImageZoom
          cropWidth={width}
          cropHeight={height}
          imageWidth={width}
          imageHeight={width * 1403 / 1017}
          minScale={1}
          maxScale={10}
          onMove={(position) => {
            this.setState({ position })
          }}
          style={styles.zoomImg}
        >
          <Image
            style={{ width: width, height: width * 1403 / 1017 }}
            source={require('./imageExample.jpeg')}
          />
        </ImageZoom>

        {
          data.bounding_data.word_data.map((item, index) =>
            <TouchableOpacity
              onPress={()=>alert(item.text)}
              key={index}
              style={[styles.box, {
                width: UtilService.customWidth(item, position),
                height: UtilService.customHeight(item, position),
                top: UtilService.customTop(item, position),
                left: UtilService.customLeft(item, position)
              }]}
            >
            </TouchableOpacity>)
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  zoomImg: {
    backgroundColor: 'pink',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'
  },
  box: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'blue',
    opacity: 0.3
  }
});

export default App;