import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/itemcard';
import SectionTitle from '../components/sectiontitle/index';
import Item from '../types/item';
import ItemsContainer from '../components/itemscontainer';

const OrdersPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get<Item[]>('http://localhost:8000/items')
      .then(({ data }) => setItems(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <SectionTitle title="Užsisakyk" description="Nuo ruginės duonos iki šventinių pyragų" />
      <ItemsContainer>{items.map(({ id, ...itemProps }) => <ItemCard key={id} {...itemProps} />)}</ItemsContainer>
    </>
  );
};

export default OrdersPage;
