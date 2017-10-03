import React from 'react';

export default function withGallery(ImageComponent, store) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.images = store;
      this.images.push(props);
      this.state = {
        currentImage: null,
      };
    }

    handleImageClick = () => {
      this.setState(setCurrentImage(this.images));
      console.log(this.state);
      // TODO: Set image and style for modal
    };

    render() {
      return <ImageComponent onClick={this.handleImageClick} {...this.props} />;
    }
  };
}

// Declare state changes separately from component class. More functional. Easier to test.
// https://twitter.com/dan_abramov/status/824308413559668744/photo/
function setCurrentImage(images) {
  console.log(images);
  return (state, props) => ({
    currentImage: images.find(image => image.src == props.src),
  });
}

// export class ImageGall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.images = props.store;
//     this.state = {
//       currentImage: null,
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <img src={this.state.currentImage.src} />
//       </div>
//     );
//   }
// }
