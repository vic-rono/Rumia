import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addProductReview } from "../actions/productAction";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Review = ({ product }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const sendReview = () => {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      let Reviewed;

      for (var i = 0; i < product.reviews.length; i++) {
        if (product.reviews[i].userid == currentUser._id) {
          Reviewed = true;
        }
      }

      if (Reviewed) {
        alert("You have reviewed this item");
      } else {
        const review = {
          rating: rating,
          comment: comment,
        };
        dispatch(addProductReview(review, product._id));
      }
    } else {
      window.location.href = "./login";
    }
  };

  return (
    <div>
      <Rating
        style={{ color: "orange" }}
        initialRating={5}
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiFillStar />}
        onChange={(e) => {
          setRating(e);
        }}
      />

      <input
        type="text"
        className="form-control mt-2"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <Button className="mt-3" type="reset" onClick={sendReview}>
        Submit Review
      </Button>
      <hr />

      <h2>Latest Reviews</h2>
      {product.reviews &&
        product.reviews.map((review) => {
          return (
            <div>
              <Rating
                style={{ color: "orange" }}
                initialRating={review.rating}
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar />}
                readonly
              />
              <p>{review.comment}</p>
              <p>{review.name}</p>
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default Review;
