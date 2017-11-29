import React from 'react'
import '../App.css'

class AddBusiness extends React.Component {
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
                  <h2 className="light cursiveText">Add a Business...</h2>
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
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field white-text col s6">
                    <input id="question_1" type="text"/>
                    <label for="question_1" className='orange-text'>Business Name</label>
                  </div>
                  <div className="input-field col s6 white-text">
                    <input id="question_2" type="text"/>
                    <label for="question_2" className='orange-text'>Industry</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 white-text">
                    <input id="question_3" type="text"/>
                    <label for="question_3" className='white-text'>Street address</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s4 white-text">
                    <input id="question_4" type="text"/>
                    <label for="question_4" className='white-text'>City</label>
                  </div>
                  <div className="input-field col s4 white-text">
                    <input id="question_5" type="text"/>
                    <label for="question_5" className='white-text'>State</label>
                  </div>
                  <div className="input-field col s4 white-text">
                    <input id="question_6" type="text"/>
                    <label for="question_6" className='white-text'>Zip</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 white-text">
                    <input id="question_7" type="text"/>
                    <label for="question_7" className='white-text'>Tell us about your business</label>
                  </div>
                </div>
                <div className='row center'>
                  <div className="col s12 m4 offset-m4">
                  <a href="/owner/1" className="btn-large waves-effect waves-light orange ">Submit</a>
                </div>
                </div>
              </form>
            </div>
          </div>
          </div>
          <br/>
        </div>
      </div>
      </div>
  </div>
    )
  }
}


export default AddBusiness
