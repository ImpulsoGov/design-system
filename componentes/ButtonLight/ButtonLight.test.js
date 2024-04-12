import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonLight, ButtonLightSubmit, ButtonLightSubmitMobile, ButtonLightMobile, ButtonLightLarge, ButtonLightSubmitLarge } from './index';

const COMPONENT = 'ButtonLight';
const COMPONENT2 = 'ButtonLightLarge';
const COMPONENT3 = 'ButtonLightMobile';
const COMPONENT4 = 'ButtonLightSubmit';
const COMPONENT5 = 'ButtonLightSubmitLarge';
const COMPONENT6 = 'ButtonLightSubmitMobile';

const scenario = [
  {
    icone: {
      posicao: 'right',
      url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
    },
    label: 'VOLTAR',
    link: '/'
  },
  {
    icone: {
      posicao: 'right',
      url: 'https://media.graphassets.com/X8qAQFkrTLapqBDlfkMO'
    },
    label: 'ENTRAR NO GRUPO DO WHATSAPP',
    link: '/'
  },
  {
    icone: {
      posicao: 'right',
      url: 'https://media.graphassets.com/Eu5DAy5SnCFbpRetwKSl'
    },
    label: "DÚVIDAS E SUGESTÕES",
    link: "/"
  },
  {
    label: "INDICADORES DE DESEMPENHO",
    link: "indicadores"
  },
  {
    label: "INDICADORES DE DESEMPENHO",
    link: "indicadores",
    disabled: true
  },
  {
    label: "ENTRAR",
    link: "/"
  },
  {
    label: "Entrar",
    submit: []
  },
  {
    label: "Entrar",
    submit: jest.fn()
  },
  {
    label: "Enviar",
    submit: jest.fn(),
    arg: "argumento",
    disabled: false
  }
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar corretamente com ícone à direita', () => {
    render(<ButtonLight {...scenario[0]} />);

    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente com ícone à direita para o WhatsApp', () => {

    render(<ButtonLight {...scenario[1]} />);

    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente com ícone a direita e duvidas', () => {

    render(<ButtonLight {...scenario[2]} />);

    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente sem ícone', () => {
    render(<ButtonLight {...scenario[3]} />);

    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente sem ícone e desabilitado', () => {
    render(<ButtonLight {...scenario[4]} />);

    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });
});

describe(`Componente: ${COMPONENT2}`, () => {
  it('deve renderizar corretamente', () => {
    render(<ButtonLightLarge {...scenario[5]} />);

    const component = screen.getByTestId(COMPONENT2);
    expect(component).toBeInTheDocument();
  });
});

describe(`Componente: ${COMPONENT3}`, () => {
  it('deve renderizar corretamente com ícone à direita', () => {
    render(<ButtonLightMobile {...scenario[0]} />);

    const component = screen.getByTestId(COMPONENT3);
    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente com ícone à direita para o WhatsApp', () => {

    render(<ButtonLightMobile {...scenario[1]} />);

    const component = screen.getByTestId(COMPONENT3);
    expect(component).toMatchSnapshot();
  });

  it('deve renderizar corretamente com ícone a direita e duvidas', () => {

    render(<ButtonLightMobile {...scenario[2]} />);

    const component = screen.getByTestId(COMPONENT3);
    expect(component).toMatchSnapshot();
  });
  it('deve renderizar corretamente sem ícone e desabilitado', () => {
    render(<ButtonLightMobile {...scenario[4]} />);

    const component = screen.getByTestId(COMPONENT3);
    expect(component).toMatchSnapshot();
  });
});

describe(`Componente: ${COMPONENT4}`, () => {
  it('deve renderizar corretamente', () => {
    render(<ButtonLightSubmit {...scenario[6]} />);

    const button = screen.getByText('ENTRAR');
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('deve chamar a função de envio ao ser clicado', async () => {
    const user = userEvent.setup();
    render(<ButtonLightSubmit  {...scenario[7]} />);

    const button = screen.getByText('ENTRAR');
    await user.click(button);

    expect(scenario[7].submit).toHaveBeenCalled();
  });

  it('deve estar desabilitado quando a propriedade "disabled" é true', () => {
    render(<ButtonLightSubmit {...scenario[6]} disabled />);

    const button = screen.getByText('ENTRAR');
    expect(button).toHaveClass('ButtonLightDisabled'); // Verifica se o botão está desabilitado
  });
});

describe(`Componente: ${COMPONENT5}`, () => {
  it('deve renderizar corretamente', () => {
    render(<ButtonLightSubmitLarge {...scenario[6]} />);

    const button = screen.getByText('ENTRAR');
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('deve chamar a função de envio ao ser clicado', async () => {
    const user = userEvent.setup();
    render(<ButtonLightSubmitLarge {...scenario[7]} />);

    const button = screen.getByText('ENTRAR');
    await user.click(button);

    expect(scenario[7].submit).toHaveBeenCalled();
  });

  it('deve estar desabilitado quando a propriedade "disabled" é true', () => {
    render(<ButtonLightSubmitLarge {...scenario[6]} disabled />);

    const button = screen.getByText('ENTRAR');
    expect(button).toHaveClass('ButtonLightLargeDisabled');
  });

  it('deve chamar a função submit com o argumento ao ser clicado se arg estiver definido e não estiver desabilitado', async () => {
    const user = userEvent.setup();
  
    render(<ButtonLightSubmitLarge {...scenario[8]} />);
  
    const button = screen.getByText('ENVIAR');
    await user.click(button);
  
    expect(scenario[8].submit).toHaveBeenCalledWith(scenario[8].arg);
  });
});

describe(`Componente: ${COMPONENT6}`, () => {
  it('deve chamar a função submit ao ser clicado se não estiver desabilitado', async () => {
    const user = userEvent.setup();

    render(<ButtonLightSubmitMobile {...scenario[7]} disabled={false} />);
    const button = screen.getByText('ENTRAR');
    await user.click(button);
    expect(scenario[7].submit).toHaveBeenCalled();
  });

  it('não deve chamar a função submit ao ser clicado se estiver desabilitado', async () => {
    const user = userEvent.setup();

    render(<ButtonLightSubmitMobile {...scenario[7]} disabled={true} />);
    const button = screen.getByText('ENTRAR');

    await user.click(button);

    expect(scenario[7].submit).toHaveBeenCalled();
  });
});