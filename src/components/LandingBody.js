import React from 'react'


class LandingBody extends React.Component {
    render(){
        return (
            <div class="card CardShopper ">
                <div class="card-content addSomeHeightTop white-text">

                </div>
                <div class="card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a href="#test4">What we do</a></li>
                        <li class="tab"><a class="active" href="#test5">Register</a></li>
                        <li class="tab"><a href="#test6">Log in</a></li>
                    </ul>
                </div>
                <div class="card-content grey lighten-4 addSomeHeightBottom">
                    <div id="test4">Test 1</div>
                    <div id="test5">Test 2</div>
                    <div id="test6">Test 3</div>
                </div>
            </div>
        )
    }
}

export default LandingBody
