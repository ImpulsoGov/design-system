import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroBody } from './FiltroBody';

const COMPONENT = 'FiltroBody';
const OPTION_1 = 'Alessandra Santos';
const OPTION_2 = 'Carmen Miranda';
const LABEL_1 = 'ACS 1';
const LABEL_2 = 'ACS 2';
const FILTER_PROPERTY = 'acs_nome';
const FILTER_LABEL = 'Filtrar por nome do Profissional Responsável';
const scenarios = [
  {
    data: {
      data: [OPTION_1, OPTION_2],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL
    }
  },
  {
    data: {
      data: [OPTION_2, OPTION_1],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL
    }
  },
  {
    data: {
      data: [OPTION_1, OPTION_2],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL,
      labels: [LABEL_1, LABEL_2]
    }
  },
  {
    data: {
      data: ['1', '0'],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL,
      labels: [LABEL_1, LABEL_2]
    }
  },
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar o nome do filtro e o botão de mostrar opções', async () => {
    render(<FiltroBody { ...scenarios[0] } />);
    const component = await screen.findByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  describe('Ao clicar no botão de mostrar opções de filtro', () => {
    it('deve renderizar o nome do filtro, o botão de esconder opções e as opções em ordem crescente', async () => {
      const user = userEvent.setup();
      render(<FiltroBody { ...scenarios[1] } />);
      const showOptionsButton = screen.getByRole('button', { name: '+' });
      await user.click(showOptionsButton);
      expect(screen.getByTestId(COMPONENT)).toMatchSnapshot();
    });
  });

  describe('Ao passar a propriedade labels', () => {
    describe('Quando as opções de filtro são strings não numéricas', () => {
      it('não deve exibir as labels no lugar das opções', async () => {
        const user = userEvent.setup();
        render(<FiltroBody { ...scenarios[2] } />);
        const showOptionsButton = await screen.findByRole('button', { name: '+' });
        await user.click(showOptionsButton);
        expect(screen.getByTestId(COMPONENT)).toMatchSnapshot();
      });
    });

    describe('Quando as opções de filtro são strings numéricas', () => {
      it('deve exibir as labels no lugar das opções', async () => {
        const user = userEvent.setup();
        render(<FiltroBody { ...scenarios[3] } />);
        const showOptionsButton = await screen.findByRole('button', { name: '+' });
        await user.click(showOptionsButton);
        expect(screen.getByTestId(COMPONENT)).toMatchSnapshot();
      });
    });
  });

  describe('Ao clicar no botão de esconder opções de filtro', () => {
    it('deve exibir o nome do filtro e o botão de mostrar opções', async () => {
      const user = userEvent.setup();
      render(<FiltroBody {...scenarios[0]} />);
      const showOptionsButton = await screen.findByRole('button', { name: '+' });
      await user.click(showOptionsButton);
      const hideOptionsButton = await screen.findByRole('button', { name: '-' });
      await user.click(hideOptionsButton);
      expect(screen.getByTestId(COMPONENT)).toMatchSnapshot();
    });
  });
});
