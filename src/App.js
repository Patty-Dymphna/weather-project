
import './App.css';

function App() {
return (
    <div className="App">
      <form>
        <input type='search' placeholder='Enter country name'className='textUp'/>
        <input type='submit' placeholder='SUBMIT'/>
      </form>
        <p>Lagos, Nigeria NGN</p>
      <ul>
        <li>TimeZone: GMT-West African</li>
        <li>Description: Heavy Rain</li>
        <li>Wind: 234deg</li>
      </ul>
      <h3>43°</h3>
      <div className='LastFace'>
        <ul>
          <li>Humidity: 210</li>
          <li>Wind: 38</li>
          <li>Prescipation: Snowy</li>
          <li>Temperature: 10</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
