import React from 'react'
import axios from 'axios'

class ViewShopperOne extends React.Component {
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
                        <h1 className="light cursiveText">{this.state.Shopper.first_name} {this.state.Shopper.last_name}</h1>
                      </div>
                  </div>


                </div>
              <br/>

              </div>

              <div className="container">
                <div className="section">
                  <div className="card-panel grey darken-3 z-depth-5">
                  <table className='white-text quickSandText centered highlight'>
                     <tbody>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>Age...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.age}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>Bio...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.bio}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>City...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.city}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>State...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.state}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>Zip...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.zip}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>Interested in...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.interested_in_shopping}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>Occupation...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.occupation}</h6></td>
                      </tr>
                      <tr>
                        <td><h5 className='cursiveText orange-text'>Years experience...</h5></td>
                        <td><h6 className='quickSandText orange-text'>{this.state.Shopper.years_exp}</h6></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br/><br/>
              </div>
            </div>
            </div>
          </div>
    )
  }
}

export default ViewShopperOne
