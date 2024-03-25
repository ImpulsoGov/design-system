import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filtro } from './PainelBuscaAtiva';

const PAINEL = 'citopatológico';
const ABA = 1;
const SUB_ABA = 0;
const STATUS = [
  'Sem dados',
  'Com consulta e aferição de PA em dia',
  'Sem consulta e aferição de PA em dia',
  'Sem consulta em dia',
  'Sem aferição de PA em dia',
  'Com consulta e solicitação de hemoglobina em dia',
  'Sem consulta e solicitação de hemoglobina em dia',
  'Sem solicitação de hemoglobina em dia',
  'Encerradas por DPP + 14 dias',
  'Encerradas por parto ou aborto',
  'Ativas',
  'Gestantes inválidas',
  'Coleta em dia',
  'Nunca realizou coleta',
  'Coleta com menos de 25 anos',
  'Vence no final do quadrimestre',
  'Coleta vencida',
];
const handleCheckbox = jest.fn();
const setData = jest.fn();
const setModal = jest.fn();
const setChavesFiltros = jest.fn();
const setOrdenar = jest.fn();
const setOrdenacaoAplicada = jest.fn();
const trackObject = { track: jest.fn() };
const dadosDeFiltros = [
  {
    data: ['Alessandra Santos', 'Carmen Miranda', null],
    filtro: 'acs_nome',
    rotulo: 'Filtrar por nome do Profissional Responsável'
  },
  {
    data: ['12', '13'],
    labels: STATUS,
    filtro: 'id_status_usuario',
    rotulo: 'Filtrar por status'
  },
];
const valorInicialOpcoesDeFiltro = {
  '12': false,
  '13': false,
  'Alessandra Santos': false,
  'Carmen Miranda': false,
  null: false,
};
const propriedadesDeData = [];
const propriedadesInteiras = [];
const ordenacaoPorPropriedade = { acs_nome: 'asc' };
const ordenacao = '1';
const chavesFiltros = [];
const dadosDaListaNominal = [
  {
    paciente_nome: 'Camila da Silva',
    cidadao_cpf_dt_nascimento: '106.106.106-10',
    id_status_usuario: 12,
    vencimento_da_coleta: '-',
    prazo_proxima_coleta: '31/08/2023',
    idade: 25,
    id_faixa_etaria: 8,
    acs_nome: 'Alessandra Santos',
    estabelecimento_cnes: '2872872',
    estabelecimento_nome: 'Unidade de Saude da Familia 1',
    equipe_ine: '0002277227',
    ine_master: '0002277227',
    equipe_nome: 'ESF 1',
    dt_registro_producao_mais_recente: '2023-10-22'
  },
  {
    paciente_nome: 'Maria da Silva',
    cidadao_cpf_dt_nascimento: '327.327.327-32',
    id_status_usuario: 12,
    vencimento_da_coleta: '11/05/2026',
    prazo_proxima_coleta: '31/08/2023',
    idade: 35,
    id_faixa_etaria: 6,
    acs_nome: 'Alessandra Santos',
    estabelecimento_cnes: '2872872',
    estabelecimento_nome: 'Unidade de Saude da Familia 1',
    equipe_ine: '0002277227',
    ine_master: '0002277227',
    equipe_nome: 'ESF 1',
    dt_registro_producao_mais_recente: '2023-10-22'
  },
  {
    paciente_nome: 'Julia da Silva',
    cidadao_cpf_dt_nascimento: '100.100.100-10',
    id_status_usuario: 12,
    vencimento_da_coleta: '27/07/2025',
    prazo_proxima_coleta: 'Em dia',
    idade: 55,
    id_faixa_etaria: 8,
    acs_nome: 'Carmen Miranda',
    estabelecimento_cnes: '2752752',
    estabelecimento_nome: 'Unidade de Saude da Familia 2',
    equipe_ine: '0000369369',
    ine_master: '0000369369',
    equipe_nome: 'ESF 2',
    dt_registro_producao_mais_recente: '2023-10-22'
  },
  {
    paciente_nome: 'Carla da Silva',
    cidadao_cpf_dt_nascimento: '305.305.305-30',
    id_status_usuario: 13,
    vencimento_da_coleta: '-',
    prazo_proxima_coleta: '31/08/2023',
    idade: 64,
    id_faixa_etaria: 8,
    acs_nome: 'Alessandra Santos',
    estabelecimento_cnes: '2872872',
    estabelecimento_nome: 'Unidade de Saude da Familia 1',
    equipe_ine: '0002277227',
    ine_master: '0002277227',
    equipe_nome: 'ESF 1',
    dt_registro_producao_mais_recente: '2023-10-22'
  },
];

