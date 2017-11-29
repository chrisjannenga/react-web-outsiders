import React from 'react'
import axios from 'axios'
import '../App.css'

class CreateSurvey extends React.Component {
  state = {
    Survey: []
  }

  componentWillMount(){
    axios.get('http://localhost:8000/surveys/1.json').then(response => this.setState({Survey: response.data}))
  }

  render(){
    return (

      <div>
      <div className="cityBG">
        <div id="index-banner">
          <div className="container">

<br/>
            </div>
            <div className="section">
              <div className="row center">
                <div className="col s12 m12 white-text">
                  <h2 className="light cursiveText">Create a Survey...</h2>
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
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field white-text col s6">
                    <input id="question_1" type="text"/>
                    <label for="question_1" className='orange-text'>Question 1</label>
                  </div>
                  <div className="input-field col s6 white-text">
                    <input id="question_2" type="text"/>
                    <label for="question_2" className='white-text'>Question 2</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 white-text">
                    <input id="question_3" type="text"/>
                    <label for="question_3" className='white-text'>Question 3</label>
                  </div>
                  <div className="input-field col s6 white-text">
                    <input id="question_4" type="text"/>
                    <label for="question_4" className='white-text'>Question 4</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 white-text">
                    <input id="question_5" type="text"/>
                    <label for="question_5" className='white-text'>Question 5</label>
                  </div>
                  <div className="input-field col s6 white-text">
                    <input id="question_6" type="text"/>
                    <label for="question_6" className='white-text'>Question 6</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 white-text">
                    <input id="question_7" type="text"/>
                    <label for="question_7" className='white-text'>Question 7</label>
                  </div>
                  <div className="input-field col s6 white-text">
                    <input id="question_8" type="text"/>
                    <label for="question_8" className='white-text'>Question 8</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 white-text">
                    <input id="question_9" type="text"/>
                    <label for="question_9" className='white-text'>Question 9</label>
                  </div>
                  <div className="input-field col s6 white-text">
                    <input id="question_10" type="text"/>
                    <label for="question_10" className='white-text'>Question 10</label>
                  </div>
                </div>
                <div className='row center'>
                  <div className="col s12 m4 offset-m4">
                  <a href="/owner/1/survey/1" className="btn-large waves-effect waves-light orange ">Submit</a>
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

export default CreateSurvey
