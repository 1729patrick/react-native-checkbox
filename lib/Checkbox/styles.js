import styled from 'styled-components/native';
import Checkbox from '@react-native-community/checkbox';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.disabled ? '0.6' : 1)};
  margin-top: ${props => props.marginTop ?? 0}px;
`;

export const Label = styled.Text`
  margin: ${props => (props.left ? '0 10px 0 0' : '0 0 0 10px')};
`;

export const Switch = styled.Switch``;

export const CheckBox = styled(Checkbox)`
  margin: -2px -7px;
  padding: 0;
`;