describe('Componente: Filtro', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Quando renderizado', () => {
    it('deve exibir o texto \'limpar filtros\'', async () => {
      render(
        <Filtro
          data={ dadosDeFiltros }
          setData={ setData }
          tabela={ dadosDaListaNominal }
          value={ valorInicialOpcoesDeFiltro }
          handleCheckbox={ handleCheckbox }
          chavesFiltros={ chavesFiltros }
          setChavesFiltros={ setChavesFiltros }
          setModal={ setModal }
          trackObject={ trackObject }
          painel={ PAINEL }
          aba={ ABA }
          sub_aba={ SUB_ABA }
          setOrdenar={ setOrdenar }
          setOrdenacaoAplicada={ setOrdenacaoAplicada }
          ordenar={ ordenacao }
          datefiltros={ propriedadesDeData }
          IntFiltros={ propriedadesInteiras }
          IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
        />
      );

      const limparFiltros = await screen.findByText(/limpar filtros/i);

      expect(limparFiltros).toBeInTheDocument();
    });

    it('deve exibir o botão de filtrar lista nominal', async () => {
      render(
        <Filtro
          data={ dadosDeFiltros }
          setData={ setData }
          tabela={ dadosDaListaNominal }
          value={ valorInicialOpcoesDeFiltro }
          handleCheckbox={ handleCheckbox }
          chavesFiltros={ chavesFiltros }
          setChavesFiltros={ setChavesFiltros }
          setModal={ setModal }
          trackObject={ trackObject }
          painel={ PAINEL }
          aba={ ABA }
          sub_aba={ SUB_ABA }
          setOrdenar={ setOrdenar }
          setOrdenacaoAplicada={ setOrdenacaoAplicada }
          ordenar={ ordenacao }
          datefiltros={ propriedadesDeData }
          IntFiltros={ propriedadesInteiras }
          IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
        />
      );

      const botaoFiltrarLista = await screen.findByRole('button', {
        name: /filtrar lista nominal/i
      });

      expect(botaoFiltrarLista).toBeInTheDocument();
    });

    it('deve exibir a correta quantidade de filtros', async () => {
      render(
        <Filtro
          data={ dadosDeFiltros }
          setData={ setData }
          tabela={ dadosDaListaNominal }
          value={ valorInicialOpcoesDeFiltro }
          handleCheckbox={ handleCheckbox }
          chavesFiltros={ chavesFiltros }
          setChavesFiltros={ setChavesFiltros }
          setModal={ setModal }
          trackObject={ trackObject }
          painel={ PAINEL }
          aba={ ABA }
          sub_aba={ SUB_ABA }
          setOrdenar={ setOrdenar }
          setOrdenacaoAplicada={ setOrdenacaoAplicada }
          ordenar={ ordenacao }
          datefiltros={ propriedadesDeData }
          IntFiltros={ propriedadesInteiras }
          IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
        />
      );

      const botoesMostrarOpcoesDeFiltro = await screen.findAllByText('+');

      expect(botoesMostrarOpcoesDeFiltro).toHaveLength(dadosDeFiltros.length);
    });
  });

  describe('Ao clicar no botão de filtrar lista nominal', () => {
    it('deve chamar a função setModal com o valor false', async () => {
      const user = userEvent.setup();

      render(
        <Filtro
          data={ dadosDeFiltros }
          setData={ setData }
          tabela={ dadosDaListaNominal }
          value={ valorInicialOpcoesDeFiltro }
          handleCheckbox={ handleCheckbox }
          chavesFiltros={ chavesFiltros }
          setChavesFiltros={ setChavesFiltros }
          setModal={ setModal }
          trackObject={ trackObject }
          painel={ PAINEL }
          aba={ ABA }
          sub_aba={ SUB_ABA }
          setOrdenar={ setOrdenar }
          setOrdenacaoAplicada={ setOrdenacaoAplicada }
          ordenar={ ordenacao }
          datefiltros={ propriedadesDeData }
          IntFiltros={ propriedadesInteiras }
          IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
        />
      );

      const botaoFiltrarLista = await screen.findByRole('button', {
        name: /filtrar lista nominal/i
      });

      await user.click(botaoFiltrarLista);

      expect(setModal).toHaveBeenCalledWith(false);
    });

    describe('Sem selecionar opções de filtro', () => {
      it('deve chamar a função setData com dados iguais aos recebidos pelo componente', async () => {
        const user = userEvent.setup();

        render(
          <Filtro
            data={ dadosDeFiltros }
            setData={ setData }
            tabela={ dadosDaListaNominal }
            value={ valorInicialOpcoesDeFiltro }
            handleCheckbox={ handleCheckbox }
            chavesFiltros={ chavesFiltros }
            setChavesFiltros={ setChavesFiltros }
            setModal={ setModal }
            trackObject={ trackObject }
            painel={ PAINEL }
            aba={ ABA }
            sub_aba={ SUB_ABA }
            setOrdenar={ setOrdenar }
            setOrdenacaoAplicada={ setOrdenacaoAplicada }
            ordenar={ ordenacao }
            datefiltros={ propriedadesDeData }
            IntFiltros={ propriedadesInteiras }
            IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
          />
        );

        const botaoFiltrarLista = await screen.findByRole('button', {
          name: /filtrar lista nominal/i
        });

        await user.click(botaoFiltrarLista);

        expect(setData).toHaveBeenCalledWith(dadosDaListaNominal);
      });
    });

    describe('Quando uma opção de filtro está selecionada', () => {
      describe('E não há ordenação aplicada', () => {
        it('deve chamar setData com os dados filtrados de acordo com a opção', async () => {
          const user = userEvent.setup();

          render(
            <Filtro
              data={ dadosDeFiltros }
              setData={ setData }
              tabela={ dadosDaListaNominal }
              value={ {
                '12': false,
                '13': false,
                'Alessandra Santos': false,
                'Carmen Miranda': true,
                null: false,
              } }
              handleCheckbox={ handleCheckbox }
              chavesFiltros={ chavesFiltros }
              setChavesFiltros={ setChavesFiltros }
              setModal={ setModal }
              trackObject={ trackObject }
              painel={ PAINEL }
              aba={ ABA }
              sub_aba={ SUB_ABA }
              setOrdenar={ setOrdenar }
              setOrdenacaoAplicada={ setOrdenacaoAplicada }
              ordenar={ ordenacao }
              datefiltros={ propriedadesDeData }
              IntFiltros={ propriedadesInteiras }
              IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
            />
          );

          const botaoFiltrarLista = await screen.findByRole('button', {
            name: /filtrar lista nominal/i
          });

          await user.click(botaoFiltrarLista);

          const parametroEsperado = [{
            acs_nome: 'Carmen Miranda',
            cidadao_cpf_dt_nascimento: '100.100.100-10',
            dt_registro_producao_mais_recente: '2023-10-22',
            equipe_ine: '0000369369',
            equipe_nome: 'ESF 2',
            estabelecimento_cnes: '2752752',
            estabelecimento_nome: 'Unidade de Saude da Familia 2',
            id_faixa_etaria: 8,
            id_status_usuario: 12,
            idade: 55,
            ine_master: '0000369369',
            paciente_nome: 'Julia da Silva',
            prazo_proxima_coleta: 'Em dia',
            vencimento_da_coleta: '27/07/2025'
          }];

          expect(setData).toHaveBeenCalledWith(parametroEsperado);
        });
      });

      describe('E há ordenação aplicada', () => {
        it('deve chamar setData com os dados ordenados e filtrados de acordo com a opção', async () => {
          const user = userEvent.setup();

          render(
            <Filtro
              data={ dadosDeFiltros }
              setData={ setData }
              tabela={ dadosDaListaNominal }
              value={ {
                '12': true,
                '13': false,
                'Alessandra Santos': false,
                'Carmen Miranda': false,
                null: false,
              } }
              handleCheckbox={ handleCheckbox }
              chavesFiltros={ chavesFiltros }
              setChavesFiltros={ setChavesFiltros }
              setModal={ setModal }
              trackObject={ trackObject }
              painel={ PAINEL }
              aba={ ABA }
              sub_aba={ SUB_ABA }
              setOrdenar={ setOrdenar }
              setOrdenacaoAplicada={ setOrdenacaoAplicada }
              ordenar={ 'acs_nome' }
              datefiltros={ propriedadesDeData }
              IntFiltros={ propriedadesInteiras }
              IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
            />
          );

          const botaoFiltrarLista = await screen.findByRole('button', {
            name: /filtrar lista nominal/i
          });

          await user.click(botaoFiltrarLista);

          const parametroEsperado = [
            {
              paciente_nome: 'Camila da Silva',
              cidadao_cpf_dt_nascimento: '106.106.106-10',
              id_status_usuario: 12,
              vencimento_da_coleta: '-',
              prazo_proxima_coleta: '31/08/2023',
              idade: 25,
              id_faixa_etaria: 8,
              acs_nome: 'Alessandra Santos',
              estabelecimento_cnes: '2872872',
              estabelecimento_nome: 'Unidade de Saude da Familia 1',
              equipe_ine: '0002277227',
              ine_master: '0002277227',
              equipe_nome: 'ESF 1',
              dt_registro_producao_mais_recente: '2023-10-22'
            },
            {
              paciente_nome: 'Maria da Silva',
              cidadao_cpf_dt_nascimento: '327.327.327-32',
              id_status_usuario: 12,
              vencimento_da_coleta: '11/05/2026',
              prazo_proxima_coleta: '31/08/2023',
              idade: 35,
              id_faixa_etaria: 6,
              acs_nome: 'Alessandra Santos',
              estabelecimento_cnes: '2872872',
              estabelecimento_nome: 'Unidade de Saude da Familia 1',
              equipe_ine: '0002277227',
              ine_master: '0002277227',
              equipe_nome: 'ESF 1',
              dt_registro_producao_mais_recente: '2023-10-22'
            },
            {
              paciente_nome: 'Julia da Silva',
              cidadao_cpf_dt_nascimento: '100.100.100-10',
              id_status_usuario: 12,
              vencimento_da_coleta: '27/07/2025',
              prazo_proxima_coleta: 'Em dia',
              idade: 55,
              id_faixa_etaria: 8,
              acs_nome: 'Carmen Miranda',
              estabelecimento_cnes: '2752752',
              estabelecimento_nome: 'Unidade de Saude da Familia 2',
              equipe_ine: '0000369369',
              ine_master: '0000369369',
              equipe_nome: 'ESF 2',
              dt_registro_producao_mais_recente: '2023-10-22'
            },
          ];

          expect(setData).toHaveBeenCalledWith(parametroEsperado);
        });
      });
    });

    describe('Após selecionar duas opções de filtro', () => {
      it('deve chamar setData com os dados filtrados de acordo com as opções', async () => {
        const user = userEvent.setup();

        render(
          <Filtro
            data={ dadosDeFiltros }
            setData={ setData }
            tabela={ dadosDaListaNominal }
            value={ {
              '12': false,
              '13': true,
              'Alessandra Santos': true,
              'Carmen Miranda': false,
              null: false,
            } }
            handleCheckbox={ handleCheckbox }
            chavesFiltros={ chavesFiltros }
            setChavesFiltros={ setChavesFiltros }
            setModal={ setModal }
            trackObject={ trackObject }
            painel={ PAINEL }
            aba={ ABA }
            sub_aba={ SUB_ABA }
            setOrdenar={ setOrdenar }
            setOrdenacaoAplicada={ setOrdenacaoAplicada }
            ordenar={ ordenacao }
            datefiltros={ propriedadesDeData }
            IntFiltros={ propriedadesInteiras }
            IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
          />
        );

        const botaoFiltrarLista = await screen.findByRole('button', {
          name: /filtrar lista nominal/i
        });

        await user.click(botaoFiltrarLista);

        const parametroEsperado = [{
          paciente_nome: 'Carla da Silva',
          cidadao_cpf_dt_nascimento: '305.305.305-30',
          id_status_usuario: 13,
          vencimento_da_coleta: '-',
          prazo_proxima_coleta: '31/08/2023',
          idade: 64,
          id_faixa_etaria: 8,
          acs_nome: 'Alessandra Santos',
          estabelecimento_cnes: '2872872',
          estabelecimento_nome: 'Unidade de Saude da Familia 1',
          equipe_ine: '0002277227',
          ine_master: '0002277227',
          equipe_nome: 'ESF 1',
          dt_registro_producao_mais_recente: '2023-10-22'
        }];

        expect(setData).toHaveBeenCalledWith(parametroEsperado);
      });
    });
  });

  describe('Ao clicar na opção de limpar filtros', () => {
    it('deve chamar setModal com o valor false', async () => {
      const user = userEvent.setup();

      render(
        <Filtro
          data={ dadosDeFiltros }
          setData={ setData }
          tabela={ dadosDaListaNominal }
          value={ valorInicialOpcoesDeFiltro }
          handleCheckbox={ handleCheckbox }
          chavesFiltros={ chavesFiltros }
          setChavesFiltros={ setChavesFiltros }
          setModal={ setModal }
          trackObject={ trackObject }
          painel={ PAINEL }
          aba={ ABA }
          sub_aba={ SUB_ABA }
          setOrdenar={ setOrdenar }
          setOrdenacaoAplicada={ setOrdenacaoAplicada }
          ordenar={ ordenacao }
          datefiltros={ propriedadesDeData }
          IntFiltros={ propriedadesInteiras }
          IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
        />
      );

      const limparFiltros = await screen.findByText(/limpar filtros/i);

      await user.click(limparFiltros);

      expect(setModal).toHaveBeenCalledWith(false);
    });

    describe('Quando não há ordenação aplicada', () => {
      it('deve chamar setData com dados iguais aos recebidos pelo componente', async () => {
        const user = userEvent.setup();

        render(
          <Filtro
            data={ dadosDeFiltros }
            setData={ setData }
            tabela={ dadosDaListaNominal }
            value={ valorInicialOpcoesDeFiltro }
            handleCheckbox={ handleCheckbox }
            chavesFiltros={ chavesFiltros }
            setChavesFiltros={ setChavesFiltros }
            setModal={ setModal }
            trackObject={ trackObject }
            painel={ PAINEL }
            aba={ ABA }
            sub_aba={ SUB_ABA }
            setOrdenar={ setOrdenar }
            setOrdenacaoAplicada={ setOrdenacaoAplicada }
            ordenar={ ordenacao }
            datefiltros={ propriedadesDeData }
            IntFiltros={ propriedadesInteiras }
            IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
          />
        );

        const limparFiltros = await screen.findByText(/limpar filtros/i);

        await user.click(limparFiltros);

        expect(setData).toHaveBeenCalledWith(dadosDaListaNominal);
      });
    });

    describe('Quando há ordenação aplicada', () => {
      it('deve chamar setData com os dados recebidos pelo componente de acordo com a ordenação', async () => {
        const user = userEvent.setup();

        render(
          <Filtro
            data={ dadosDeFiltros }
            setData={ setData }
            tabela={ dadosDaListaNominal }
            value={ valorInicialOpcoesDeFiltro }
            handleCheckbox={ handleCheckbox }
            chavesFiltros={ chavesFiltros }
            setChavesFiltros={ setChavesFiltros }
            setModal={ setModal }
            trackObject={ trackObject }
            painel={ PAINEL }
            aba={ ABA }
            sub_aba={ SUB_ABA }
            setOrdenar={ setOrdenar }
            setOrdenacaoAplicada={ setOrdenacaoAplicada }
            ordenar={ 'acs_nome' }
            datefiltros={ propriedadesDeData }
            IntFiltros={ propriedadesInteiras }
            IDFiltrosOrdenacao={ ordenacaoPorPropriedade }
          />
        );

        const limparFiltros = await screen.findByText(/limpar filtros/i);

        await user.click(limparFiltros);

        const parametroEsperado = [
          {
            paciente_nome: 'Camila da Silva',
            cidadao_cpf_dt_nascimento: '106.106.106-10',
            id_status_usuario: 12,
            vencimento_da_coleta: '-',
            prazo_proxima_coleta: '31/08/2023',
            idade: 25,
            id_faixa_etaria: 8,
            acs_nome: 'Alessandra Santos',
            estabelecimento_cnes: '2872872',
            estabelecimento_nome: 'Unidade de Saude da Familia 1',
            equipe_ine: '0002277227',
            ine_master: '0002277227',
            equipe_nome: 'ESF 1',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
          {
            paciente_nome: 'Maria da Silva',
            cidadao_cpf_dt_nascimento: '327.327.327-32',
            id_status_usuario: 12,
            vencimento_da_coleta: '11/05/2026',
            prazo_proxima_coleta: '31/08/2023',
            idade: 35,
            id_faixa_etaria: 6,
            acs_nome: 'Alessandra Santos',
            estabelecimento_cnes: '2872872',
            estabelecimento_nome: 'Unidade de Saude da Familia 1',
            equipe_ine: '0002277227',
            ine_master: '0002277227',
            equipe_nome: 'ESF 1',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
          {
            paciente_nome: 'Carla da Silva',
            cidadao_cpf_dt_nascimento: '305.305.305-30',
            id_status_usuario: 13,
            vencimento_da_coleta: '-',
            prazo_proxima_coleta: '31/08/2023',
            idade: 64,
            id_faixa_etaria: 8,
            acs_nome: 'Alessandra Santos',
            estabelecimento_cnes: '2872872',
            estabelecimento_nome: 'Unidade de Saude da Familia 1',
            equipe_ine: '0002277227',
            ine_master: '0002277227',
            equipe_nome: 'ESF 1',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
          {
            paciente_nome: 'Julia da Silva',
            cidadao_cpf_dt_nascimento: '100.100.100-10',
            id_status_usuario: 12,
            vencimento_da_coleta: '27/07/2025',
            prazo_proxima_coleta: 'Em dia',
            idade: 55,
            id_faixa_etaria: 8,
            acs_nome: 'Carmen Miranda',
            estabelecimento_cnes: '2752752',
            estabelecimento_nome: 'Unidade de Saude da Familia 2',
            equipe_ine: '0000369369',
            ine_master: '0000369369',
            equipe_nome: 'ESF 2',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
        ];

        expect(setData).toHaveBeenCalledWith(parametroEsperado);
      });
    });
  });
});
