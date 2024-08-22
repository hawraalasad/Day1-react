import React from "react";

const ReviewsData = () => {
  return (
    <table>
      <thead>
        <tr className="first-table-row">
          <th className="table">Product</th>
          <th className="table">Name</th>
          <th className="table">Review</th>
          <th className="table">Edit Review</th>
          <th className="table"> Delete review</th>
        </tr>
      </thead>
      <tbody>
        <tr className={"second-table-row"}>
          <td className="table">Spanish latte</td>
          <td className="table">Hawraa</td>
          <td className="table">Review</td>
          <td className="table">
            <button className="modal-button-review">Edit</button>
          </td>
          <td className="table">
            <button className="modal-button-delete">Delete </button>
          </td>
        </tr>{" "}
        <tr className="third-table-row">
          <td className="table">Cookie cake</td>
          <td className="table">Lulu</td>
          <td className="table">The best cookie cake you'll ever taste</td>{" "}
          <td className="table">
            <button className="modal-button-review">Edit</button>{" "}
          </td>{" "}
          <td className="table">
            <button className="modal-button-delete">Delete</button>{" "}
          </td>{" "}
        </tr>{" "}
        <tr className="second-table-row">
          <td className="table">Spanish Latte</td>
          <td className="table">Dena</td>
          <td className="table">Perfect</td>{" "}
          <td className="table">
            <button className="modal-button-review">Edit</button>{" "}
          </td>{" "}
          <td className="table">
            <button className="modal-button-delete">Delete</button>{" "}
          </td>{" "}
        </tr>
      </tbody>
    </table>
  );
};

export default ReviewsData;
