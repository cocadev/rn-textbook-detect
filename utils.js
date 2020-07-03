
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class UtilService {

    static customWidth(item, position) {
        var zoom = position.scale * width / 1017
        var dx1 = item.bounding_box_data[1].x
        var dx0 = item.bounding_box_data[0].x
        return zoom * (dx1 - dx0)
    }

    static customHeight(item, position) {
        var zoom = position.scale * width / 1017
        var dy1 = item.bounding_box_data[1].y
        var dy2 = item.bounding_box_data[2].y
        return zoom * (dy2 - dy1)
    }

    static customLeft(item, position) {


        var zoom = position.scale * width / 1017
        var dx0 = item.bounding_box_data[0].x
        return zoom * dx0 - (width * ( position.scale - 1) / 2) + (position.positionX) * position.scale
    }

    static customTop(item, position) {

        
        var scaleX = width / 1017;
        var scaleY = height / 1403;
        var scale = Math.min(scaleX, scaleY);
        var offsetY = (height - scale * 1403) / 2;

        var zoom = position.scale * width / 1017
        var dy0 = item.bounding_box_data[0].y
        return zoom * dy0 - (width * ( position.scale - 1) / 1.45) + (position.positionY) * position.scale  + offsetY
    }
}

export default UtilService
