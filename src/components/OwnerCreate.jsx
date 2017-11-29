import React from 'react'
import '../App.css'

class OwnerCreate extends React.Component {
  render() {
    return (
      <div className="cityBgFull">
        <div className='container'>
          <div className='row fullHeight valign-wrapper'>
            <div className='col s12 m8 offset-m2'>
              <div className="card grey darken-3">
                <div className='container'>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width orange-text">
        <li className="tab grey darken-3"><a href="#ownerRegister" className='orange-text'>Register</a></li>
        <li className="tab grey darken-3"><a href="#ownerLogin" className='orange-text'>Login</a></li>
      </ul>
    </div>
    <div className="card-content orange-text">
      <div id="ownerRegister">
        <div>
          <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text"/>
          <label for="first_name" className='white-text'>First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text"/>
          <label for="last_name" className='white-text'>Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="name_of_business" type="text"/>
          <label for="name_of_business" className='white-text'>Name of Business</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="city" type="text"/>
          <label for="city" className='white-text'>City</label>
        </div>
        <div className="input-field col s6">
          <input id="zip_code" type="text"/>
          <label for="zip_code" className='white-text'>Zip</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email"/>
          <label for="email" className='white-text'>Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password"/>
          <label for="password" className='white-text'>Password</label>
        </div>
      </div>
    </form>
    <div className='row center'>
      <div className="col s12 m4 offset-m4">
      <a href="/owner/2" className="btn waves-effect waves-light orange ">Register</a>
    </div>
    </div>
  </div>
        </div>
      </div>
      <div id="ownerLogin">
        <div>
          <form>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email"/>
                <label for="email" className='white-text'>Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password"/>
                <label for="password" className='white-text'>Password</label>
              </div>
            </div>
          </form>
          <div className='row center'>
            <div className="col s12 m4 offset-m4">
            <a href="/owner/1" className="btn waves-effect waves-light orange ">Login</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
    </div>
  )
  }
}

export default OwnerCreate
