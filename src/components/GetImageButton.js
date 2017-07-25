import React, { Component } from 'react';


class GetImageButton extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>Get Images
                </button>

            </div>
        );
    }
}

export default GetImageButton;