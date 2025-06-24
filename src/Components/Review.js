import React from "react";
import "../review.css";

const Review = () => {
  const reviews = [
    {
      name: "Syam Sundar",
      text: `Recently visited S.Jaswanth & Co Chartered Accountants, impressed with their expertise and professionalism. Provided personalized guidance and they were highly responsive. The team was efficient and handled the complicated paperwork with ease. They showed great attention to detail during the audit process and ensured the work were accurate. I highly recommend this CA firm for their professional, reliable, and knowledgeable service.`,
    },
    {
      name: "Kumar Pallapati",
      text: `I strongly recommend CA S Jaswanth. He gets your job done in the most simple and efficient way, be it personal finance/tax planning or firm/establishment works. One of the very good and honest CAs in Ongole.`,
    },
    {
      name: "Srikanth Kancherla",
      text: `I had my GST registration done through J S P U and associates. They have provided good service so far. It has been very helpful in filing GST returns for me. He is polite and excellent in his job, very professional, and always available to help. Thank you Jaswanth garu and Team for your services.`,
    },
  ];

  return (
    <div className="review-wrapper">
      {reviews.map((review, idx) => (
        <div className="review-card" key={idx}>
          <div className="review-header">
            <img
              src="maps.png"
              alt="Google Maps logo"
              className="review-logo"
            />
            <h3>{review.name}</h3>
          </div>
          <div className="stars">★★★★★</div>
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
