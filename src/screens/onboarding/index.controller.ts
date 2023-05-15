import { useState } from 'react';

const useController = () => {
  const [currentBoard, setCurrentBoard] = useState(0);
  const boardingTexts = {
    BoardingOne: {
      title: 'Encontre a melhor barbearia nas proximidades',
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

  return {
    boardingTexts,
    currentBoard,
    setCurrentBoard,
  };
};

export default useController;
