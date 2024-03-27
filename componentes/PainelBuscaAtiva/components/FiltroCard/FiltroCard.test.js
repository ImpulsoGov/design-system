import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroCard } from './FiltroCard';

const COMPONENT_NAME = 'FiltroCard';
const scenarios = [
  { label: 'Tainá', filtroID: 'acs_nome' },
  { label: 'Alessandra Santos', filtroID: 'acs_nome' },
  { label: '3', filtroID: 'acs_nome' },
];

describe(`Componete: ${COMPONENT_NAME}`, () => {
  it('deve renderizar corretamente', async () => {
    const component = render(<FiltroCard { ...scenarios[0] } />);
    const filtroCard = component.getByTestId(COMPONENT_NAME);

    expect(filtroCard).toMatchSnapshot();
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
