// src/context/housesContext.js
import React, { createContext } from "react";

const HousesContext = createContext([]);

export const HousesProvider = ({ children }) => {
  const houses = [
    {
      id: 1,
      address: "123 Maple Street",
      country: "USA",
      price: 300000,
      likes: 120,
      photo: "h2.jpg",
      description: "A beautiful house in the suburbs with a lovely garden and modern amenities.",
    },
    {
      id: 4,
      address: "MG Road",
      country: "USA",
      price: 300000,
      likes: 120,
      photo: "house1",
      description: "A beautiful house in the suburbs with a lovely garden and modern amenities.",
    },
    {
      id: 2,
      address: "456 Oak Avenue",
      country: "Canada",
      price: 450000,
      likes: 85,
      photo: "house2",
      description: "A charming house in a quiet neighborhood with excellent schools nearby.",
    },
    {
      id: 3,
      address: "789 Pine Drive",
      country: "UK",
      price: 500000,
      likes: 95,
      photo: "house3",
      description: "A modern house with stunning architecture and spacious living areas.",
    },
  ];

  return <HousesContext.Provider value={houses}>{children}</HousesContext.Provider>;
};

export default HousesContext;
