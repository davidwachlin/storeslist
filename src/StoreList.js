import React, { useState, useEffect } from 'react';
import StoreDetail from './StoreDetail';
import axios from 'axios';
// import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [storeLinks, setStoreLinks] = useState([]);

  const [storeId, setStoreId] = useState(0);
  console.log(`storeId: ${storeId}`);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    renderList();
  }, [stores]);

  const fetchData = async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/posts');
    const storeList = result.data.slice(0, 10);
    setStores(storeList);
  };

  const selectStore = () => {};

  const renderList = () => {
    const storesList = stores.map((store) => {
      return (
        <Dropdown.Item as="button" key={store.id} eventKey={store.id}>
          {store.id}
        </Dropdown.Item>
      );
    });
    setStoreLinks(storesList);
  };

  return (
    <>
      <div>
        {storeLinks.length ? (
          <Dropdown
            id="dropdown-item-button"
            title="Dropdown button"
            navbar={true}
            onSelect={(eventKey, e) => {
              console.log(`eventKey: ${eventKey}`);
              console.log(e.target.value);
              setStoreId(eventKey);
            }}
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Stores
            </Dropdown.Toggle>
            <Dropdown.Menu>{storeLinks}</Dropdown.Menu>
          </Dropdown>
        ) : null}
      </div>
      <div>{storeId > 0 ? <StoreDetail storeId={storeId} /> : null}</div>
    </>
  );
};

export default StoreList;
