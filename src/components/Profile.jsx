import React, { Component } from "react";
import Timer from "./Timer";

class Profile extends Component {
    state = {
        fullName: "Christiano Ronaldo",
        age: "38",
        imgSrc: "CRonaldo.jpeg",
        profession: "Footballer",
        isVisible: false,
        mountedTime: 0
    };

    handleVissible = () => {
        this.setState((prevState) => ({isVisible: !prevState.isVisible}));
        
    };




    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState((prevState) => ({
            mountedTime: prevState.mountedTime + 1
          }));
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        return (
            <div>
                <Timer/>
                <h1>User's Profile Card</h1>
                {this.state.isVisible && (
                    <div>
                        <img src={this.state.imgSrc} alt="CRonaldo" />
                        <h3>Name: {this.state.fullName}</h3>
                        <p>Age: {this.state.age}</p>
                        <p>Profession: {this.state.profession}</p>
                        <h4>This Component was mounted: {this.state.mountedTime} seconds ago!</h4>
                    </div>
                )}
                <button onClick={this.handleVissible}>{this.state.isVisible? "Hide Profile" : "Show Profile"}</button>
            </div>
        );
    }
}

export default Profile;
