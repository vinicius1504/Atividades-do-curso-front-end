import "./Element_login.css"
import { useState } from 'react';

function Header() {
  const [name, setName] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    alert(`Seu login é:  ${name}`);
  }



  return (
    <div className="formualrio">
      <div className="tittle">
        <h1>Entrar</h1>
      </div>
      <div className="txtlg">
        <label htmlFor="fname">Usuário/Email</label><br />
        <div className="inpt">
          <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className="txtlg">
        <label htmlFor="lname">Senha</label><br />
        <div className="inpt">
          <input type="password" id="Senha" /><br /><br />
        </div>
        <div className="txtlk">
          <a>Esqueceu a Senha?</a>
        </div>
      </div>
      <div id="teste" className="entrar">
        <button onClick={handleClick}>Entrar</button>
      </div>
      <div id="cd" className="txtlk">
        <a id="cad" href="#">Não Possue Cadastro? <br />clique Aqui e faça o seu!</a>
      </div>
    </div>
  );
}
export default Header;