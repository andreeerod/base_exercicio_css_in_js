import { FormEvent } from 'react'

import * as S from './styles'

export const modalidades = ['todas', 'clt', 'pj'] as const
export type Modalidade = (typeof modalidades)[number]

type Props = {
  termo: string
  aoPesquisar: (termo: string) => void
  modalidade: Modalidade
  aoMudarModalidade: (modalidade: Modalidade) => void
}

const FormVagas = ({
  termo,
  aoPesquisar,
  modalidade,
  aoMudarModalidade
}: Props) => {
  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <S.Form onSubmit={aoEnviarForm} role="search">
      <S.Busca>
        <S.Campo
          aria-label="Buscar vagas"
          placeholder="Buscar por cargo: front-end, node, design..."
          value={termo}
          onChange={(e) => aoPesquisar(e.target.value)}
          type="search"
        />
        <S.BotaoPesquisar type="submit">Pesquisar</S.BotaoPesquisar>
      </S.Busca>
      <S.Filtros role="group" aria-label="Tipo de contratação">
        {modalidades.map((m) => (
          <S.Chip
            key={m}
            type="button"
            ativo={modalidade === m}
            aria-pressed={modalidade === m}
            onClick={() => aoMudarModalidade(m)}
          >
            {m === 'todas' ? 'Todas' : m.toUpperCase()}
          </S.Chip>
        ))}
      </S.Filtros>
    </S.Form>
  )
}
export default FormVagas
