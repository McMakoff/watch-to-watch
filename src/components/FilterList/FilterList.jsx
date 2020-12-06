import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {actionCreator} from "../../reducer";

const mapStateToProps = (state, ownProps) => {
  return (
    Object.assign({}, ownProps, {
      activeGenre: state.activeGenre,
      genreList: state.genreList(),
    })
  );
};

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (genre) => dispatch(actionCreator.changeFilter(genre)),
  onChangeCard: (genre) => dispatch(actionCreator.changeCardList(genre)),
});

class FilterList extends Component {

  handleCatalogLinkClick(e) {
    e.preventDefault();
    const {onChangeFilter, onChangeCard} = this.props;
    const genre = e.currentTarget.dataset.genre;
    onChangeFilter(genre);
    onChangeCard(genre);
  }

  render() {
    const {activeGenre, genreList} = this.props;
    return (
      <ul className="catalog__genres-list">
        {genreList.map((genre) => {
          return (
            <li
              key={genre}
              className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}
            >
              <a
                data-genre={genre}
                href="#"
                className="catalog__genres-link"
                onClick={(e) => this.handleCatalogLinkClick(e)}
              >
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

FilterList.propTypes = {
  activeGenre: PropTypes.string,
  genreList: PropTypes.array,
  onChangeFilter: PropTypes.func,
  onChangeCard: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
