import * as S from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const real = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  })

const Vaga = (props: Props) => (
  <S.Card>
    <S.Nivel>{props.nivel}</S.Nivel>
    <S.Titulo>{props.titulo}</S.Titulo>
    <S.Detalhes>
      <li>
        <b>Local:</b> {props.localizacao}
      </li>
      <li>
        <b>Contratação:</b> {props.modalidade.toUpperCase()}
      </li>
      <li>
        <b>Salário:</b> {real(props.salarioMin)} a {real(props.salarioMax)}
      </li>
    </S.Detalhes>
    <S.Tags>
      {props.requisitos.map((req) => (
        <li key={req}>{req}</li>
      ))}
    </S.Tags>
    <S.Link href="#">Ver detalhes e candidatar-se</S.Link>
  </S.Card>
)

export default Vaga
