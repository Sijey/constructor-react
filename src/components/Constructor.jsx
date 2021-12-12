import React, {useEffect} from 'react';

const Constructor = () => {
  const key = '5u817CheLB9JUwhHFDW6QH58';
  const getProducts = () => {
    fetch('https://api.keepincrm.com/v1/products', {
      headers: {
        Name: 'X-Auth-Token',
        Value: key,
      },
    })
        .then(res => {
          console.log(res)
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