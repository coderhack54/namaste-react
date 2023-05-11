import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/data.js";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllRestaurants(data.data.cards[2].data.data.cards);
        setFilteredRestaurant(data.data.cards[2].data.data.cards);
      });
  }, []);
  const filterRes = () => {
    setFilteredRestaurant(
      allRestaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  };
  return (
    <div className="body">
      <div className="body__filtersection">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button onClick={filterRes}>Search</button>
      </div>
      <div className="cardsection">
        {filteredRestaurant.length > 0
          ? filteredRestaurant?.map((restaurant, index) => (
              <RestaurantCard
                resData={restaurant}
                key={restaurant.data.id}
                handleClick={(id) => {
                  console.log("inside handle click");
                  navigate("/restaurant/" + id);
                }}
              />
            ))
          : arr.map((item) => <Skeleton key={item} />)}
      </div>
    </div>
  );
};

export default Body;
