import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), props.color && {color: props.color}]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
        {props.title}
      </Text>
    </View>
  );
};

Header.defaultProps = {
  title: '',
  type: 1,
  color: '#000000',
};
Header.propTypes = {
  title: PropTypes.string,
  types: PropTypes.number,
  color: PropTypes.string,
  numberOfLines: PropTypes.number,
};
export default Header;
