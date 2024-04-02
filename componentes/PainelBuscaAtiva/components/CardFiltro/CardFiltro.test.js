
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardFiltro } from './CardFiltro';

const COMPONENT = 'CardFiltro';
const setOrdenar = jest.fn();
const scenarios = [
  {
    label: 'NOME DO ACS DE A-Z',
    setOrdenar,
    ordenar: '1',
    ID: { 'NOME DO ACS DE A-Z': 'acs_nome' }
  },
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar corretamente', () => {
    render(
      <CardFiltro
        {...scenarios[0]}
      />
    );
    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  describe('Ao clicar no componente', () => {
    it('deve renderizar o card contornado', async () => {
      render(
        <CardFiltro
          {...scenarios[0]}
        />
      );
      const component = screen.getByTestId(COMPONENT);
      await userEvent.click(component);
      expect(screen.getByTestId(COMPONENT)).toMatchSnapshot();
    });

    it('deve chamar setOrdenar com o valor correto', async () => {
      render(
        <CardFiltro
          {...scenarios[0]}
        />
      );
      const component = screen.getByTestId(COMPONENT);
      await userEvent.click(component);
      expect(setOrdenar).toHaveBeenCalledWith('acs_nome');
    });
  });
});