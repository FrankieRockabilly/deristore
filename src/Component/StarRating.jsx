import React from 'react';

// Komponen untuk menampilkan rating bintang
const StarRating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]; // array untuk 5 bintang
    return (
        <div className="flex">
            {stars.map((star) => (
                <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? "gold" : "gray"} // Warna bintang berdasarkan rating
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
