import React from 'react';

export const SearchBox = ({placeholder, handleFunc})=>{
    return <input type="text" placeholder={placeholder} onChange={handleFunc} />

}