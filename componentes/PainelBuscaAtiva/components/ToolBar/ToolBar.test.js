import { render, screen } from '@testing-library/react';
import { ToolBar } from './ToolBar';

const COMPONENT = 'ToolBar';
const scenario = {
  showFiltros: jest.fn(),
  showOrdenar: jest.fn(),
  painel: 'citopatológico',
  chavesFiltros: ['Filtro1', 'Filtro2'],
  setOrdenar: jest.fn(),
  ordenar: '',
  data: [],
  setData: jest.fn(),
  tabela: [], 
  ordenacaoAplicada: false,
};

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar corretamente', () => {
    render(
      <ToolBar {...scenario} />
    );
    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });
});
