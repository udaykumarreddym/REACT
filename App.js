import React from "react";
import ReactDOM from "react-dom/client";

/*
  Components:
  - Header
    -Logo
    -Nav Items
  - Body
    -Search
    -Restaurant Container
      -Restaurant Card
        -Image
        -Name
        -Cuisines
        -Rating
  - Footer
    -Copyright
    -Links
    -Contact
    -Address
*/

const resList = [
  {
    id: "R001",
    name: "Empire Restaurant",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=660",
    cuisines: ["North Indian", "Biryani", "Chinese"],
    avgRating: 4.3,
    totalRatings: 21500,
    deliveryTime: 28,
    costForTwo: 40000,
    isVeg: false,
    address: {
      locality: "Indiranagar",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Biryani",
        items: [
          {
            id: "M101",
            name: "Chicken Biryani",
            price: 220,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1631515243349-3e94a2a8f6dd?w=600",
          },
          {
            id: "M102",
            name: "Veg Biryani",
            price: 180,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1600891963939-aedba52f2d8b?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R002",
    name: "Truffles",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=660",
    cuisines: ["American", "Fast Food", "Desserts"],
    avgRating: 4.6,
    totalRatings: 18200,
    deliveryTime: 32,
    costForTwo: 600,
    isVeg: false,
    address: {
      locality: "Koramangala",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Burgers",
        items: [
          {
            id: "M201",
            name: "Classic Chicken Burger",
            price: 280,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600",
          },
          {
            id: "M202",
            name: "Paneer Tikka Burger",
            price: 250,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1599974579688-8b63baf0b7e0?w=600",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { image, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLevel = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLevel />);
