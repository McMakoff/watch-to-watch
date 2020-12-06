import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Card from "../Card/Card";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return (
    Object.assign({}, ownProps, {
      cardList: state.cardList,
    })
  );
};

class CardList extends Component {
  render() {
    const {cardList} = this.props;

    return (
      <div className="catalog__movies-list">
        {cardList.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.array,
};

export default connect(mapStateToProps, null)(CardList);
