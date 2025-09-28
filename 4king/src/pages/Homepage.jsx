import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Slider from "../components/Slider";
const Homepage = () => {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
    },[]);
     const slideData = [
    {
      image: 'https://thethaiger.com/th/wp-content/uploads/2023/12/4KINGS-2-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%89%E0%B8%B2%E0%B8%A2-6-%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B8%81%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2-100-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%97-%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B2%E0%B8%94-%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87.png', 
      title: '4KING1',
      subtitle: 'เก็บขอมูลรูปลงในไหนวะ',
    },
    {
      image: 'https://thethaiger.com/th/wp-content/uploads/2023/12/4KINGS-2-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%89%E0%B8%B2%E0%B8%A2-6-%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B8%81%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2-100-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%97-%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B2%E0%B8%94-%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87.png', 
      title: '4KING2',
      subtitle: 'เก็บขอมูลรูปลงในไหนวะ',
    },
    {
      image: 'https://thethaiger.com/th/wp-content/uploads/2023/12/4KINGS-2-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%89%E0%B8%B2%E0%B8%A2-6-%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B8%81%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2-100-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%97-%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B2%E0%B8%94-%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87.png', 
      title: '4KING3',
      subtitle: 'เก็บขอมูลรูปลงในไหนวะ',
    },
    {
      image: 'https://thethaiger.com/th/wp-content/uploads/2023/12/4KINGS-2-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%89%E0%B8%B2%E0%B8%A2-6-%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B8%81%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2-100-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%97-%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B2%E0%B8%94-%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87.png', 
      title: '4KING4',
      subtitle: 'เก็บขอมูลรูปลงในไหนวะ',
    }
  ];

    return (
     <div className="homepage">
       <Slider slides={slideData} />
       
    </div>
  );
};

export default Homepage;