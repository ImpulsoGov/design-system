import { jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { FiltroCard } from './PainelBuscaAtiva';

// TODO remover Wrapper

const LABEL = 'Alessandra Santos';
const LABELS = 'Carmen Miranda';
const FILTRO_ID = 'acs_nome';
const handleCheckboxChange = jest.fn((event, value, setValue) => {
  const { id, checked } = event.target;
  const valueStateCopy = { ...value };
  valueStateCopy[id] = checked;
  setValue(valueStateCopy);
});

describe('Componente: FiltroCard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Quando o estado inicial do checkbox é false', () => {
    describe('E a propriedade labels não é passada', () => {
      it('deve exibir um checkbox desmarcado com a label correta', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [LABEL]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ LABEL }
              filtroID={ FILTRO_ID }
              labels={ null }
              value={ value }
            />
          );
        };
        render(<Wrapper />);

        const checkbox = await screen.findByRole('checkbox');
        const checkboxLabel = await screen.findByText(LABEL);

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(checkbox).toHaveAttribute('id', LABEL);
        expect(checkbox).toHaveAttribute('name', FILTRO_ID);
        expect(checkboxLabel).toBeInTheDocument();
      });

      it('deve exibir um checkbox marcado após o click', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [LABEL]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ LABEL }
              filtroID={ FILTRO_ID }
              labels={ null }
              value={ value }
            />
          );
        };
        const user = userEvent.setup();
        render(<Wrapper />);
        const checkbox = await screen.findByRole('checkbox');

        await user.click(checkbox);

        expect(handleCheckboxChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
      });

      it('deve exibir um checkbox desmarcado após clicar duas vezes', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [LABEL]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ LABEL }
              filtroID={ FILTRO_ID }
              labels={ null }
              value={ value }
            />
          );
        };
        const user = userEvent.setup();
        render(<Wrapper />);
        const checkbox = await screen.findByRole('checkbox');

        await user.click(checkbox);
        await user.click(checkbox);

        expect(handleCheckboxChange).toHaveBeenCalledTimes(2);
        expect(checkbox).not.toBeChecked();
      });

      it('deve exibir um checkbox e uma string numérica quando a label é um número', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [1]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ 1 }
              filtroID={ FILTRO_ID }
              labels={ null }
              value={ value }
            />
          );
        };
        render(<Wrapper />);

        const checkbox = await screen.findByRole('checkbox');
        const checkboxLabel = await screen.findByText('1');

        expect(checkbox).toBeInTheDocument();
        expect(checkboxLabel).toBeInTheDocument();
      });

      it('não deve exibir um checkbox quando a label é nula', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [null]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ null }
              filtroID={ FILTRO_ID }
              labels={ null }
              value={ value }
            />
          );
        };
        render(<Wrapper />);

        await waitFor(() => expect(screen.queryByRole('checkbox')).not.toBeInTheDocument());
      });

      it('não deve exibir um checkbox quando a label é uma string vazia', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ '': false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ '' }
              filtroID={ FILTRO_ID }
              labels={ null }
              value={ value }
            />
          );
        };
        render(<Wrapper />);

        await waitFor(() => expect(screen.queryByRole('checkbox')).not.toBeInTheDocument());
      });
    });

    describe('E a propriedade labels é passada', () => {
      it('deve exibir seu conteúdo quando a propriedade label não é passada', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [LABEL]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ '' }
              filtroID={ FILTRO_ID }
              labels={ LABELS }
              value={ value }
            />
          );
        };
        render(<Wrapper />);

        const checkboxLabel = await screen.findByText(LABELS);

        expect(checkboxLabel).toBeInTheDocument();
      });

      it('deve exibir seu conteúdo quando a propriedade label é passada', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [LABEL]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ LABEL }
              filtroID={ FILTRO_ID }
              labels={ LABELS }
              value={ value }
            />
          );
        };
        render(<Wrapper />);

        expect(await screen.findByText(LABELS)).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByText(LABEL)).not.toBeInTheDocument());
      });
    });
  });

  describe('Quando o estado inicial do checkbox é true', () => {
    it('deve exibir um checkbox marcado com a label correta', async () => {
      const Wrapper = () => {
        const [value, setValue] = useState({ [LABEL]: true });
        return (
          <FiltroCard
            handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
            label={ LABEL }
            filtroID={ FILTRO_ID }
            labels={ null }
            value={ value }
          />
        );
      };
      render(<Wrapper />);

      const checkbox = await screen.findByRole('checkbox');
      const checkboxLabel = await screen.findByText(LABEL);

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
      expect(checkbox).toHaveAttribute('id', LABEL);
      expect(checkbox).toHaveAttribute('name', FILTRO_ID);
      expect(checkboxLabel).toBeInTheDocument();
    });

    it('deve exibir um checkbox desmarcado após click', async () => {
      const Wrapper = () => {
        const [value, setValue] = useState({ [LABEL]: true });
        return (
          <FiltroCard
            handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
            label={ LABEL }
            filtroID={ FILTRO_ID }
            labels={ null }
            value={ value }
          />
        );
      };
      const user = userEvent.setup();
      render(<Wrapper />);
      const checkbox = await screen.findByRole('checkbox');

      await user.click(checkbox);

      expect(handleCheckboxChange).toHaveBeenCalledTimes(1);
      expect(checkbox).not.toBeChecked();
    });
  });
});
