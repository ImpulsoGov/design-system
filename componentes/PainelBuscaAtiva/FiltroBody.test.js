import { jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroBody } from './PainelBuscaAtiva';

const STRING_OPTION_1 = 'Alessandra Santos';
const STRING_OPTION_2 = 'Carmen Miranda';
const FILTER_PROPERTY = 'acs_nome';
const FILTER_LABEL = 'Filtrar por nome do Profissional Responsável';
const handleCheckbox = jest.fn();

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('FiltroBody', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When first rendering', () => {
    it('should render the filter\'s label and a + button', async () => {
      setup(
        <FiltroBody
          data={ {
            data: [STRING_OPTION_1, STRING_OPTION_2],
            filtro: FILTER_PROPERTY,
            rotulo: FILTER_LABEL
          } }
          value={ {
            [STRING_OPTION_1]: false,
            [STRING_OPTION_2]: false
          } }
          handleCheckbox={ handleCheckbox }
        />
      );

      const label = await screen.findByText(FILTER_LABEL);
      const showOptionsButton = await screen.findByRole('button', { name: '+' });

      expect(label).toBeInTheDocument();
      expect(showOptionsButton).toBeInTheDocument();
    });
  });

  describe('After clicking the + button', () => {
    it('should render the filter\'s label and a - button', async () => {
      const { user } = setup(
        <FiltroBody
          data={ {
            data: [STRING_OPTION_2, STRING_OPTION_1],
            filtro: FILTER_PROPERTY,
            rotulo: FILTER_LABEL
          } }
          value={ {
            [STRING_OPTION_1]: false,
            [STRING_OPTION_2]: false
          } }
          handleCheckbox={ handleCheckbox }
        />
      );

      const label = await screen.findByText(FILTER_LABEL);
      const showOptionsButton = await screen.findByRole('button', { name: '+' });

      await user.click(showOptionsButton);

      const options = await screen.findAllByRole('checkbox');
      const hideOptionsButton = await screen.findByRole('button', { name: '-' });

      expect(label).toBeInTheDocument();
      expect(hideOptionsButton).toBeInTheDocument();
    });

    it('should render the options labels when they are provided', async () => {
      const LABEL_OPTION_1 = 'ACS 1';
      const LABEL_OPTION_2 = 'ACS 2';
      const { user } = setup(
        <FiltroBody
          data={ {
            data: [STRING_OPTION_1, STRING_OPTION_2],
            filtro: FILTER_PROPERTY,
            rotulo: FILTER_LABEL,
            labels: [LABEL_OPTION_1, LABEL_OPTION_2]
          } }
          value={ {
            [STRING_OPTION_1]: false,
            [STRING_OPTION_2]: false
          } }
          handleCheckbox={ handleCheckbox }
        />
      );

      const label = await screen.findByText(FILTER_LABEL);
      const showOptionsButton = await screen.findByRole('button', { name: '+' });

      await user.click(showOptionsButton);

      const options = await screen.findAllByRole('checkbox');
      const hideOptionsButton = await screen.findByRole('button', { name: '-' });

      expect(label).toBeInTheDocument();
      expect(hideOptionsButton).toBeInTheDocument();
      expect(options).toHaveLength(2);
      expect(await screen.findByText(LABEL_OPTION_1)).toBeInTheDocument();
      expect(await screen.findByText(LABEL_OPTION_2)).toBeInTheDocument();
    });

    describe('When clicking the - button', () => {
      it('should remove the - button and render the filter\'s label and a + button', async () => {
        const { user } = setup(
          <FiltroBody
            data={ {
              data: [STRING_OPTION_1, STRING_OPTION_2],
              filtro: FILTER_PROPERTY,
              rotulo: FILTER_LABEL
            } }
            value={ {
              [STRING_OPTION_1]: false,
              [STRING_OPTION_2]: false
            } }
            handleCheckbox={ handleCheckbox }
          />
        );

        const label = await screen.findByText(FILTER_LABEL);
        const showOptionsButton = await screen.findByRole('button', { name: '+' });

        await user.click(showOptionsButton);

        const hideOptionsButton = await screen.findByRole('button', { name: '-' });

        await user.click(hideOptionsButton);

        expect(label).toBeInTheDocument();
        expect(showOptionsButton).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByRole('button', { name: '-' })).not.toBeInTheDocument());
      });

      it('should not render the filter\'s options', async () => {
        const { user } = setup(
          <FiltroBody
            data={ {
              data: [STRING_OPTION_1, STRING_OPTION_2],
              filtro: FILTER_PROPERTY,
              rotulo: FILTER_LABEL
            } }
            value={ {
              [STRING_OPTION_1]: false,
              [STRING_OPTION_2]: false
            } }
            handleCheckbox={ handleCheckbox }
          />
        );

        const showOptionsButton = await screen.findByRole('button', { name: '+' });

        await user.click(showOptionsButton);

        const hideOptionsButton = await screen.findByRole('button', { name: '-' });

        await user.click(hideOptionsButton);

        await waitFor(() => expect(screen.queryAllByRole('checkbox')).toHaveLength(0));
      });
    });

    describe('All the filter\'s options should be in ASC order', () => {
      it('when providing strings', async () => {
        const { user } = setup(
          <FiltroBody
            data={ {
              data: [STRING_OPTION_2, STRING_OPTION_1],
              filtro: FILTER_PROPERTY,
              rotulo: FILTER_LABEL
            } }
            value={ {
              [STRING_OPTION_1]: false,
              [STRING_OPTION_2]: false
            } }
            handleCheckbox={ handleCheckbox }
          />
        );

        const showOptionsButton = await screen.findByRole('button', { name: '+' });

        await user.click(showOptionsButton);

        const options = await screen.findAllByRole('checkbox');

        expect(options).toHaveLength(2);
        expect(options[0].nextSibling).toHaveTextContent(STRING_OPTION_1);
        expect(options[1].nextSibling).toHaveTextContent(STRING_OPTION_2);
      });

      it('when providing number strings', async () => {
        const OPTION_1 = '5';
        const OPTION_2 = '56';
        const { user } = setup(
          <FiltroBody
            data={ {
              data: [OPTION_2, OPTION_1],
              filtro: FILTER_PROPERTY,
              rotulo: FILTER_LABEL
            } }
            value={ {
              [OPTION_1]: false,
              [OPTION_2]: false
            } }
            handleCheckbox={ handleCheckbox }
          />
        );

        const showOptionsButton = await screen.findByRole('button', { name: '+' });

        await user.click(showOptionsButton);

        const options = await screen.findAllByRole('checkbox');

        expect(options).toHaveLength(2);
        expect(options[0].nextSibling).toHaveTextContent(OPTION_1);
        expect(options[1].nextSibling).toHaveTextContent(OPTION_2);
      });

      it('when providing numbers', async () => {
        const OPTION_1 = 5;
        const OPTION_2 = 56;
        const { user } = setup(
          <FiltroBody
            data={ {
              data: [OPTION_2, OPTION_1],
              filtro: FILTER_PROPERTY,
              rotulo: FILTER_LABEL
            } }
            value={ {
              [OPTION_1]: false,
              [OPTION_2]: false
            } }
            handleCheckbox={ handleCheckbox }
          />
        );

        const showOptionsButton = await screen.findByRole('button', { name: '+' });

        await user.click(showOptionsButton);

        const options = await screen.findAllByRole('checkbox');

        expect(options).toHaveLength(2);
        expect(options[0].nextSibling).toHaveTextContent(String(OPTION_1));
        expect(options[1].nextSibling).toHaveTextContent(String(OPTION_2));
      });
    });
  });
});
