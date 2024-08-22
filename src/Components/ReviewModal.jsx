import "../assets/css/container.css";

const Review = ({
  closeModal,
  handleName,
  handleReview,
  name,
  Static,
  review,
  AddAReview,
}) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h3>Share your review</h3>
        <form>
          <label className="review-text">Name:</label>
          <input
            type="text"
            required
            placeholder="Name"
            className="searchBar"
            onChange={handleName}
          ></input>
          <label className="review-text">How was your experience?</label>
          <input
            type="text"
            required
            className="searchBar"
            placeholder="It was something out of this world..."
            onChange={handleReview}
            onSubmit={AddAReview}
          ></input>
          <div className="two">
            <button className="modal-button" onClick={() => closeModal(false)}>
              Close
            </button>
            <input
              type="submit"
              value="Add Review"
              className="modal-button-review"
            ></input>
          </div>
        </form>
        <div className="review-div">
          <h2 className="actual-review-name">{name}</h2>
          {Static}
          <h4 className="actual-review">{review}</h4>
        </div>
      </div>
    </div>
  );
};

export default Review;
