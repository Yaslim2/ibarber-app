import { useState } from 'react';

import { MainStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: MainStackTypes.RouteProps<MainStackTypes.Routes.Onboarding>) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentBoard, setCurrentBoard] = useState<
    'BoardingOne' | 'BoardingTwo' | 'BoardingThree' | 'GetStarted'
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
    GetStarted: {
      title: 'Pronto para começar?',
      subtitle:
        'Cadastre-se ou entre em sua conta para aproveitar os benefícios do iBarber.',
    },
  };

  const handleNextPage = (route?: 'SignUp' | 'Login') => {
    if (currentBoard !== 'GetStarted' && currentPage !== 3) {
      setCurrentBoard(
        currentBoard === 'BoardingOne'
          ? 'BoardingTwo'
          : currentBoard === 'BoardingTwo'
          ? 'BoardingThree'
          : 'GetStarted',
      );
      setCurrentPage(currentPage + 1);
    } else {
      navigation.reset({
        routes: [{ name: MainStackTypes.Routes[route!] }],
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
