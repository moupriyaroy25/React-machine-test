import React,{ useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import NextButton from './NextButton';
import './Card.css'

const Createads = () => {
  const cardInfo = [
    {
      image: "https://www.screenleap.com/img/instructions/mobile_screenleap_for_android.jpg",
      title: "Text ad",
      text: "Create a text ad",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Video ad",
      text: "Create a video ad",
    },
  ];

  const navigate = useNavigate();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardCheckboxChange = (index) => {
    setSelectedCardIndex(index);
  };

  const handleNext = () => {
    if (selectedCardIndex !== null) {
      navigate(selectedCardIndex === 0 ? '/textmediaform' : '/videomediaform');
    } else {
      // Handle case when no card is selected
      alert('Please select a card before proceeding.');
    }
  };
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Form.Check
        type="checkbox"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}
        onChange={() => handleCardCheckboxChange(index)}
      />
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return( <div>
    <div className="grid">{cardInfo.map(renderCard)}</div>
    <NextButton onClick={handleNext} className='button-container'/>
  </div>);
};

export default Createads;