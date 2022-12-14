import { Dispatch, MouseEventHandler, useState, SetStateAction } from "react"

export default function ({setRoute}: {setRoute: Dispatch<SetStateAction<string>>}) {
  const [name, setName] = useState("___")
  const [email, setEmail] = useState("___")

  const buscarDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      return
    }

    alert("Não esta logado!")
  }

  const alterarDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      setRoute("update")
      console.log("okay")
      return
    }

    alert("Você saiu!")
  }

  const logOff: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.removeItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      alert("aaaaaaah")
      setRoute("login")
      return
    }
    alert("você saiu da conta")
    setRoute("login")
  }

  return <>
    <h1>teste</h1>
    <h2>Buscar dados do Usuário Logado</h2>
    <div>
      <label>Nome: </label>{name}
    </div>
    <div>
      <label>Email: </label>{email}
    </div>
    <div className = "btn-teste">
      <button onClick={buscarDados}>buscar</button>
      <button onClick={alterarDados}>alterar</button>
      <button onClick={logOff}>sair</button>
    </div>
  </>
}