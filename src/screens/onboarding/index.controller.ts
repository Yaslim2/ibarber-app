import { useState } from 'react';

import {
  MainStackTypes,
  OnboardingStackTypes,
} from '@/shared/types/navigation';

const useController = ({ navigation }: OnboardingStackTypes.RoutesProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentBoard, setCurrentBoard] = useState<
    'BoardingOne' | 'BoardingTwo' | 'BoardingThree'
  >('BoardingOne');
  const boardingTexts = {
    BoardingOne: {
      title: 'Encontre a melhor barbearia\nnas proximidades',
      subtitle:
        'Pesquise facilmente suas melhores e favoritas barbearias em qualquer lugar próximo',
    },
    BoardingTwo: {
      title: 'Não precisa aguardar em filas chatas, é só ficar em casa',
      subtitle:
        'Aguardando sua vez confortavelmente em casa e informaremos sobre sua vez',
    },
    BoardingThree: {
      title: 'Tudo que você precisa para suas necessidades de barbeiro',
      subtitle:
        'Sinta-se à vontade para fazer o agendamento e aguardar sua vez com o iBarber',
    },
  };

  const handleNextPage = () => {
    if (currentBoard !== 'BoardingThree' && currentPage !== 2) {
      setCurrentBoard(
        currentBoard === 'BoardingOne' ? 'BoardingTwo' : 'BoardingThree',
      );
      setCurrentPage(currentPage + 1);
    } else {
      navigation.reset({
        routes: [{ name: MainStackTypes.Routes.Authentication }],
      });
    }
  };

  return {
    boardingTexts,
    currentBoard,
    setCurrentBoard,
    currentPage,
    setCurrentPage,
    handleNextPage,
  };
};

export default useController;
