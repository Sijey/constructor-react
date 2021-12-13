import React, {useEffect} from 'react';
import config from "../config/environment";

const Constructor = () => {
  const key = '5u817CheLB9JUwhHFDW6QH58';
  const getProducts = () => {
    fetch(`${config.baseUrl}/products?page=1`, {

      headers: {
        'X-Auth-Token': key,
      },
      // mode: 'no-cors',
    })
        .then((res) => {
          console.log(res);
        })
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
      <div>

      </div>
  );
};

export default Constructor;