import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { FiltroCard } from './FiltroCard';
import { FiltroCard } from '../../PainelBuscaAtiva';

const COMPONENT = 'FiltroCard';
const scenarios = [
  { label: 'Tainá', filtroID: 'acs_nome', value: { 'Tainá': false } },
  { label: 'Alessandra Santos', filtroID: 'acs_nome', value: { 'Alessandra Santos': false } },
  { label: '3', filtroID: 'acs_nome', value: { '3': false } },
];

describe(`Componete: ${COMPONENT}`, () => {
  it('deve renderizar corretamente', async () => {
    render(<FiltroCard { ...scenarios[0] } />);
    const component = screen.getByTestId(COMPONENT);

    expect(component).toMatchSnapshot();
  });

  it('deve exibir um checkbox marcado após o click', async () => {
    const user = userEvent.setup();
    render(<FiltroCard { ...scenarios[1] } />);
    const checkbox = await screen.findByRole('checkbox');

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('deve exibir um checkbox desmarcado após dois clicks', async () => {
    const user = userEvent.setup();
    render(<FiltroCard { ...scenarios[2] } />);
    const checkbox = await screen.findByRole('checkbox');

    await user.click(checkbox);
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
