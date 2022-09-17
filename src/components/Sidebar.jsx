import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { categories } from "../utils/constants";

// const selectedCategory = 'New';
const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <Stack
      direction="row"
      sx={{ 
        overflow: "auto", 
        height: { sx: "auto", md: "95%" },
        flexDirection: {md:'column'}
      }}
    >
      {categories.map((cat, index) => (
        <button 
          onClick={()=>setSelectedCategory(cat.name)}
          className="category-btn"
          style={{
            background: cat.name === selectedCategory && '#FC1503',
            color:'white'
          }}
          key={cat.name}
        >
          <span style={{
            color: cat.name === selectedCategory ? "white" : 'red',
            marginRight: '15px'
          }}>
            {cat.icon}</span>
          <span style={{
            opacity: categories.name === selectedCategory ? 1 :0.8
          }}>
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
