import './App.css';
import React from 'react';
import If from './if.png';


function App() {
  return (
    
    <div className="App">
          <div className='menu'>
            <img src={If} className='img' alt='logo IF'/>          
          </div>
      <header className="App-header">

        <form className='Cadastro'>
          <label>Nome:</label>
          <input type='text' id='nome' placeholder='Digite seu nome'  pattern="([aA-zZ]+)" required/> <br/>
          <label>Email:</label>
          <input type='email' id='nome' placeholder='Digite seu email' required/><br/>
          <label>Senha:</label>
          <input type='password' id='nome' placeholder='Digite sua senha' required/><br/>
          <label>Data de Nascimento:</label>
          <input type='date' required/><br/>
          <label>CEP:</label>
          <input type='number' id='nome' placeholder='Digite seu CEP' required/><br/>
          <label>CEP do trabalho:</label>
          <input type='text' id='nome' placeholder='Digite o CEP do seu trabalho'/><br/>
          <label>Codigo da Instituição:</label>
          <input type='number' placeholder='Digite o codigo da instituição' required/><br/>
          <label>Nome do curso:</label>
          <input type='text' id='nome' placeholder='Digite o nome do curso' pattern="([aA-zZ]+)" required/><br/>
          <label>Data de ingresso:</label>
          <input type='date' required/><br/>
          <label>Data de conclusão:</label>
          <input type='date' required/><br/>
          <label>Atuação</label>
          <select required>
            <option></option>
            <option>empreendedor</option>
            <option>profissional liberal</option>
            <option>acadêmico</option>
          </select>
          <br/>
          <button className='btn'>Cadastrar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
