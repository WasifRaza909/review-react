import React, { useState } from 'react';
import reviews from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = reviews[index];

  const checkIndex = (number) => {
    if (number < 0) {
      return reviews.length - 1;
    }

    if (number > reviews.length - 1) {
      return 0;
    }

    return number;
  };

  const prevHandler = () => {
    const indexNumber = checkIndex(index - 1);
    setIndex(indexNumber);
  };

  const nextHandler = () => {
    const indexNumber = checkIndex(index + 1);
    setIndex(indexNumber);
  };

  const randomHandler = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber == index) {
      return setIndex(checkIndex(randomNumber + 1));
    }

    setIndex(randomNumber);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt='' className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevHandler}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomHandler}>
        Surprise Me
      </button>
    </article>
  );
};

export default Reviews;
