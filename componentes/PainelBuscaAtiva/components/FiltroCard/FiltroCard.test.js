import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroCard } from './FiltroCard';

const COMPONENT = 'FiltroCard';
const scenarios = [
  { label: 'Tainá', filtroID: 'acs_nome', id: '5' },
  { label: 'Alessandra Santos', filtroID: 'acs_nome', id: 'Alessandra Santos' },
  { filtroID: 'acs_nome', id: 'ACS' },
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
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    await act(async () => {
      await user.click(screen.getByRole('checkbox'));
    });

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('deve exibir um checkbox desmarcado após dois clicks', async () => {
    const user = userEvent.setup();
    render(<FiltroCard { ...scenarios[2] } />);

    await act(async () => {
      await user.click(screen.getByRole('checkbox'));
      await user.click(screen.getByRole('checkbox'));
    });

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});
