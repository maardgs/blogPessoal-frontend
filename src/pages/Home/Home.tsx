import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className="text-slate-900 text-5xl m-4">Home</h1>
      <div>
        <button type="submit"
            className="hover:underline mx-4"
            onClick={() => {navigate("/login") }} >
          login useNavigate
        </button>
        <Link to='/login' className='hover:underline mx-4'> Login por link </Link>
      </div>
      
    </div>
  );
}

export default Home;
