import React from 'react'
import axios from 'axios'
import '../App.css'

class ShopperTwoEditProfile extends React.Component {
  state = {
    shopper: []
  }

  componentWillMount() {
    axios.get('http://localhost:8000/shoppers/2.json').then(response => this.setState({shopper: response.data}))
  }

  render() {
    return (
      <div>
      <div className="cityBG">
        <div id="index-banner">
          <div className="container">
            <br/><br/><br/><br/>


            </div>
            <div className="section">
              <div className="row center">
                <br/>
                <div className="col s12 m12 white-text">
                  <h2 className="light cursiveText">Edit your profile...</h2>
                </div>
              </div>
              <br/><br/>
            </div>

          </div>




        <div className="container">
          <div className="section">
            <br/>
            <div className="card-panel grey darken-3">
              <div className='container'>
                <br/>
                <div>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field white-text col s6">
                          <input id="first_name" type="text" value={this.state.shopper.first_name}/>
                          <label for="first_name" className='white-text'>First Name</label>
                        </div>
                        <div className="input-field white-text col s6">
                          <input id="last_name" type="text"value={this.state.shopper.last_name}/>
                          <label for="last_name" className='white-text'>Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field white-text col s6">
                          <input id="age" type="text" value={this.state.shopper.age}/>
                          <label for="age" className='white-text'>Age</label>
                        </div>
                        <div className="input-field white-text col s6">
                          <input id="occupation" type="text"value={this.state.shopper.occupation}/>
                          <label for="occupation" className='white-text'>Occupation</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field white-text col s6">
                          <input id="first_name" type="text" value={this.state.shopper.years_exp}/>
                          <label for="first_name" className='white-text'>Years Experience</label>
                        </div>
                        <div className="input-field white-text col s6">
                          <input id="last_name" type="text" value={this.state.shopper.city}/>
                          <label for="last_name" className='white-text'>City</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field white-text col s6">
                          <input id="first_name" type="text" value={this.state.shopper.state}/>
                          <label for="first_name" className='white-text'>State</label>
                        </div>
                        <div className="input-field white-text col s6">
                          <input id="last_name" type="text" value={this.state.shopper.zip}/>
                          <label for="last_name" className='white-text'>Zip</label>
                        </div>
                      </div>

                    </form>
            <div className='row center'>
              <div className="col  s12 m4 offset-m4">
              <a href="/shopper/2" className="btn waves-effect waves-light orange ">Update</a>
            </div>
            </div>
            </div>
                </div>
          </div>
          </div>
          <br/><br/><br/><br/>
        </div>
      </div>
      </div>
  </div>
    )
  }
}

export default ShopperTwoEditProfile
