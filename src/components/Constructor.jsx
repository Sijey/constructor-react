import React, {useEffect, useState} from 'react';
import config from "../config/environment";
import axios from "axios";

const Constructor = () => {
  const [state, setState] = useState([]);

  const getProducts = () => {
    return axios.get(`${config.baseUrl}/products`)
        .then((res) => {
          setState(res.data);
        })
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
      <div>
        {state.items && state.items.map(item => (
            <img src={item.asset_url} alt='image' />
        ))}
      </div>
  );
};

export default Constructor;