import { useEffect, useState } from 'react';

const SetServices = () => {
    const [services,SetServices]=useState([]);
  useEffect(()=>{
    fetch('FakeData.json')
    .then(res=>res.json())
    .then(data=>SetServices(data))
  },[])
    return [services,SetServices]
};

export default SetServices;