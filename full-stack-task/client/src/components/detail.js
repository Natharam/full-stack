import React from 'react';
import querystring from 'query-string';
import { useNavigate } from 'react-router';

const Detail = () => {
  let navigate = useNavigate();

  const queryParam = querystring.parse(window.location.search);

  return (
    <>
      <button onClick={() => navigate('/')} className='navigate'>Go back</button>
      <div className="detail-item">
        <p>Phone name: {queryParam.phone_name}</p>
        <img alt="img" src={queryParam.image}></img>
      </div>
    </>
  );
};

export default Detail;
