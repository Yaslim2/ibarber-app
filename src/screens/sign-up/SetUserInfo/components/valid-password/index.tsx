import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Text from '@/shared/components/Text';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import validPasswordStyles from './styles';

const ValidPassword: FC<{ password: string }> = ({ password }) => {
  const theme = useTheme() as ThemeOverride;
  const styles = validPasswordStyles(theme, password);

  return (
    <View style={styles.container}>
      <View style={styles.lengthValidation}>
        <Text font="secondary" weight="bold" style={styles.lengthText}>
          <AntDesign
            name="checkcircleo"
            size={12}
            color={styles.lengthIcon.color}
          />
          &nbsp;8 Caracteres
        </Text>
      </View>
      <View style={styles.uppercaseValidation}>
        <Text font="secondary" weight="bold" style={styles.uppercaseText}>
          <AntDesign
            name="checkcircleo"
            size={12}
            color={styles.uppercaseIcon.color}
          />
          &nbsp;1 Letra maiúscula
        </Text>
      </View>
      <View style={styles.lowercaseValidation}>
        <Text font="secondary" weight="bold" style={styles.lowercaseText}>
          <AntDesign
            name="checkcircleo"
            size={12}
            color={styles.lowercaseIcon.color}
          />
          &nbsp;1 Letra minúscula
        </Text>
      </View>
      <View style={styles.numberValidation}>
        <Text font="secondary" weight="bold" style={styles.numberText}>
          <AntDesign
            name="checkcircleo"
            size={12}
            color={styles.numberIcon.color}
          />
          &nbsp;1 Número
        </Text>
      </View>
      <View style={styles.specialValidation}>
        <Text font="secondary" weight="bold" style={styles.specialText}>
          <AntDesign
            name="checkcircleo"
            size={12}
            color={styles.specialIcon.color}
          />
          &nbsp;1 Caractere especial
        </Text>
      </View>
    </View>
  );
};

export default ValidPassword;
