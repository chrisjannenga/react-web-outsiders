import React from 'react'
import axios from 'axios'
import '../App.css'

class EditOwnerProfile extends React.Component {
  state = {
    Owner: []
  }

  componentWillMount() {
    axios.get('http://localhost:8000/owners/1.json').then(response => this.setState({Owner: response.data}))
  }

  render() {
    return (
      <div>
      <div className="cityBgFull">
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
                  <input id="first_name" type="text" value={this.state.Owner.first_name}/>
                  <label for="first_name" className='white-text'>First Name</label>
                </div>
                <div className="input-field white-text col s6">
                  <input id="last_name" type="text" value={this.state.Owner.last_name}/>
                  <label for="last_name" className='white-text'>Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field white-text col s12">
                  <input id="name_of_business" type="text" value={this.state.Owner.name_of_business}/>
                  <label for="name_of_business" className='white-text'>Name of Business</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field white-text col s6">
                  <input id="city" type="text"value={this.state.Owner.city}/>
                  <label for="city" className='white-text'>City</label>
                </div>
                <div className="input-field white-text col s6">
                  <input id="zip_code" type="text" value={this.state.Owner.zip}/>
                  <label for="zip_code" className='white-text'>Zip</label>
                </div>
              </div>
            </form>
            <div className='row center'>
              <div className="col  s12 m4 offset-m4">
              <a href="/owner/1" className="btn waves-effect waves-light orange ">Update</a>
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

export default EditOwnerProfile
