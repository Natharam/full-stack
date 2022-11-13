import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import querystring from 'query-string';

const url = 'http://localhost:3001/view';
const searchURL = 'http://localhost:3001/search';
const addFav = 'http://localhost:3001/add-fav';

const ViewLatest = () => {
  let navigate = useNavigate();

  const [phone, setPhone] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const getData = (link) => {
    axios
      .get(link)
      .then((response) => {
        setPhone(response.data.phones);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (data) => {
    axios
      .post(addFav, data)
      .then((response) => {
        setPhone(response.data.phones);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData(url);
  }, []);

  const searchPhone = (value) => {
    setPhone([]);
    getData(`${searchURL}?search=${value}`);
  };

  const markFav = (item) => {
    setFavorite([...favorite, item]);
    postData([...favorite, item]);
  };

  const getDetail = (item) => {
    navigate(`/detail?${querystring.stringify(item)}`)
  };

  console.log(favorite, 'ff');

  return (
    <div className="viewLatest">
      <button onClick={() => navigate('/viewall')}>View All</button>
      <div className="search-div">
        <input type="text" className="search" onChange={(e) => searchPhone(e.target.value)}></input>
      </div>

      <div className="list-item">
        {phone?.map((item) => (
          <div className="item" key={item.slug}>
            <button onClick={() => getDetail(item)}>Detail</button>

            <button onClick={() => markFav(item)}>Mark as favorite</button>
            <p>Phone name: {item.phone_name}</p>
            <img alt="img" src={item.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLatest;
