import { StyleSheet } from 'react-native';

import { ThemesEnum } from '@/shared/store/theme/types';
import { ThemeOverride } from '@/shared/styles/theme';

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
    closeIcon: {
      position: 'absolute',
      right: 18,
      top: 18,
      color: theme.dark ? theme.colors.outline : theme.colors.secondary,
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    confirmText: {
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: 21.33,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 32,
      justifyContent: 'space-between',
    },
    button: {
      marginRight: 20,
      borderRadius: 8,
      minWidth: 125,
    },
    deleteButton: {
      borderRadius: 8,
      minWidth: 125,
    },
    cancelText: {
      color: theme.dark ? theme.colors.white.primary : theme.colors.primary,
      fontSize: 14,
      fontWeight: '400',
    },
    deleteText: {
      color: theme.colors.onPrimary,
      fontSize: 14,
      fontWeight: '400',
    },
  });

export default styles;
