import { jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { FiltroCard } from './PainelBuscaAtiva';

const label = 'Alessandra Santos';
const labels = 'Carmen Miranda';
const filtroId = 'acs_nome';
const handleCheckboxChange = jest.fn((event, value, setValue) => {
  const { id, checked } = event.target;
  const valueStateCopy = { ...value };
  valueStateCopy[id] = checked;
  setValue(valueStateCopy);
});

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('FiltroCard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When initial checked state is false', () => {
    describe('And labels property is not provided', () => {
      it('should render an unchecked checkbox with the provided label', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [label]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ label }
              filtroID={ filtroId }
              labels={ null }
              value={ value }
            />
          );
        };
        setup(<Wrapper />);

        const checkbox = await screen.findByRole('checkbox');
        const checkboxLabel = await screen.findByText(label);

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(checkbox).toHaveAttribute('id', label);
        expect(checkbox).toHaveAttribute('name', filtroId);
        expect(checkboxLabel).toBeInTheDocument();
      });

      it('should render a checked checkbox after clicking it', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [label]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ label }
              filtroID={ filtroId }
              labels={ null }
              value={ value }
            />
          );
        };
        const { user } = setup(<Wrapper />);
        const checkbox = await screen.findByRole('checkbox');

        await user.click(checkbox);

        expect(handleCheckboxChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
      });

      it('should render an unchecked checkbox after clicking it twice', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [label]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ label }
              filtroID={ filtroId }
              labels={ null }
              value={ value }
            />
          );
        };
        const { user } = setup(<Wrapper />);
        const checkbox = await screen.findByRole('checkbox');

        await user.click(checkbox);
        await user.click(checkbox);

        expect(handleCheckboxChange).toHaveBeenCalledTimes(2);
        expect(checkbox).not.toBeChecked();
      });

      it('should render a checkbox and the stringfied label when it is a number', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [1]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ 1 }
              filtroID={ filtroId }
              labels={ null }
              value={ value }
            />
          );
        };
        setup(<Wrapper />);

        const checkbox = await screen.findByRole('checkbox');
        const checkboxLabel = await screen.findByText('1');

        expect(checkbox).toBeInTheDocument();
        expect(checkboxLabel).toBeInTheDocument();
      });

      it('should not render a checkbox when the label is null', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [null]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ null }
              filtroID={ filtroId }
              labels={ null }
              value={ value }
            />
          );
        };
        setup(<Wrapper />);

        // const checkbox = screen.queryByRole('checkbox');

        await waitFor(() => expect(screen.queryByRole('checkbox')).not.toBeInTheDocument());
      });

      it('should not render a checkbox when the label is an empty string', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ '': false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ '' }
              filtroID={ filtroId }
              labels={ null }
              value={ value }
            />
          );
        };
        setup(<Wrapper />);

        // const checkbox = screen.queryByRole('checkbox');

        await waitFor(() => expect(screen.queryByRole('checkbox')).not.toBeInTheDocument());
      });
    });

    describe('And labels property is provided', () => {
      it('should render its content if label property is not provided', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [label]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ '' }
              filtroID={ filtroId }
              labels={ labels }
              value={ value }
            />
          );
        };
        setup(<Wrapper />);

        const checkboxLabel = await screen.findByText(labels);

        expect(checkboxLabel).toBeInTheDocument();
      });

      it('should render its content even if label property is provided', async () => {
        const Wrapper = () => {
          const [value, setValue] = useState({ [label]: false });
          return (
            <FiltroCard
              handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
              label={ label }
              filtroID={ filtroId }
              labels={ labels }
              value={ value }
            />
          );
        };
        setup(<Wrapper />);

        expect(await screen.findByText(labels)).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByText(label)).not.toBeInTheDocument());
      });
    });
  });

  describe('When initial checked state is true', () => {
    it('should render a checked checkbox with the provided label', async () => {
      const Wrapper = () => {
        const [value, setValue] = useState({ [label]: true });
        return (
          <FiltroCard
            handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
            label={ label }
            filtroID={ filtroId }
            labels={ null }
            value={ value }
          />
        );
      };
      setup(<Wrapper />);

      const checkbox = await screen.findByRole('checkbox');
      const checkboxLabel = await screen.findByText(label);

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
      expect(checkbox).toHaveAttribute('id', label);
      expect(checkbox).toHaveAttribute('name', filtroId);
      expect(checkboxLabel).toBeInTheDocument();
    });

    it('should render an unchecked checkbox after clicking it', async () => {
      const Wrapper = () => {
        const [value, setValue] = useState({ [label]: true });
        return (
          <FiltroCard
            handleCheckbox={ (event) => handleCheckboxChange(event, value, setValue) }
            label={ label }
            filtroID={ filtroId }
            labels={ null }
            value={ value }
          />
        );
      };
      const { user } = setup(<Wrapper />);
      const checkbox = await screen.findByRole('checkbox');

      await user.click(checkbox);

      expect(handleCheckboxChange).toHaveBeenCalledTimes(1);
      expect(checkbox).not.toBeChecked();
    });
  });
});
