import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Circle } from './styles';

const Checkbox = ({ value, color, style = {} }) => {
  return value ? (
    <Icon
      name="ios-checkmark-circle"
      size={34}
      color={color}
      style={{
        marginTop: -3.4,
        marginBottom: -7.2,
        marginRight: -1,
        ...style.icon,
      }}
    />
  ) : (
    <Circle style={style.circle} />
  );
};

export default Checkbox;
