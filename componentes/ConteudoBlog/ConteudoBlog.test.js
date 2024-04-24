import { render, screen } from "@testing-library/react";
import { ConteudoBlog } from "./ConteudoBlog";

const COMPONENT = "ConteudoBlog";
const scenarios = [
  {
    titulo: "Lorem ipsum",
    texto: "Lorem ipsum dolor sit amet.",
    capa: "https://media.graphassets.com/53A911TkTVeKdKeLllnS",
    autor: {
      avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS",
      nome: "Carmen",
      data: "Abril 2024",
    },
  }
];

describe(`Componente: ${COMPONENT}`, () => {
  it("deve renderizar corretamente", () => {
    render(<ConteudoBlog {...scenarios[0]} />);

    const element = screen.getByTestId(COMPONENT);

    expect(element).toMatchSnapshot();
  });
});
