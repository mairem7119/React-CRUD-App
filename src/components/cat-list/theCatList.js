import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/cat-list.css";

const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_RoheZ9GWVCdbDjCYu8obqBAV9b1hQTypzQDBAc9nrI6fVdjq41aGHkY5I1bXGhGK";

export default function TheCatList() {
  const [cats, setCats] = useState([]);

  const fetchCatList = async () => {
    try {
      const response = await axios.get(API_URL);
      setCats(response.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    fetchCatList();
  }, []);

  return (
    <div>
      <h1>Cat list</h1>
      <div className="cat-container">
        {cats.map((cat) => (
          <img src={cat.url} key={cat.id} alt="" className="cat-card"/>
        ))}
      </div>
    </div>
  );
}
