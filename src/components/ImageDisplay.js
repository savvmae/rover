import React, { Component } from 'react';


class ImageDisplay extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let { data } = this.props;
        let renderImages = data.map((image) => {
            return (
                <li key={image.id}>
                <img src={image.img_src} />
                </li>
            )
        })
        return (
            <div>
                { renderImages }

            </div>
        );
    }
}

export default ImageDisplay;