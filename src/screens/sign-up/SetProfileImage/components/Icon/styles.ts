import { TouchableRipple } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const Icon = styled(TouchableRipple)`
  align-self: center;
  margin-bottom: 32px;
  border-style: solid;
  border-width: 6px;
  border-color: ${props =>
    props.theme.dark
      ? props.theme.colors.onPrimary
      : props.theme.colors.primary};
  border-radius: 200px;
  margin-top: 8px;
`;

export const Indicator = styled.ActivityIndicator`
  margin: 74px;
`;

export const CameraIcon = styled(FeatherIcon)`
  margin: 48px;
  color: ${props =>
    props.theme.dark
      ? props.theme.colors.onPrimary
      : props.theme.colors.primary};
`;
