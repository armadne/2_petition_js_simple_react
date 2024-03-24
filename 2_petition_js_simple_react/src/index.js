import React, {useState} from 'react';

import ReactDOM from 'react-dom';
import './style.css'



const Petition = () => {

  const[Vote, setVote] = useState([]);

  
  const[inputFirstName, setinputValue1] = useState('');
  const[inputLastName, setinputValue2] = useState('');
  const[inputEmail, setinputValue3] = useState('');
  const[inputCountry, setinputValue4] = useState('');
  const[inputCity, setinputValue5] = useState('');
  const[inputAdress, setinputValue6]= useState('');
  const[inputVote, setinputValue7] = useState('');



  const HandleVote = () => {

    if(inputFirstName.trim() !== '') {

      setVote([...Vote, inputFirstName]);
      setinputValue1('')

      setVote([...Vote, inputLastName]);
      setinputValue2('')

      setVote([...Vote, inputEmail]);
      setinputValue3('')

      setVote([...Vote, inputCountry]);
      setinputValue4('')

      setVote([...Vote, inputCity]);
      setinputValue5('');

      setVote([...Vote, inputAdress]);
      setinputValue6('')

      setVote([...Vote, inputVote]);
      setinputValue7('');

    

      
       alert('Merci De Votre Participation ' + inputFirstName + ' !')
      


    };
  };


  return(

    <div>

      <h1>Petition</h1>

      <br/>
      <br/>

     <label for='first_name'>First Name : </label>

      <input
      type='text'
      name='first_name'
      placeholder='Enter Your First Name'
      value={inputFirstName}
      onChange={(e) => setinputValue1(e.target.value)}
      />

      <br/>
      <br/>

      <label for='last_name'>Last Name : </label>

      <input
      type='text'
      name='last_name'
      placeholder='Enter Your Last Name'
      value={inputLastName}
      onChange={(e) => setinputValue2(e.target.value)}
      />

      <br/>
      <br/>

      <label for='email'>Email : </label>

      <input
      type='text'
      name='email'
      placeholder='Enter Your Email'
      value={inputEmail}
      onChange={(e) => setinputValue3(e.target.value)}
      />

      <br/>
      <br/>

      <label for="country">Country : </label>

      <input
      type='text'
      name='country'
      placeholder='Enter Country Name'
      value={inputCountry}
      onChange={(e) => setinputValue4(e.target.value)}
      />

      <br/>
      <br/>

      <label for='city'>City : </label>

      <input
      type='text'
      name='city'
      placeholder='Enter City Name'
      value={inputCity}
      onChange={(e) => setinputValue5(e.target.value)}
      />

      <br/>
      <br/>

      <label for='adress'>Address : </label>


      <input
      type='text'
      name='adress'
      placeholder='Enter Your Address'
      value={inputAdress}
      onChange={(e) => setinputValue6(e.target.value)}
      />

      <br/>
      <br/>

      <label for='oui'>Oui</label>

      <input
      type='checkbox'
      value={inputVote}
      name='oui'
      onChange={(e) => setinputValue7(e.target.value)}
      />

      <label for='non'>Non</label>

      <input
      type='checkbox'
      value={inputVote}
      name='non'
      onChange={(e) => setinputValue7(e.target.value)}
      />
      <br/>
      <br/>

      <button onClick={HandleVote}>Vote</button>


    </div>
  )

};


ReactDOM.render(

  <React.StrictMode>
    <Petition/>
  </React.StrictMode>,

  document.getElementById('root')

)