import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      creditCard: '',
      expDate: '',
      cvv: '',
      billingZipCode: '',
      currentPage: 'checkout',
      currentId: ''
    }
    this.handleCheckout = this.handleCheckout.bind(this);

    this.handleF1 = this.handleF1.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.handleF2 = this.handleF2.bind(this);
    this.handleLine1 = this.handleLine1.bind(this);
    this.handleLine2 = this.handleLine2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZipCode = this.handleZipCode.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);

    this.handleF3 = this.handleF3.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleExpDate = this.handleExpDate.bind(this);
    this.handleCVV = this.handleCVV.bind(this);
    this.handleBillingZip = this.handleBillingZip.bind(this);

    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleCheckout(e) {
    e.preventDefault();
    axios
      .post('/api/checkout',{})
      .then( (data) => {
        this.setState({
          currentId: data.data
        })
      })
      .catch( (err) => {
        console.error(err);
      })
    this.setState({
      currentPage: 'F1'
    })
  }


  handleF1(e) { // name, email, and password
    e.preventDefault();
    axios
      .put('/api/checkout', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        id: this.state.currentId
      })
      .then( (response) => {console.log(response.data)})
      .catch( (err) => {
        console.log(err);
      })
    this.setState({
      currentPage: 'F2'
    }) 
  }
  handleName(e) {
    const input = e.target.value;
    this.setState({name: input});
  }
  handleEmail(e) {
    const input = e.target.value;
    this.setState({email: input});
  }
  handlePassword(e) {
    const input = e.target.value;
    this.setState({password: input});
  }

  handleF2(e) { // line 1, line 2, city, state, zip code) and phone number.
    e.preventDefault();
    axios
      .put('/api/checkout', {
        line1: this.state.line1,
        line2: this.state.line2,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber,
        id: this.state.currentId
      })
      .then( (response) => {console.log(response.data)})
      .catch( (err) => {
        console.log(err);
      })
    this.setState({
      currentPage: 'F3'
    }) 
  }
  handleLine1(e) {
    const input = e.target.value;
    this.setState({line1: input});
  }
  handleLine2(e) {
    const input = e.target.value;
    this.setState({line2: input});
  }
  handleCity(e) {
    const input = e.target.value;
    this.setState({city: input});
  }
  handleState(e) {
    const input = e.target.value;
    this.setState({state: input});
  }
  handleZipCode(e) {
    const input = e.target.value;
    this.setState({zipCode: input});
  }
  handlePhoneNumber(e) {
    const input = e.target.value;
    this.setState({phoneNumber: input});
  }

  handleF3(e) { // credit card #, expiry date, CVV, and billing zip code.
    e.preventDefault();
    axios
      .put('/api/checkout', {
        creditCard: this.state.creditCard,
        expDate: this.state.expDate,
        cvv: this.state.cvv,
        billingZipCode: this.state.billingZipCode,
        id: this.state.currentId
      })
      .then( (response) => {console.log(response.data)})
      .catch( (err) => {
        console.log(err);
      })
    this.setState({
      currentPage: 'confirm'
    }) 
  }
  handleCreditCard(e) {
    const input = e.target.value;
    this.setState({creditCard: input});
  }
  handleExpDate(e) {
    const input = e.target.value;
    this.setState({expDate: input});
  }
  handleCVV(e) {
    const input = e.target.value;
    this.setState({cvv: input});
  }
  handleBillingZip(e) {
    const input = e.target.value;
    this.setState({billingZipCode: input});
  }

  handleConfirmation(e) {
    e.preventDefault();
    

    this.setState({
      currentPage: 'checkout'
    }) 
  }

  render() {
    const page = this.state.currentPage;
    if (page === 'checkout') {
      return (
        <div>
          <h1>
            Fake Amazon Website that doesn't do anything
          </h1>
          <form onSubmit={this.handleCheckout}>
            <button> Checkout! </button>
          </form>
        </div>
      )
    } else if (page === 'F1') {
      return (
        <div>
          <h1>
            Fake Amazon Website that doesn't do anything
          </h1>
          <form onSubmit={this.handleF1}>
            <div>Enter Name</div>
            <input onChange={this.handleName} type="text"/>
            <div>Enter Email</div>
            <input onChange={this.handleEmail} type="text"/>
            <div>Enter Password</div>
            <input onChange={this.handlePassword} type="text"/>
            <button> Next </button>
          </form>
        </div>
      )
    } else if (page === 'F2') {// line 1, line 2, city, state, zip code) and phone number.
      return (
        <div>
          <h1>
            Fake Amazon Website that doesn't do anything
          </h1>
          <form onSubmit={this.handleF2}>
            <div>Enter Line 1</div>
            <input onChange={this.handleLine1} type="text"/>
            <div>Enter Line 2</div>
            <input onChange={this.handleLine2} type="text"/>
            <div>Enter City</div>
            <input onChange={this.handleCity} type="text"/>
            <div>Enter State</div>
            <input onChange={this.handleState} type="text"/>
            <div>Enter Zipcode</div>
            <input onChange={this.handleZipCode} type="text"/>
            <div>Enter Phone Number</div>
            <input onChange={this.handlePhoneNumber} type="text"/>
            <button> Next </button>
          </form>
        </div>
      )
    } else if (page === 'F3') {// credit card #, expiry date, CVV, and billing zip code.
      return (
        <div>
          <h1>
            Fake Amazon Website that doesn't do anything
          </h1>
          <form onSubmit={this.handleF3}>
            <div>Enter Credit Card #</div>
            <input onChange={this.handleCreditCard} type="text"/>
            <div>Enter Expiration Date</div>
            <input onChange={this.handleExpDate} type="text"/>
            <div>Enter CVV</div>
            <input onChange={this.handleCVV} type="text"/>
            <div>Enter Billing Zipcode</div>
            <input onChange={this.handleBillingZip} type="text"/>
            <button> Next </button>
          </form>
        </div>
      )
    } else if (page === 'confirm') {
      return (
        <div>
          <h1>
            Fake Amazon Website that doesn't do anything
          </h1>
          <div>Name: {this.state.name}</div>
          <div>Email: {this.state.email}</div>
          <div>Password: {this.state.password}</div>
          <div>Line1: {this.state.line1}</div>
          <div>Line2: {this.state.line2}</div>
          <div>City: {this.state.city}</div>
          <div>State: {this.state.state}</div>
          <div>Zip Code: {this.state.zipCode}</div>
          <div>Phone Number: {this.state.phoneNumber}</div>
          <div>Credit Card: {this.state.creditCard}</div>
          <div>Exp. Date: {this.state.expDate}</div>
          <div>CVV: {this.state.cvv}</div>
          <div>Billing Zip Code: {this.state.billingZipCode}</div>
          <form onSubmit={this.handleConfirmation}>
            <button> Confirm </button>
          </form>
        </div>
      )
    }

  }
}

export default App;
