import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Text from '@/shared/components/Text';
import { ThemesEnum } from '@/shared/store/theme/types';
import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

const styles = ({
  theme,
}: {
  theme: ThemeOverride;
  actualTheme: ThemesEnum | null;
}) =>
  StyleSheet.create({
    modalContainerStyle: {
      backgroundColor: theme?.colors.surface,
      paddingVertical: 50,
      borderRadius: 16,
      marginHorizontal: 16,
    },
  });

export const CloseIcon = styled(FeatherIcon)`
  position: absolute;
  right: 18px;
  top: 18px;
  color: ${props =>
    props.theme.dark
      ? props.theme.colors.outline
      : props.theme.colors.secondary};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ConfirmText = styled(Text)`
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 32px;
  justify-content: space-between;
`;

export const CancelButton = styled(Button)`
  margin-right: 20px;
  border-radius: 8px;
  min-width: 125px;
`;

export const ConfirmButton = styled(Button)`
  border-radius: 8px;
  min-width: 125px;
`;

export default styles;
