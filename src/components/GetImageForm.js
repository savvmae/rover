import React, { Component } from 'react';
import axios from 'axios';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';

const API_KEY = 'eggilvoAY8VgKcFjbzRWG35jy3QWR9HLBFBckjGK';

class GetImageForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rover: "Curiosity",
            camera: "FHAZ",
            images: [],
            sol: "",
        }
        this.fetchRoverImage = this.fetchRoverImage.bind(this);
    }

    handleRover = (e) => {
        e.preventDefault();
        this.setState({ rover: e.target.value });
    }

    handleCamera = (e) => {
        e.preventDefault();
        this.setState({ camera: e.target.value });
    }

    handleSol = (e) => {
        e.preventDefault();
        this.setState({ sol: e.target.value });    
    }

    fetchRoverImage = () => {
        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;

        let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

        axios.get(imageUrl).then(serverResponse => {
            this.setState({ images: serverResponse.data.photos })
            console.log(this.state);
            
        })
    }

    render() {
        return (
            <div>
                <div className="form">
                    <label htmlFor="rover">Rover</label>
                    <select onChange={this.handleRover} id="rover" value={this.state.value}>
                        <option value="Curiosity">Curiosity</option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Spirit">Spirt</option>
                    </select>
                    <label htmlFor="camera">Camera Type</label>
                    <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                        <option value="fhaz">FHAZ (Front Hazard)</option>
                        <option value="rhaz">RHAZ (Rear Hazard)</option>
                        <option value="navcam">NAVCAM (Navigation Cam)</option>
                    </select>
                    <label htmlFor="sol">Martian Sol: 1000-2000</label>
                    <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value} />

                    <GetImageButton onClick={this.fetchRoverImage}/>
                </div>
                <ImageDisplay data={this.state.images} />

            </div>
        );
    }
}

export default GetImageForm;