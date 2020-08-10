import React, { useState, useEffect } from "react";
import axios from "axios";

const StoreDetail = ({ storeId }) => {
  const [store, setStore] = useState({ storeId });

  useEffect(() => {
    fetchStore();
  }, [storeId]);

  const fetchStore = async () => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/posts/${storeId}`
    );
    console.log(result.data);
    setStore(result.data);
  };

  return (
    <div>
      <h1>Title: {store.title}</h1>
    </div>
  );
};

export default StoreDetail;
