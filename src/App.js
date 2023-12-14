import React from 'react';
import './App.css';
import web3 from './web3';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>// T1CKET SALE</h1>
      </header>
      
      <hr />

      <body>
        <div>
          <h2>Tickets</h2>

          <div>
            <h3>Buy Ticket</h3>

            <label>Ticket ID: </label>
            <input></input>
            <button>Purchase</button>
          </div>

          <div>
            <h3>Get Ticket</h3>

            <label>From address: </label>
            <input />
            <button>Get</button>
          </div>

          <div>
            <h3>Return Ticket</h3>

            <label>To address: </label>
            <input />
            <button>Return</button>
          </div>

          <div>
            <h3>Change Ticket Owner</h3>

            <label>Address of new owner: </label>
            <input />
            <button>Change</button>
          </div>
        </div>

        <hr />

        <div>
          <h2>Swaps</h2>

          <div>
            <h3>Offer Swap</h3>

            <label>Send offer to address: </label>  
            <input />
            <button>Send</button>
          </div>
          
          <div>
            <h3>Accept Offer</h3>

            <label>Accept from address: </label>  
            <input />
            <button>Accept</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
