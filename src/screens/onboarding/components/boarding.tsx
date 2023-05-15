import React, { FC } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingOne from '@/assets/svg/boarding-one.svg';
import ButtonBoardingHalfPercent from '@/assets/svg/button-boarding-half-percent.svg';

import useController from 'src/screens/onboarding/index.controller';

const Boarding: FC = () => {
  const { boardingTexts, currentBoard, setCurrentBoard } = useController();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          marginTop: StatusBar.currentHeight + 20,
          marginHorizontal: 20,
          flex: 1,
        }}
      >
        <View style={{ alignItems: 'flex-end' }}>
          <Text>Pular</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <View />
          <View>
            <BoardingOne />
            <Text style={{ fontFamily: 'Sk-Modernist-Regular' }}>
              {boardingTexts.BoardingOne.title}
            </Text>
            <Text>{boardingTexts.BoardingOne.subtitle}</Text>
          </View>

          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <PaginationDot
              inactiveDotColor="#868282c1"
              activeDotColor="#FE9034"
              curPage={currentBoard}
              maxPage={3}
            />
            <TouchableOpacity
              style={{ marginTop: 35 }}
              onPress={() => {
                setCurrentBoard(currentBoard + 1);
              }}
            >
              <ButtonBoardingHalfPercent />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Boarding;
