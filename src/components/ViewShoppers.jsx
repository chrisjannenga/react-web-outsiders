import React from 'react'
import axios from 'axios'
import '../App.css'

class ViewShoppers extends React.Component {
  state = {
    shopperOne: [],
    shopperTwo: [],
    shopperThree: [],
    shopperFour: [],
    shopperFive: [],
    shopperSix: [],
    shopperSeven: [],
    shopperEight: [],
    shopperNine: [],
    shopperTen: []
  }

  componentWillMount() {
    axios.get('http://localhost:8000/shoppers/1.json').then(response => this.setState({shopperOne: response.data}))
    axios.get('http://localhost:8000/shoppers/2.json').then(response => this.setState({shopperTwo: response.data}))
    axios.get('http://localhost:8000/shoppers/3.json').then(response => this.setState({shopperThree: response.data}))
    axios.get('http://localhost:8000/shoppers/4.json').then(response => this.setState({shopperFour: response.data}))
    axios.get('http://localhost:8000/shoppers/5.json').then(response => this.setState({shopperFive: response.data}))
    axios.get('http://localhost:8000/shoppers/6.json').then(response => this.setState({shopperSix: response.data}))
    axios.get('http://localhost:8000/shoppers/7.json').then(response => this.setState({shopperSeven: response.data}))
    axios.get('http://localhost:8000/shoppers/8.json').then(response => this.setState({shopperEight: response.data}))
    axios.get('http://localhost:8000/shoppers/9.json').then(response => this.setState({shopperNine: response.data}))
    axios.get('http://localhost:8000/shoppers/10.json').then(response => this.setState({shopperTen: response.data}))
  }

  render() {
    return (<div>
      <div className='cityBgFull fullPercent'>
        <div id="index-banner">
          <div className="container">
            <br/><br/><br/><br/>

            <div className="section">
              <div className="row center">
                <br/>
                <div className="col s12 m12 white-text">
                  <h2 className="light cursiveText">View the shoppers...</h2>
                </div>
              </div>
              <br/><br/>
            </div>
            <div className='section'>
              <div className='row'>
                <a href='/viewShopper/1'>
                <div className='col s12 m6'>
                    <div className="row center valign-wrapper">
                      <div className="col s6">
                        <img src="https://pbs.twimg.com/profile_images/925823089631412224/h47SGym3_400x400.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                      </div>
                      <br/>
                        <div className="col s6 center white-text">
                          <h5 className="light cursiveText">{this.state.shopperOne.first_name} {this.state.shopperOne.last_name}</h5>
                        </div>
                    </div>
                  </div>
                </a>
                <a href='/viewShopper/2'>
                  <div className='col s12 m6'>
                      <div className="row center valign-wrapper">
                        <div className="col s6">
                          <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/22885874_1978936202389288_4319242959393460557_n.jpg?oh=09096194a307e34dc362db7fb84c9bb2&oe=5AD10E88" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                        </div>
                        <br/>
                          <div className="col s6 center white-text ">
                            <h5 className="light cursiveText">{this.state.shopperTwo.first_name} {this.state.shopperTwo.last_name}</h5>
                          </div>
                      </div>
                    </div>
                  </a>
              </div>
              <div className='row'>
                <a href='/viewShopper/3'>
                <div className='col s12 m6'>
                    <div className="row center valign-wrapper">
                      <div className="col s6">
                        <img src="https://i.imgur.com/a0omete.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                      </div>
                      <br/>
                        <div className="col s6 center white-text">
                          <h5 className="light cursiveText">{this.state.shopperThree.first_name} {this.state.shopperThree.last_name}</h5>
                        </div>
                    </div>
                  </div>
                </a>
                <a href='/viewShopper/4'>
                  <div className='col s12 m6'>
                      <div className="row center valign-wrapper">
                        <div className="col s6">
                          <img src="https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/19624690_1371042239609580_4453883031572185088_n.jpg?ig_cache_key=MTU1MDg2NTE1NDAzMDk5Mjc4Nw%3D%3D.2" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                        </div>
                        <br/>
                          <div className="col s6 center white-text ">
                            <h5 className="light cursiveText">{this.state.shopperFour.first_name} {this.state.shopperFour.last_name}</h5>
                          </div>
                      </div>
                    </div>
                  </a>
              </div>
              <div className='row'>
                <a href='/viewShopper/5'>
                <div className='col s12 m6'>
                    <div className="row center valign-wrapper">
                      <div className="col s6">
                        <img src="https://pbs.twimg.com/media/DKHbyhpUIAAkMmU.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                      </div>
                      <br/>
                        <div className="col s6 center white-text">
                          <h5 className="light cursiveText">{this.state.shopperFive.first_name} {this.state.shopperFive.last_name}</h5>
                        </div>
                    </div>
                  </div>
                </a>
                <a href='/viewShopper/6'>
                  <div className='col s12 m6'>
                      <div className="row center valign-wrapper">
                        <div className="col s6">
                          <img src="https://i.pinimg.com/736x/bf/65/5b/bf655b697834e5d07f8d9786c1d2ab0f--mickey-mouse-clipart-mickey-mouse-quotes.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                        </div>
                        <br/>
                          <div className="col s6 center white-text ">
                            <h5 className="light cursiveText">{this.state.shopperSix.first_name} {this.state.shopperSix.last_name}</h5>
                          </div>
                      </div>
                    </div>
                  </a>
              </div>
              <div className='row'>
                <a href='/viewShopper/7'>
                <div className='col s12 m6'>
                    <div className="row center valign-wrapper">
                      <div className="col s6">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/character_mickeymouse_donaldduck_914f6b94.jpeg?region=0%2C0%2C450%2C450" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                      </div>
                      <br/>
                        <div className="col s6 center white-text">
                          <h5 className="light cursiveText">{this.state.shopperSeven.first_name} {this.state.shopperSeven.last_name}</h5>
                        </div>
                    </div>
                  </div>
                </a>
                <a href='/viewShopper/8'>
                  <div className='col s12 m6'>
                      <div className="row center valign-wrapper">
                        <div className="col s6">
                          <img src="https://i.imgur.com/jEROHNR.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                        </div>
                        <br/>
                          <div className="col s6 center white-text ">
                            <h5 className="light cursiveText">{this.state.shopperEight.first_name} {this.state.shopperEight.last_name}</h5>
                          </div>
                      </div>
                    </div>
                  </a>
              </div>
              <div className='row'>
                <a href='/viewShopper/9'>
                <div className='col s12 m6'>
                    <div className="row center valign-wrapper">
                      <div className="col s6">
                        <img src="https://i.imgur.com/tVKDCKE.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                      </div>
                      <br/>
                        <div className="col s6 center white-text">
                          <h5 className="light cursiveText">{this.state.shopperNine.first_name} {this.state.shopperNine.last_name}</h5>
                        </div>
                    </div>
                  </div>
                </a>
                <a href='/viewShopper/10'>
                  <div className='col s12 m6'>
                      <div className="row center valign-wrapper">
                        <div className="col s6">
                          <img src="http://img.pelican.com/img/microsites/pelican-pros/brittany-boddington-experience-pelican-pros-hunting.jpg" alt="" className="circle responsive-img whiteBorder z-depth-5"/>
                        </div>
                        <br/>
                          <div className="col s6 center white-text ">
                            <h5 className="light cursiveText">{this.state.shopperTen.first_name} {this.state.shopperTen.last_name}</h5>
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

export default ViewShoppers
