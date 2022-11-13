import axios from 'axios';
import React, { useEffect, useState } from 'react';
const viewall = 'http://localhost:3001/view-all';

const ViewAll = () => {
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get(viewall)
      .then((response) => {
        setPhone(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="list-item">
      {phone?.map((item) => (
        <div className="item" key={item.slug}>
          <p>Phone name: {item.phone_name}</p>
          <p>Brand name: {item.brand_name}</p>
          <img alt="img" src={item.image}></img>
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
