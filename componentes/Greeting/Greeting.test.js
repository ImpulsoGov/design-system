import { render, screen } from "@testing-library/react";
import { Greeting } from "./";

const COMPONENT = "Greeting";
const scenarios = [
  {
    cargo: "Impulser",
    municipio_uf: "BA",
    greeting: "Boas-vindas",
    nome_usuario: "Carmen",
    texto: "",
  }
];

describe(`Componente: ${COMPONENT}`, () => {
  it("deve renderizar corretamente", () => {
    render(<Greeting {...scenarios[0]} />);

    const element = screen.getByTestId(COMPONENT);

    expect(element).toMatchSnapshot();
  });
});
