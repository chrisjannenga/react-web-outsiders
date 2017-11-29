import React from 'react'

class LandingPage extends React.Component {
  render() {
    return (
      <div>

<div className="section cityBG" id="index-banner">
  <div className="container">
    <br/><br/><br/><br/><br/><br/>
    <h1 className="header center white-text cursiveText">Outsiders</h1>
    <br/><br/><br/><br/>
    <div className="row center">
      <h5 className="header col s12 light white-text quickSandText">Lets find a better way to shop and provide feedback</h5>
    </div>
    <br/><br/><br/><br/><br/><br/>
    <div className="row center">
      <div className="col s12 m4 offset-m2">
      <a href="/owners" id="download-button" className="btn-large waves-effect waves-light orange z-depth-5">Owner</a>
    </div>
    <div className="col s12 m4">
    <a href="/shoppers" id="download-button" className="btn-large waves-effect waves-light orange z-depth-5">Shopper</a>
  </div>
    </div>
    <br/><br/><br/><br/>

  </div>
</div>

<div className='grey darken-3'>
  <div className="container">
    <div className="section">


      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center orange-text"><i className="material-icons large">flash_on</i></h2>
            <h5 className="center cursiveText white-text">Speeds up development</h5>

            <p className="light white-text quickSandText">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center orange-text"><i className="material-icons large">group</i></h2>
            <h5 className="center cursiveText white-text">User Experience Focused</h5>

            <p className="light white-text quickSandText">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center orange-text"><i className="material-icons large">settings</i></h2>
            <h5 className="center cursiveText white-text">Easy to work with</h5>

            <p className="light white-text">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>
  <br/><br/>
  </div>
</div>

<footer className="page-footer orange">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Company Bio</h5>
        <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Settings</h5>
        <ul>
          <li><a className="white-text" href="#!">Link 1</a></li>
          <li><a className="white-text" href="#!">Link 2</a></li>
          <li><a className="white-text" href="#!">Link 3</a></li>
          <li><a className="white-text" href="#!">Link 4</a></li>
        </ul>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Connect</h5>
        <ul>
          <li><a className="white-text" href="#!">Link 1</a></li>
          <li><a className="white-text" href="#!">Link 2</a></li>
          <li><a className="white-text" href="#!">Link 3</a></li>
          <li><a className="white-text" href="#!">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
    Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
    </div>
  </div>
</footer>
      </div>
    )
  }
}

export default LandingPage
