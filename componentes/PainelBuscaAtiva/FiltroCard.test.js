import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroCard } from './PainelBuscaAtiva';

const setCheckedValue = jest.fn();
const falseCheckedState = { 'Alessandra Santos': false };
const trueCheckedState = { 'Alessandra Santos': true };
const label = 'Alessandra Santos';
const labels = 'Carmen Miranda';
const filtroId = 'acs_nome';

function handleCheckbox(event) {
  const { checked } = event.target;
  setCheckedValue(checked);
};

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

// CASOS DE TESTE
// 1. Deve renderizar um checkbox desmarcado com um label ao passar value = false - OK
// 2. Deve chamar setValue com checked = true quando clicar no checkbox - OK
// 3. Deve chamar setValue com checked = false quando clicar no checkbox duas vezes (TALVEZ)
// 4. Deve renderizar um checkbox marcado com um label ao passar value = true - OK
// 5. Deve chamar setValue com checked = false quando clicar no checkbox - OK
// 6. Deve exibir a label correta quando labels for passado sozinho - OK
// 7. Deve exibir a label correta quando labels for passado e label também - OK
// 8. Não deve exibir checkbox quando a label for nula - OK
// 9. Deve exibir o valor numérico quando a label for numérica - OK

describe('FiltroCard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When starting with false checked value', () => {
    it('should render an unchecked checkbox with the provided label', async () => {
      setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ label }
          filtroID={ filtroId }
          labels={ null }
          value={ falseCheckedState }
        />
      );

      const checkbox = await screen.findByRole('checkbox');
      const checkboxLabel = await screen.findByText(label);

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
      expect(checkbox).toHaveAttribute('id', label);
      expect(checkbox).toHaveAttribute('name', filtroId);
      expect(checkboxLabel).toBeInTheDocument();
    });

    it('should call setValue with checked value = true when clicking the checkbox', async () => {
      const { user } = setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ label }
          filtroID={ filtroId }
          labels={ null }
          value={ falseCheckedState }
        />
      );
      const checkbox = await screen.findByRole('checkbox');

      await user.click(checkbox);

      expect(setCheckedValue).toHaveBeenCalledTimes(1);
      expect(setCheckedValue).toHaveBeenCalledWith(true);
    });
  });

  describe('When starting with true checked value', () => {
    it('should render a checked checkbox with the provided label', async () => {
      setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ label }
          filtroID={ filtroId }
          labels={ null }
          value={ trueCheckedState }
        />
      );

      const checkbox = await screen.findByRole('checkbox');
      const checkboxLabel = await screen.findByText(label);

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
      expect(checkbox).toHaveAttribute('id', label);
      expect(checkbox).toHaveAttribute('name', filtroId);
      expect(checkboxLabel).toBeInTheDocument();
    });

    it('should call setValue with checked value = false when clicking the checkbox', async () => {
      const { user } = setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ label }
          filtroID={ filtroId }
          labels={ null }
          value={ trueCheckedState }
        />
      );
      const checkbox = await screen.findByRole('checkbox');

      await user.click(checkbox);

      expect(setCheckedValue).toHaveBeenCalledTimes(1);
      expect(setCheckedValue).toHaveBeenCalledWith(false);
    });
  });

  describe('When the labels property is provided', () => {
    it('should render its content if label property is not provided', async () => {
      setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ null }
          filtroID={ filtroId }
          labels={ labels }
          value={ falseCheckedState }
        />
      );

      const checkboxLabel = await screen.findByText(labels);

      expect(checkboxLabel).toBeInTheDocument();
    });

    it('should render its content even if label property is provided', async () => {
      setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ label }
          filtroID={ filtroId }
          labels={ labels }
          value={ falseCheckedState }
        />
      );

      expect(await screen.findByText(labels)).toBeInTheDocument();
      expect(screen.queryByText(label)).not.toBeInTheDocument();
    });
  });

  describe('When providing non string label', () => {
    it('should not render when the value is null', () => {
      setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ null }
          filtroID={ filtroId }
          labels={ null }
          value={ falseCheckedState }
        />
      );

      const checkbox = screen.queryByRole('checkbox');

      expect(checkbox).not.toBeInTheDocument();
    });

    it('should render when the value is a number', async () => {
      setup(
        <FiltroCard
          handleCheckbox={ handleCheckbox }
          label={ 1 }
          filtroID={ filtroId }
          labels={ null }
          value={ falseCheckedState }
        />
      );

      const checkbox = await screen.findByRole('checkbox');
      const checkboxLabel = await screen.findByText('1');

      expect(checkbox).toBeInTheDocument();
      expect(checkboxLabel).toBeInTheDocument();
    });
  });
});
