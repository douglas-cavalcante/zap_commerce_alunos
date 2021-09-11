import { useState } from "react"
import * as yup from 'yup';

// criar esquema validação

const schema = yup.object().shape({
  name: yup.string().required("campo de nome é obrigatório"),
  email: yup.string().required('Email campo é obrigatorio').email("Digite um email valido")
})

const Checkout = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [messageErrors, setMessageErrors] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      await schema.validate({
        name,
        email
      }, { abortEarly: false });

    } catch (err) {
      const errors = err.inner.reduce((acc, current) => {
        return {
          ...acc,
          [current.path]: current.message
        }
      }, {});

      setMessageErrors(errors);
    }
  }

  console.log(messageErrors)
  return (
    <div className="container" >

      <h2>Checkout</h2>



      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome"
          
        />
        {messageErrors['name']}
      

        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
         {messageErrors['email']}

        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Telefone"
        />

        <button type="submit">Salvar</button>

      </form>
    </div>
  )
}

export default Checkout