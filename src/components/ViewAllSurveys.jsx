import React from 'react'
import axios from 'axios'
import '../App.css'

class ViewAllSurveys extends React.Component {
  state = {
    surveyOne: [],
    surveyTwo: [],
    surveyThree: []
  }

  componentWillMount() {
    axios.get('http://localhost:8000/surveys/1.json').then(response => this.setState({surveyOne: response.data}))
    axios.get('http://localhost:8000/surveys/2.json').then(response => this.setState({surveyTwo: response.data}))
    axios.get('http://localhost:8000/surveys/3.json').then(response => this.setState({surveyThree: response.data}))
  }

  render() {
    return (<div>
      <div className='cityBgFull '>
        <div id="index-banner">
          <div className="container">
            <br/><br/><br/><br/>

            <div className="section">
              <div className="row center">
                <br/>
                <div className="col s12 m12 white-text">
                  <h2 className="light cursiveText">View all Surveys...</h2>
                </div>
              </div>
              <br/><br/>
            </div>
            <div className='section'>
              <div className='row'>
                <a href='/owner/1/survey/1'>
                <div className='col s12 m12 card-panel grey darken-3 z-depth-5'>
                    <div className="row center valign-wrapper">
                      <div className='col m6 offset-m3'>
                      <h3 className='quickSandText white-text'>Desert Dog Labs</h3>
                    </div>
                    </div>
                    <div className="row center valign-wrapper">
                      <div className='col m6 offset-m3'>
                      <h6 className='cursiveText white-text'>Software Development Shop</h6>
                    </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className='row'>
                <a href='/owner/2/survey/1'>
                <div className='col s12 m12 card-panel grey darken-3 z-depth-5'>
                    <div className="row center valign-wrapper">
                      <div className='col m6 offset-m3'>
                      <h3 className='quickSandText white-text'>Visionary Reflections</h3>
                    </div>
                    </div>
                    <div className="row center valign-wrapper">
                      <div className='col m6 offset-m3'>
                      <h6 className='cursiveText white-text'>Career Placement</h6>
                    </div>
                    </div>
                  </div>
                  </a>
              </div>
              <div className='row'>
                <a href='/owner/3/survey/1'>
                <div className='col s12 m12 card-panel grey darken-3 z-depth-5'>
                    <div className="row center valign-wrapper">
                      <div className='col m6 offset-m3'>
                      <h3 className='quickSandText white-text'>Wallick & Volk</h3>
                    </div>
                    </div>
                    <div className="row center valign-wrapper">
                      <div className='col m6 offset-m3'>
                      <h6 className='cursiveText white-text'>Mortgage Banking</h6>
                    </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default ViewAllSurveys
