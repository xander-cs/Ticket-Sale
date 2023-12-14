import React from 'react';
import './App.css';
import web3 from './web3';
import TicketSale from './contract';

class App extends React.Component
{
  state = {
    accounts: [],
    ticketID: '',
    getAddress: '',
    returnAddress: '',
    newOwnerAddress: '',
    offerAddress: '',
    acceptAddress: ''
  };

  async componentDidMount()
  {
    const accounts = await web3.eth.getAccounts();
    const ticketID = 0;
    const getAddress = '';
    const returnAddress = '';
    const newOwnerAddress = '';
    const offerAddress = '';
    const acceptAddress = '';

    this.setState({accounts, ticketID, getAddress, returnAddress, newOwnerAddress, offerAddress, acceptAddress});
  }

  onPurchase = async () =>
  {
    await TicketSale.methods.buyTicket(this.state.ticketID).send({
      from: this.state.accounts[0],
      value: TicketSale.methods.ticketPrice().call()
    });
  };
  
  onGet = async () =>
  {
    await TicketSale.methods.getTicketOf(this.state.getAddress).call();
  }

  onReturn = async () =>
  {
    await TicketSale.methods.returnTicket(this.state.returnAddress).send({
      from: this.state.accounts[0],
      value: TicketSale.methods.ticketPrice().call()
    });
  }

  onChangeOwner = async () =>
  {
    await TicketSale.methods.changeOwner(this.state.newOwnerAddress).call();
  }

  onOffer = async () =>
  {
    await TicketSale.methods.offerSwap(this.state.offerAddress).call();
  }

  onAccept = async () =>
  {
    await TicketSale.methods.acceptSwapOffer(this.state.acceptAddress).call();
  }

  render()
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
              <input value={this.state.ticketID} />
              <button onEnter={this.onPurchase}>Purchase</button>
            </div>

            <div>
              <h3>Get Ticket</h3>

              <label>From address: </label>
              <input value={this.state.getAddress}/>
              <button onEnter={this.onGet}>Get</button>
            </div>

            <div>
              <h3>Return Ticket</h3>

              <label>To address: </label>
              <input value={this.state.returnAddress}/>
              <button onEnter={this.onReturn}>Return</button>
            </div>

            <div>
              <h3>Change Ticket Owner</h3>

              <label>Address of new owner: </label>
              <input value={this.state.newOwnerAddress}/>
              <button onEnter={this.onChangeOwner}>Change</button>
            </div>
          </div>

          <hr />

          <div>
            <h2>Swaps</h2>

            <div>
              <h3>Offer Swap</h3>

              <label>Send offer to address: </label>  
              <input value={this.state.offerAddress}/>
              <button onEnter={this.onOffer}>Send</button>
            </div>
            
            <div>
              <h3>Accept Offer</h3>

              <label>Accept from address: </label>  
              <input value={this.state.acceptAddress}/>
              <button onEnter={this.onAccept}>Accept</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
