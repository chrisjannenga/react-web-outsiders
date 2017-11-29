import React from 'react'
import axios from 'axios'
import '../App.css'

class OwnerTwoSurveyView extends React.Component {
  state = {
    survey: [],
    owner: []
  }

  componentWillMount(){
    axios.get('http://localhost:8000/surveys/2.json').then(response => this.setState({survey: response.data}))
    axios.get('http://localhost:8000/owners/2.json').then(response => this.setState({owner: response.data}))
  }

  render(){
    return(
      <div>
        <div className="cityBG">
          <div id="index-banner">
            <div className="container">
            <div className="section">
              <div className="row ">
                <div className="col s12 m11 offset-m1 white-text">
                  <h3 className="light cursiveText">Survey for...</h3>
                </div>

                <div className="col s12 m12 white-text center">
                  <h2 className="light quickSandText">{this.state.owner.name_of_business}</h2>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="container">
            <div className="section">
              <div className="card-panel grey darken-3 z-depth-5">
                <table className='centered white-text quickSandText highlight'>
                  <thead>
                    <th className='cursiveText center'><h4>Questions..</h4></th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{this.state.survey.question_1}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_2}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_3}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_4}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_5}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_6}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_7}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_8}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_9}</td>
                    </tr>
                    <tr>
                      <td>{this.state.survey.question_10}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='row center top-pad'>
                  <div className="col s12 m4 offset-m4">
                  <a href="/owner/2" className="btn-large waves-effect waves-light orange ">Back to Dashboard</a>
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

export default OwnerTwoSurveyView
