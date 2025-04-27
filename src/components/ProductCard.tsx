import React, { useState } from 'react';

const ProductCard = ({ 
  name, 
  price, 
  image, 
  description,
  isPopular
}: { 
  name: string; 
  price: number;
  image: string;
  description: string;
  isPopular?: boolean;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div 
      className={`card h-100 border-0 shadow-sm overflow-hidden transition-all duration-300 cursor-pointer
        ${isClicked ? 'scale-95 shadow-lg' : 'hover:shadow-lg hover:-translate-y-1'}`}
      onClick={handleClick}
    >
      <div className="position-relative h-32 h-md-40">
        <img
          src={image}
          alt={name}
          className="w-100 h-100 object-fit-cover"
        />
        {isPopular && (
          <div className="position-absolute top-2 top-md-3 end-2 end-md-3 bg-sage text-white px-2 py-0.5 rounded-pill small fw-medium">
            Popular
          </div>
        )}
      </div>
      <div className="card-body p-3 p-md-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="h5 h-md-4 font-display fw-bold text-brown mb-0">{name}</h3>
          <span className="h5 h-md-4 fw-bold text-sage">₱{price}</span>
        </div>
        <p className="small text-md text-brown/70 mb-0">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard; 