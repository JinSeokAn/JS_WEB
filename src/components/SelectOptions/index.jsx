import React from 'react';

const SelectOptions = ({title, data}) => {
  return(
    <select title={title} >
      {/* <option value="">선택해주세요.</option> */}
      {
        data.map( list => (
          <option key={list.id} value={list.val}>{list.name} {list.ect}</option>
        ))
      }
    </select>
  )
};

export default SelectOptions;