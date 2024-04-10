
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardFiltro } from './CardFiltro';

const COMPONENT = 'CardFiltro';
const scenarios = [
  {
    label: 'NOME DO ACS DE A-Z',
    isSelected: false,
    sortProperty: 'acs_nome',
    setOrdenar: jest.fn(),
  },
  {
    label: 'NOME DO ACS DE A-Z',
    isSelected: true,
    sortProperty: 'acs_nome',
    setOrdenar: jest.fn(),
  },
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar corretamente', () => {
    render(<CardFiltro { ...scenarios[0] } />);

    const component = screen.getByTestId(COMPONENT);

    expect(component).toMatchSnapshot();
  });

  it('deve exibir o card com borda quando ele está selecionado', () => {
    render(<CardFiltro { ...scenarios[1] } />);

    const component = screen.getByTestId(COMPONENT);

    expect(component.style).toHaveProperty('border');
  });

  it('deve chamar setOrdenar com o valor correto após ser clicado', async () => {
    const user = userEvent.setup();
    render(<CardFiltro { ...scenarios[0] } />);

    const component = screen.getByTestId(COMPONENT);
    await user.click(component);

    expect(scenarios[0].setOrdenar).toHaveBeenCalledWith('acs_nome');
  });
});