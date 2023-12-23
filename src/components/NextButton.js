import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./NextButton.css";

const NextButton = ({ onClick }) => {
    const navigate = useNavigate();

    const handleNext = () => {
      if (onClick) {
        onClick();
      } else {
        // Default behavior when no custom onClick is provided
        console.error("NextButton: onClick function is not provided.");
      }
    };
  
    return (
      <div className='button-container'>
        <Button variant="primary" onClick={() => handleNext()}>
        Next
      </Button>
      </div>
    );
};

export default NextButton;
