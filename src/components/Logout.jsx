import React from 'react'
import '../App.css'

class Logout extends React.Component {
  render(){
    return (
      <div className='fullHeight'>
        <div className="section cityBG fullHeight valign-wrapper" id="index-banner">
          <div className="container">
            <div className='card-panel grey darken-3'>
              <h1 className="header center white-text cursiveText">Outsiders</h1>
            <br/><br/><br/><br/><br/><br/>
            <div className="row center">
              <a href='/'><h2 className="header col s12 center orange-text"><i className="material-icons large">home</i></h2></a>
            </div>
            <br/><br/><br/><br/>
            <div className="row center">
              <h2 className="header col s12 light white-text quickSandText">You've been logged out!</h2>
            </div>


          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Logout
