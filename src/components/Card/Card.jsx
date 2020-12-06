import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    this.state = {
      isActive: false,
      isLoading: false
    };
  }

  componentDidMount() {
    const video = this.videoRef.current;
    video.oncanplaythrough = () => this.setState({isLoading: true});
  }

  componentDidUpdate() {
    const {isActive, isLoading} = this.state;
    const video = this.videoRef.current;

    if (isLoading) {
      if (isActive) {
        setTimeout(() => {
          video.play();
        }, 200);
      } else {
        video.pause();
        video.load();
      }
    }
  }

  mouseEnterHandler() {
    this.setState({isActive: true});
  }

  mouseLeaveHandler() {
    this.setState({isActive: false});
  }

  render() {
    const {data} = this.props;
    const {preview, name, src} = data;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this.mouseEnterHandler()}
        onMouseLeave={() => this.mouseLeaveHandler()}
      >
        <div className="small-movie-card__image">
          <video
            ref={this.videoRef}
            src={src}
            poster={preview}
            width="100%"
            height="100%"
            muted
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  isActive: PropTypes.func,
};
