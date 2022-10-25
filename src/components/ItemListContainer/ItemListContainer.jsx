import React from 'react';
import Item from '../Item/Item';



function ItemListContainer() {
  return (
    <div>

     <Item detail="bla bla bla" price={20000} title="primer producto" imgurl="/img/h01.jpg"/>
        <Item detail="bla bla bla" price={25000} title="segundo producto" imgurl="/img/h02.jpg"/>
        <Item detail="bla bla bla" price={22000}  title="tercer producto" imgurl="/img/h03.jpg"/>

    </div>
  );
}

export default ItemListContainer;