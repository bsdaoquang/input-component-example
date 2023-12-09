import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  text: string;
  color?: string;
  size?: number;
  height?: number;
  line?: number;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  flex?: number;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const {text, color, size, height, line, weight, flex, styles} = props;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? '#212121',
          fontSize: size ?? 14,
          lineHeight: height ? height : size ? size + 6 : 19,
          fontWeight: weight ?? 'normal',
        },
        styles,
      ]}
      numberOfLines={line}>
      {text}
    </Text>
  );
};

export default TextComponent;
