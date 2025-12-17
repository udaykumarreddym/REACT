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
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/ee/ab/bc/paneer-veggie-platter.jpg",
    cuisines: ["American", "Fast Food", "Desserts"],
    avgRating: 4.6,
    totalRatings: 18200,
    deliveryTime: 32,
    costForTwo: 60000,
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
  {
    id: "R003",
    name: "Meghana Foods",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg",
    cuisines: ["Andhra", "Biryani", "South Indian"],
    avgRating: 4.5,
    totalRatings: 30500,
    deliveryTime: 30,
    costForTwo: 50000,
    isVeg: false,
    address: {
      locality: "BTM Layout",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Biryani",
        items: [
          {
            id: "M301",
            name: "Andhra Chicken Biryani",
            price: 240,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1631515243349-3e94a2a8f6dd?w=600",
          },
          {
            id: "M302",
            name: "Paneer Biryani",
            price: 210,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1600891963939-aedba52f2d8b?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R004",
    name: "Udupi Garden",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZs9LIJoqTB34oq6CQXonVCpLVyzVsO-gPHg&s",
    cuisines: ["South Indian", "Vegetarian"],
    avgRating: 4.4,
    totalRatings: 9800,
    deliveryTime: 25,
    costForTwo: 30000,
    isVeg: true,
    address: {
      locality: "Jayanagar",
      city: "Bangalore",
    },
    menu: [
      {
        category: "South Indian",
        items: [
          {
            id: "M401",
            name: "Masala Dosa",
            price: 90,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600",
          },
          {
            id: "M402",
            name: "Idli Vada",
            price: 70,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1626776876729-bab66e5f4e55?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R005",
    name: "Paradise Biryani",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/2/91662/5c6f76bd1844f3814073926aadcb49ec.jpg?fit=around|750:500&crop=750:500;*,*",
    cuisines: ["Hyderabadi", "Biryani"],
    avgRating: 4.2,
    totalRatings: 16500,
    deliveryTime: 35,
    costForTwo: 55000,
    isVeg: false,
    address: {
      locality: "Marathahalli",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Biryani",
        items: [
          {
            id: "M501",
            name: "Hyderabadi Chicken Biryani",
            price: 260,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1631515243349-3e94a2a8f6dd?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R006",
    name: "Burger King",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/18225860/5f22edaa3391108ad75776b4cbce296e.jpg?fit=around|960:500&crop=960:500;*,*",
    cuisines: ["Fast Food", "American"],
    avgRating: 4.1,
    totalRatings: 22000,
    deliveryTime: 29,
    costForTwo: 45000,
    isVeg: false,
    address: {
      locality: "Whitefield",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Burgers",
        items: [
          {
            id: "M601",
            name: "Whopper",
            price: 190,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R007",
    name: "Pizza Hut",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme-ultimate-cheese.278ceafa1b5dd839e2b5c9c699243cac.1.jpg",
    cuisines: ["Italian", "Pizza"],
    avgRating: 4.0,
    totalRatings: 14800,
    deliveryTime: 34,
    costForTwo: 70000,
    isVeg: false,
    address: {
      locality: "Yelahanka",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Pizza",
        items: [
          {
            id: "M701",
            name: "Veggie Supreme",
            price: 320,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R008",
    name: "Wow! Momo",
    image:
      "https://b.zmtcdn.com/data/pictures/1/20450721/d41ca388b9c03a4ae5ba277dd68ed8d7_featured_v2.jpg",
    cuisines: ["Chinese", "Street Food"],
    avgRating: 4.3,
    totalRatings: 11200,
    deliveryTime: 26,
    costForTwo: 35000,
    isVeg: false,
    address: {
      locality: "HSR Layout",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Momos",
        items: [
          {
            id: "M801",
            name: "Chicken Steam Momo",
            price: 160,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1628294895716-7f66b2fa2a41?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R009",
    name: "Subway",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/8/20728/4f26cafc1ede0acadb4e7ad5cabd255f.jpg?fit=around|960:500&crop=960:500;*,*",
    cuisines: ["Healthy", "Fast Food"],
    avgRating: 4.2,
    totalRatings: 9000,
    deliveryTime: 27,
    costForTwo: 50000,
    isVeg: false,
    address: {
      locality: "Electronic City",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Sandwiches",
        items: [
          {
            id: "M901",
            name: "Veggie Delight",
            price: 200,
            isVeg: true,
            image:
              "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600",
          },
        ],
      },
    ],
  },
  {
    id: "R010",
    name: "Barbeque Nation",
    image:
      "https://b.zmtcdn.com/data/pictures/0/19120980/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg",
    cuisines: ["Barbecue", "North Indian"],
    avgRating: 4.6,
    totalRatings: 24500,
    deliveryTime: 40,
    costForTwo: 90000,
    isVeg: false,
    address: {
      locality: "JP Nagar",
      city: "Bangalore",
    },
    menu: [
      {
        category: "Grill",
        items: [
          {
            id: "M1001",
            name: "Grilled Chicken",
            price: 350,
            isVeg: false,
            image:
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
          },
        ],
      },
    ],
  },
];

export default resList;
