import React from "react";
import "./Style.scss";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilterItems() {
  return (
    <div>
      <div className="filterItems">
        <div className="cotegories">
          {" "}
          <h4>CATEGORIES</h4>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        {Category.map((item) => {
          return (
            <>
              <div className="filterItems--short">
                <Checkbox {...label} />
                <p>
                  {item.name} <span className="numbersOfItems">({item.item})</span>
                </p>
              </div>
            </>
          );
        })}
      </div>
      <center className="numbersOfItems2">+ 27 more</center>
    </div>
  );
}

export default FilterItems;

const Category = [
  {
    name: "Shirt",
    item: "2345",
  },
  {
    name: "Jeans",
    item: "5345",
  },
  {
    name: "Tshirt",
    item: "2345",
  },
  {
    name: "Polo",
    item: "52345",
  },
  {
    name: "Denim",
    item: "72345",
  },
  {
    name: "Kurta",
    item: "23435",
  },
  {
    name: "Half shirt",
    item: "23345",
  },
  {
    name: "Muffler",
    item: "2345",
  },
  {
    name: "Chinos",
    item: "32345",
  },
  {
    name: "Leather",
    item: "234565",
  },
  {
    name: "Sweatshirt",
    item: "2343",
  },
  {
    name: "Belt",
    item: "25346",
  },
  {
    name: "Formal pants",
    item: "23345",
  },
  {
    name: "Wallets",
    item: "8345",
  },
  {
    name: "Caps",
    item: "2545",
  },
];
