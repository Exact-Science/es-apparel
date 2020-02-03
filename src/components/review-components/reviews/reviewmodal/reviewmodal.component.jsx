import React from 'react';
import propTypes from 'prop-types';
import ReviewForm from './reviewform/reviewform.component';
import './reviewmodal-styles.scss';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo = async () => {
    const { id } = this.props;
    const data = await fetch(`http://3.134.102.30/products/${id}`);
    const results = await data.json();
    this.setState({ productName: results.name });
  }

  handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  }


  render() {
    const { productName } = this.state;
    const { show, toggleModal } = this.props;
    if (show) {
      return (
        <div className="reviewmodal">
          <div className="reviewmodal-main">
            <h2>Write your review here</h2>
            <h4>{`About the ${productName}:`}</h4>
            <ReviewForm handleSubmit={this.handleSubmit} />
            <button type="submit" onClick={toggleModal}>Close</button>
            <button type="submit" onClick={this.handleSubmit}>Submit Review</button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ReviewModal;

ReviewModal.propTypes = {
  id: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
};