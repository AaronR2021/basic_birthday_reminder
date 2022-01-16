import React from 'react';

const List = ({id,name,image,age}) => {
  return (
    <div className="indivCard">
      <img src={image} alt={name} />
      <div className="flex-col">
        <h4>{name}</h4>
        <h5>{age} years</h5>
      </div>
    </div>
  );
};

export default List;
