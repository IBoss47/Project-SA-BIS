// SaleList.jsx
import React from 'react';
import './SaleList.css'

function SaleItem({ image, title, type, price }) {
  return (
    <div className="sale-item">
      <img className="sale-image" src={image} alt={title} />
      <div className="sale-content">
        <div className="sale-title">{title}</div>
        <div className="sale-type">{type}</div>
        <div className="sale-price">{price}</div>
      </div>
    </div>
  );
}

function SaleList() {
  const books = [
    {
      image: 'https://parentotheca.com/wp-content/uploads/2021/09/IMG_0356-1-scaled.jpg',
      title: 'Atomic Habbits',
      type: 'E-Book',
      price: '฿495'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.zqQGbvA_MdTfN8f7AB9tOwAAAA?w=313&h=487&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Good vibe good life',
      type: 'E-book',
      price: '฿545'
    },
    {
      image: 'https://parentotheca.com/wp-content/uploads/2021/09/IMG_0356-1-scaled.jpg',
      title: 'Atomic Habbits',
      type: 'E-Book',
      price: '฿495'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.zqQGbvA_MdTfN8f7AB9tOwAAAA?w=313&h=487&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Good vibe good life',
      type: 'E-book',
      price: '฿545'
    },
    {
      image: 'https://parentotheca.com/wp-content/uploads/2021/09/IMG_0356-1-scaled.jpg',
      title: 'Atomic Habbits',
      type: 'E-Book',
      price: '฿495'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.zqQGbvA_MdTfN8f7AB9tOwAAAA?w=313&h=487&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Good vibe good life',
      type: 'E-book',
      price: '฿545'
    },
    {
      image: 'https://parentotheca.com/wp-content/uploads/2021/09/IMG_0356-1-scaled.jpg',
      title: 'Atomic Habbits',
      type: 'E-Book',
      price: '฿495'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.zqQGbvA_MdTfN8f7AB9tOwAAAA?w=313&h=487&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Good vibe good life',
      type: 'E-book',
      price: '฿545'
    },
    {
      image: 'https://parentotheca.com/wp-content/uploads/2021/09/IMG_0356-1-scaled.jpg',
      title: 'Atomic Habbits',
      type: 'E-Book',
      price: '฿495'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.zqQGbvA_MdTfN8f7AB9tOwAAAA?w=313&h=487&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Good vibe good life',
      type: 'E-book',
      price: '฿545'
    },
    {
      image: 'https://parentotheca.com/wp-content/uploads/2021/09/IMG_0356-1-scaled.jpg',
      title: 'Atomic Habbits',
      type: 'E-Book',
      price: '฿495'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.zqQGbvA_MdTfN8f7AB9tOwAAAA?w=313&h=487&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Good vibe good life',
      type: 'E-book',
      price: '฿545'
    }
  ];

  return (
    <div className="sale-list">
      {books.map((book, index) => (
        <SaleItem
          key={index}
          image={book.image}
          title={book.title}
          type={book.type}
          price={book.price}
        />
      ))}
    </div>
  );
}

export default SaleList;