import { jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroBody } from './PainelBuscaAtiva';

const STRING_OPTION_1 = 'Alessandra Santos';
const STRING_OPTION_2 = 'Carmen Miranda';
const FILTER_PROPERTY = 'acs_nome';
const FILTER_LABEL = 'Filtrar por nome do Profissional Responsável';
const handleCheckbox = jest.fn();

describe('Componente: FiltroBody', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Quando renderizado', () => {
    it('deve exibir o nome do filtro', async () => {
      render(
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

      expect(label).toBeInTheDocument();
    });

    it('deve exibir o botão de mostrar opções de filtro', async () => {
      render(
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

      expect(showOptionsButton).toBeInTheDocument();
    });
  });

  describe('Ao clicar no botão de mostrar opções de filtro', () => {
    it('deve continuar exibindo o nome do filtro', async () => {
      const user = userEvent.setup();

      render(
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

      expect(label).toBeInTheDocument();
    });

    it('deve exibir o botão de esconder opções de filtro', async () => {
      const user = userEvent.setup();

      render(
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

      const hideOptionsButton = await screen.findByRole('button', { name: '-' });

      expect(hideOptionsButton).toBeInTheDocument();
    });

    describe('Quando as labels são passadas', () => {
      describe('E as opções de filtro são strings de texto', () => {
        it('não deve exibir as labels no lugar das opções', async () => {
          const LABEL_OPTION_1 = 'ACS 1';
          const LABEL_OPTION_2 = 'ACS 2';
          const user = userEvent.setup();

          render(
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

          const showOptionsButton = await screen.findByRole('button', { name: '+' });

          await user.click(showOptionsButton);

          expect(await screen.findByText(STRING_OPTION_1)).toBeInTheDocument();
          expect(await screen.findByText(STRING_OPTION_2)).toBeInTheDocument();
          await waitFor(() => expect(screen.queryByText(LABEL_OPTION_1)).not.toBeInTheDocument());
          await waitFor(() => expect(screen.queryByText(LABEL_OPTION_2)).not.toBeInTheDocument());
        });
      });

      describe('E as opções de filtro são strings numéricas', () => {
        it('deve exibir as labels no lugar das opções', async () => {
          const OPTION_1 = '0';
          const OPTION_2 = '1';
          const LABEL_OPTION_1 = 'ACS 1';
          const LABEL_OPTION_2 = 'ACS 2';
          const user = userEvent.setup();

          render(
            <FiltroBody
              data={ {
                data: [OPTION_1, OPTION_2],
                filtro: FILTER_PROPERTY,
                rotulo: FILTER_LABEL,
                labels: [LABEL_OPTION_1, LABEL_OPTION_2]
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

          expect(await screen.findByText(LABEL_OPTION_1)).toBeInTheDocument();
          expect(await screen.findByText(LABEL_OPTION_2)).toBeInTheDocument();
        });
      });
    });

    describe('E clicar no botão de esconder opções de filtro', () => {
      it('não deve exibir o botão de esconder opções de filtro', async () => {
        const user = userEvent.setup();

        render(
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

        await waitFor(() => expect(screen.queryByRole('button', { name: '-' })).not.toBeInTheDocument());
      });

      it('deve exibir novamente o botão de mostrar opções de filtro', async () => {
        const user = userEvent.setup();

        render(
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

        expect(showOptionsButton).toBeInTheDocument();
      });

      it('deve continuar exibindo o nome do filtro', async () => {
        const user = userEvent.setup();

        render(
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

        const label = await screen.findByText(FILTER_LABEL);

        expect(label).toBeInTheDocument();
      });

      it('não deve exibir as opções de filtro', async () => {
        const user = userEvent.setup();

        render(
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

    describe('As opções de filtro devem ser exibidas em ordem crescente', () => {
      it('quando são strings', async () => {
        const user = userEvent.setup();

        render(
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

        // TODO adicionar labels aos checkboxes e usá-las para busca nos testes
        const options = await screen.findAllByRole('checkbox');

        expect(options).toHaveLength(2);
        expect(options[0].nextSibling).toHaveTextContent(STRING_OPTION_1);
        expect(options[1].nextSibling).toHaveTextContent(STRING_OPTION_2);
      });

      it('quando são strings numéricas', async () => {
        const OPTION_1 = '5';
        const OPTION_2 = '56';
        const user = userEvent.setup();

        render(
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

      it('quando são números', async () => {
        const OPTION_1 = 5;
        const OPTION_2 = 56;
        const user = userEvent.setup();

        render(
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
