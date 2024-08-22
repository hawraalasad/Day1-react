import React, { useState } from "react";
import Review from "./ReviewModal";

const ReviewTop = () => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [reviewData, setReviewData] = useState([]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleReview = (event) => {
    setReview(event.target.value);
  };
  const AddAReview = () => {
    setReviewData([...reviewData, review]);
    console.log(reviewData);
  };

  const Static = "'s review: ";

  return (
    <div>
      <Review
        handleName={handleName}
        handleReview={handleReview}
        name={name}
        Static={Static}
        review={review}
        AddAReview={AddAReview}
      />
    </div>
  );
};

export default ReviewTop;
