import { Modal } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const COMPONENT = "Modal";
const children = <p>Teste</p>;
const scenarios = [
  {
    show: true,
    setModal: jest.fn(),
  },
  {
    setModal: jest.fn(),
  }
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar corretamente', () => {
    render(<Modal {...scenarios[0]}>{children}</Modal>);

    const component = screen.getByTestId("Modal");

    expect(component).toMatchSnapshot();
  });

  it('não deve ser renderizado após clicar no botão de fechar', async () => {
    const user = userEvent.setup();
    render(<Modal {...scenarios[0]}>{children}</Modal>);

    const closeBtn = screen.getByTestId("ModalExit");
    await user.click(closeBtn);

    expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
  });

  it('não deve ser renderizado quando a visibilidade inicial é false', () => {
    render(<Modal {...scenarios[1]}>{children}</Modal>);

    const component = screen.queryByTestId("Modal");

    expect(component).not.toBeInTheDocument();
  });
});