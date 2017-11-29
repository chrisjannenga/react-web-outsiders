import React from 'react'
import axios from 'axios'
import '../App.css'

class OwnerTwoDashboard extends React.Component {

  state = {
    Owner: []
  }

  componentWillMount() {
    axios.get('http://localhost:8000/owners/2.json').then(response => this.setState({Owner: response.data}))
  }

  render() {
    return (<div>
      <div className="cityBG">
        <div className='row grey darken-3'>
          <h5 className='white-text light right rightPadding cursiveText'>Welcome, {this.state.Owner.first_name}</h5>
        </div>
        <div id="index-banner">
          <div className="container">
            <br/><br/><br/><br/>
            <div className="row center">
              <div className="col s2 offset-s5">
                <img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/19622935_100444080600037_8034700135009091584_a.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
              </div>

            </div>
            <div className="section">
              <div className="row">
                <br/>
                <div className="col s12 m6 white-text">
                  <h2 className="light cursiveText">Your Business...</h2>
                </div>
              </div>
              <div className="row center">
                <div className="col s12 m8 offset-m2 white-text">
                  <h1 className="quickSandText">{this.state.Owner.name_of_business}</h1>
                </div>
                <br/>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='grey darken-3'>
        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <a href="/createSurvey">
                  <div className="icon-block">
                    <h2 className="center orange-text">
                      <i className="material-icons large">create</i>
                    </h2>
                    <h5 className="center white-text cursiveText">Create a Survey</h5>

                    <p className="light white-text quickSandText">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </a>
              </div>

              <div className="col s12 m4">
                <a href="/addBusiness">
                  <div className="icon-block">
                    <h2 className="center orange-text">
                      <i className="material-icons large">business</i>
                    </h2>
                    <h5 className="center white-text cursiveText">Add a Business</h5>

                    <p className="light white-text quickSandText">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                </a>
              </div>

              <div className="col s12 m4">
                <a href="/viewShoppers">
                  <div className="icon-block">
                    <h2 className="center orange-text">
                      <i className="material-icons large">people</i>
                    </h2>
                    <h5 className="center white-text cursiveText">View Shoppers</h5>

                    <p className="light white-text quickSandText">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
          <br/><br/>
        </div>
      </div>
      <div className='grey darken-3'>
        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <a href="/owner/2/survey/1">
                  <div className="icon-block">
                    <h2 className="center orange-text">
                      <i className="material-icons large">content_paste</i>
                    </h2>
                    <h5 className="center white-text cursiveText">Past Surveys</h5>

                    <p className="light white-text quickSandText">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </a>
              </div>

              <div className="col s12 m4">
                <a href="/editOwnerProfile/owner/2">
                  <div className="icon-block">
                    <h2 className="center orange-text">
                      <i className="material-icons large">contacts</i>
                    </h2>
                    <h5 className="center white-text cursiveText">Edit Profile</h5>

                    <p className="light white-text quickSandText">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                </a>
              </div>

              <div className="col s12 m4">
                <a href="/logOut">
                  <div className="icon-block">
                    <h2 className="center orange-text">
                      <i className="material-icons large">power_settings_new</i>
                    </h2>
                    <h5 className="center white-text cursiveText">Log Out</h5>

                    <p className="light white-text quickSandText">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
          <br/><br/>
        </div>
      </div>
    </div>)
  }
}

export default OwnerTwoDashboard
