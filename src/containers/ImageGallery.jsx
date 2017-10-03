import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.images = this.props.store;

    React.Children.forEach(this.props.children, child => {
      this.images.push(child.props);
    });
  }

  handleClick() {
    // TODO
  }

  // TODO: Refactor using HoC for decorating wrapped component with onClick prop
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            onClick: this.handleClick,
          });
        })}
      </div>
    );
  }
}

export function ImageModal(props) {
  console.log(props.store);

  return (
    <div>
      <img src={props.src} />
    </div>
  );
}
