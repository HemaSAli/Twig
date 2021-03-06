import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
  const { values, section } = props;
  return (
    <ul className="box">
      {values && values.map((element) => {
        const {
          question, id, username, translations, date,
        } = element;
        return (
          <li key={id} className="box__card">
            <Link to={`/main/${section}/questions/${id}`}>
              <div>{question}</div>
              <div className="box__card--content">
                <div>
                  {username}
                </div>
                <div className="box__card--content--box">
                  <div>
                    { `${translations} translations`}
                  </div>
                  <div>
                    {date.slice(0, 10)}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
  section: PropTypes.string.isRequired,

};

export default Card;
