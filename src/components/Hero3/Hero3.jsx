import React from "react";

const Hero3 = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-full">1</button>
          </div>
        <figure>
          <img
            src=""
            alt="icon"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
