import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreDetail = (props) => {
  const [store, setStore] = useState({});
  console.log(props.storeId);

  useEffect(() => {
    fetchStore();
  }, []);

  const fetchStore = async () => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/posts/${props.storeId}`,
    );
    console.log(result.data);
    setStore(result.data);
  };

  return (
    <div>
      <h1>{store.title}</h1>
    </div>
  );
};

export default StoreDetail;
