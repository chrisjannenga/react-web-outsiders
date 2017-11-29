import React from 'react'
import axios from 'axios'

class ShopperOneDashboard extends React.Component {
      state = {
        Shopper: []
      }

      componentWillMount() {
        axios.get('http://localhost:8000/shoppers/1.json').then(response => this.setState({Shopper: response.data}))
      }

      render() {
        return (
          <div>
            <div className="cityBG">
              <div id="index-banner">
                <div className="container">
                  <br/><br/><br/><br/>
                  <div className="row center">
                    <div className="col s2 offset-s5">
                      <img src="https://pbs.twimg.com/profile_images/925823089631412224/h47SGym3_400x400.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                    </div>

                  </div>
                  <div className="row center">
                    <br/>
                      <div className="col s12 m12 white-text">
                        <h1 className="light cursiveText">Hey there, {this.state.Shopper.first_name}.</h1>
                      </div>
                  </div>


                </div>
              <br/>

              </div>
            </div>
            <div className='grey darken-3'>
              <div className="container">
                <div className="section">

                  <div className="row">
                    <div className="col s12 m4">
                      <a href="/viewSurveys/all">
                      <div className="icon-block">
                        <h2 className="center orange-text">
                          <i className="material-icons large">content_paste</i>
                        </h2>
                        <h5 className="center white-text cursiveText">View Surveys</h5>

                        <p className="light white-text quickSandText">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                      </div>
                    </a>
                    </div>

                    <div className="col s12 m4">
                      <a href="/viewShopper/1">
                      <div className="icon-block">
                        <h2 className="center orange-text">
                          <i className="material-icons large">person</i>
                        </h2>
                        <h5 className="center white-text cursiveText">My Details</h5>

                        <p className="light white-text quickSandText">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                      </div>
                    </a>
                    </div>

                    <div className="col s12 m4">
                      <a href="/shopper/1/survey/1">
                      <div className="icon-block">
                        <h2 className="center orange-text">
                          <i className="material-icons large">move_to_inbox</i>
                        </h2>
                        <h5 className="center white-text cursiveText">Active Survey</h5>

                        <p className="light white-text quickSandText">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                      </div>
                    </a>
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
                      <a href="/shopper/1/editProfile">
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
                    <div className="col s12 m4">

                    </div>
                  </div>

                </div>
                <br/><br/>
              </div>
            </div>
          </div>
    )
  }
}

export default ShopperOneDashboard
