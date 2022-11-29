import React from "react";

//importing links from next
import Link from "next/link";
import { Button } from "@mui/material";

export default () => {
  return (
    <>
      <div className="header">
        <div className="h-logo">
          <div className="lyte-img">
            <img
              src={"/degree.png"}
              style={{ height: "10vh", width: "10vh" }}
              alt="LYTE"
            />
          </div>
          <div className="lyte-org">
            <h1>Lyte Inventory</h1>
          </div>
          <div className="lyte-optn">
            <h3>LYTE</h3>
          </div>
        </div>
        <div className="h-links">
          <div className="features">
            <div>
              <Button>Features</Button>
            </div>
            <div className="f-dropdown">
              <hr />
              <p>Inventory</p>
              <p>Ledger Books</p>
              <p>Cash Books</p>
            </div>
          </div>
          <div>
            <Button className="btn">Pricing</Button>
          </div>
          <div>
            <Button className="btn" variant="outlined">
              Login
            </Button>
          </div>
          <div>
            <Button className="btn-org" variant="contained">
              Get It Free
            </Button>
            <Button className="btn-optn" variant="contained">
              Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
