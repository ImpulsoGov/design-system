import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroBody } from './PainelBuscaAtiva';

const STRING_OPTION_1 = 'Alessandra Santos';
const STRING_OPTION_2 = 'Carmen Miranda';
// const filterOptions = [STRING_OPTION_2, STRING_OPTION_1];
const filterProperty = 'acs_nome';
const filterLabel = 'Filtrar por nome do Profissional Responsável';
// const optionsCheckedState = {
//   [STRING_OPTION_1]: false,
//   [STRING_OPTION_2]: false
// };
const handleCheckbox = jest.fn();

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

// CASOS DE TESTE
// 1. Deve renderizar o rótulo com o botão + ao passar um rótulo - OK
// 2. Deve renderizar o rótulo com o botão - e a quantidade certa de checkboxes ordenados ASC ao clicar no botão + - OK
// 3. Deve renderizar o rótulo com o botão + ao clicar no botão - e os checkboxes não devem ser exibidos - OK

// Copilot
// Here are some additional test cases you could consider:
// 1. Test the initial state of the component: Ensure that the initial state of the component is as expected. For instance, the show state should be false initially. - OK
// 2. Test the handleCheckbox function: If possible, test that the handleCheckbox function is called when a checkbox in the FiltroCard component is clicked. - Não acho que isso deveria ser testado no FiltroBody, e sim no teste de FiltroCard (e já foi testado lá)
// 3. Test the sorting of filter options: You've mentioned that the filter options should be in ascending order. You could write a test to ensure that this is always the case. - Testar também com números
// 4. Test the rendering of FiltroCard: Test that the FiltroCard component is rendered for each item in data.data. - OK
// 5. Test the props passed to FiltroCard: Ensure that the correct props are passed to the FiltroCard component.
// 6. Test the button click functionality: You've tested the rendering after the button click, but you could also test that the setShow function is called with the correct argument when the button is clicked. - Não parece necessário uma vez que o que é renderizado depende da correta mudança do estado show após click no botão e o teste 2 já cobre isso
// 7. Test the conditional rendering of labels: If data.labels exists and has a property that matches item, then data.labels[item] should be passed as a prop to FiltroCard. You could write a test to ensure this conditional rendering works as expected.

describe('FiltroBody', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a label and a + button when first rendered', async () => {
    setup(
      <FiltroBody
        data={ {
          data: [STRING_OPTION_1, STRING_OPTION_2],
          filtro: filterProperty,
          rotulo: filterLabel
        } }
        value={ {
          [STRING_OPTION_1]: false,
          [STRING_OPTION_2]: false
        } }
        handleCheckbox={ handleCheckbox }
      />
    );

    const label = await screen.findByText(filterLabel);
    const showOptionsButton = await screen.findByRole('button', { name: '+' });

    expect(label).toBeInTheDocument();
    expect(showOptionsButton).toBeInTheDocument();
  });

  describe('When clicking the + button', () => {
    it('should render a label, a - button and the filter string options in ASC order', async () => {
      const { user } = setup(
        <FiltroBody
          data={ {
            data: [STRING_OPTION_2, STRING_OPTION_1],
            filtro: filterProperty,
            rotulo: filterLabel
          } }
          value={ {
            [STRING_OPTION_1]: false,
            [STRING_OPTION_2]: false
          } }
          handleCheckbox={ handleCheckbox }
        />
      );

      const label = await screen.findByText(filterLabel);
      const showOptionsButton = await screen.findByRole('button', { name: '+' });

      await user.click(showOptionsButton);

      const options = await screen.findAllByRole('checkbox');
      const hideOptionsButton = await screen.findByRole('button', { name: '-' });

      expect(label).toBeInTheDocument();
      expect(hideOptionsButton).toBeInTheDocument();
      expect(options).toHaveLength(filterOptions.length);
      expect(options[0]).toHaveAttribute('id', STRING_OPTION_1);
      expect(options[1]).toHaveAttribute('id', STRING_OPTION_2);
    });

    it('should render a label, a - button and the filter stringfied number options in ASC order ', async () => {
      const OPTION_1 = '5';
      const OPTION_2 = '56';
      const { user } = setup(
        <FiltroBody
          data={ {
            data: [OPTION_2, OPTION_1],
            filtro: filterProperty,
            rotulo: filterLabel
          } }
          value={ {
            [OPTION_1]: false,
            [OPTION_2]: false
          } }
          handleCheckbox={ handleCheckbox }
        />
      );

      const label = await screen.findByText(filterLabel);
      const showOptionsButton = await screen.findByRole('button', { name: '+' });

      await user.click(showOptionsButton);

      const options = await screen.findAllByRole('checkbox');
      const hideOptionsButton = await screen.findByRole('button', { name: '-' });

      expect(label).toBeInTheDocument();
      expect(hideOptionsButton).toBeInTheDocument();
      expect(options).toHaveLength(filterOptions.length);
      expect(options[0]).toHaveAttribute('id', STRING_OPTION_1);
      expect(options[1]).toHaveAttribute('id', STRING_OPTION_2);
    });
  });


  it('should render a label, a + button and no filter options after clicking the - button', async () => {
    const { user } = setup(
      <FiltroBody
        data={ {
          data: [STRING_OPTION_1, STRING_OPTION_2],
          filtro: filterProperty,
          rotulo: filterLabel
        } }
        value={ {
          [STRING_OPTION_1]: false,
          [STRING_OPTION_2]: false
        } }
        handleCheckbox={ handleCheckbox }
      />
    );

    const label = await screen.findByText(filterLabel);
    const showOptionsButton = await screen.findByRole('button', { name: '+' });

    await user.click(showOptionsButton);

    const hideOptionsButton = await screen.findByRole('button', { name: '-' });

    await user.click(hideOptionsButton);

    expect(label).toBeInTheDocument();
    expect(showOptionsButton).toBeInTheDocument();
    expect(screen.findAllByRole('checkbox')).rejects.toThrow('Unable to find role="checkbox"');
  });
});
