import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroBody } from './FiltroBody';

const COMPONENT = 'FiltroBody';
const OPTION_1 = 'Alessandra Santos';
const OPTION_2 = 'Carmen Miranda';
const LABEL_1 = 'ACS 3';
const LABEL_2 = 'ACS 2';
const FILTER_PROPERTY = 'acs_nome';
const FILTER_LABEL = 'Filtrar por nome do Profissional Responsável';
const scenarios = [
  {
    data: {
      data: [OPTION_1, OPTION_2],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL
    },
  },
  {
    data: {
      data: [OPTION_2, OPTION_1],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL
    },
  },
  {
    data: {
      data: [OPTION_1, OPTION_2],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL,
      labels: [LABEL_1, LABEL_2]
    },
  },
  {
    data: {
      data: ['1', '0'],
      filtro: FILTER_PROPERTY,
      rotulo: FILTER_LABEL,
      labels: [LABEL_1, LABEL_2]
    },
  },
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar o nome do filtro e o botão de mostrar opções', async () => {
    render(<FiltroBody { ...scenarios[0] } />);

    const component = await screen.findByTestId(COMPONENT);

    expect(component).toMatchSnapshot();
  });

  describe('Ao clicar no botão de mostrar opções de filtro', () => {
    it('deve renderizar o nome do filtro e o botão de esconder opções', async () => {
      const user = userEvent.setup();

      render(<FiltroBody { ...scenarios[1] } />);

      const showOptionsButton = screen.getByRole('button', { name: '+' });
      await act(async () => await user.click(showOptionsButton));

      expect(screen.getByText(FILTER_LABEL)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    });

    it('deve renderizar todas as opções de filtro em ordem crescente quando são strings não numéricas', async () => {
      const user = userEvent.setup();

      render(<FiltroBody { ...scenarios[1] } />);

      const showOptionsButton = screen.getByRole('button', { name: '+' });
      await act(async () => await user.click(showOptionsButton));

      const options = screen.getAllByTestId('FiltroCardLabel');

      expect(options).toHaveLength(2);
      expect(options[0]).toHaveTextContent(OPTION_1);
      expect(options[1]).toHaveTextContent(OPTION_2);
    });

    it('deve renderizar todas as opções de filtro em ordem crescente de valor quando são strings numéricas', async () => {
      const user = userEvent.setup();

      render(<FiltroBody { ...scenarios[3] } />);

      const showOptionsButton = screen.getByRole('button', { name: '+' });
      await act(async () => await user.click(showOptionsButton));

      const options = screen.getAllByTestId('FiltroCardLabel');

      expect(options).toHaveLength(2);
      expect(options[0]).toHaveTextContent(LABEL_1);
      expect(options[1]).toHaveTextContent(LABEL_2);
    });
  });

  describe('Ao passar a propriedade labels', () => {
    describe('Quando as opções de filtro são strings não numéricas', () => {
      it('não deve exibir as labels no lugar das opções', async () => {
        const user = userEvent.setup();

        render(<FiltroBody { ...scenarios[2] } />);

        const showOptionsButton = screen.getByRole('button', { name: '+' });
        await act(async () => await user.click(showOptionsButton));

        expect(screen.getByText(OPTION_1)).toBeInTheDocument();
        expect(screen.getByText(OPTION_2)).toBeInTheDocument();
        expect(screen.queryByText(LABEL_1)).not.toBeInTheDocument();
        expect(screen.queryByText(LABEL_2)).not.toBeInTheDocument();
      });
    });

    describe('Quando as opções de filtro são strings numéricas', () => {
      it('deve exibir as labels no lugar das opções', async () => {
        const user = userEvent.setup();

        render(<FiltroBody { ...scenarios[3] } />);

        const showOptionsButton = screen.getByRole('button', { name: '+' });
        await act(async () => await user.click(showOptionsButton));

        expect(screen.getByText(LABEL_1)).toBeInTheDocument();
        expect(screen.getByText(LABEL_2)).toBeInTheDocument();
        expect(screen.queryByText('1')).not.toBeInTheDocument();
        expect(screen.queryByText('0')).not.toBeInTheDocument();
      });
    });
  });

  describe('Ao clicar no botão de esconder opções de filtro', () => {
    it('deve exibir o nome do filtro e o botão de mostrar opções', async () => {
      const user = userEvent.setup();

      render(<FiltroBody { ...scenarios[0] } />);

      const showOptionsButton = screen.getByRole('button', { name: '+' });
      await act(async () => await user.click(showOptionsButton));

      const hideOptionsButton = screen.getByRole('button', { name: '-' });
      await act(async () => await user.click(hideOptionsButton));

      expect(screen.getByText(FILTER_LABEL)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: '-' })).not.toBeInTheDocument();
    });
  });
});
