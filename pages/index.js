import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from "@mui/material"
import MainFooter from '../Components/MainFooter'

export default function Home() {
  return (
    <>
    <main>
     <div className="_content_ctr">
      <div className="_content_txt">
          <h1 style={{textAlign: "left"}}>Online Inventory System That <br></br>  Simplifies Operations</h1>
          <h4>Managing your purchases, sales and truck your entire Inventory.   Trusted by thousands of Users around the World</h4>
          <Button
            color="primary"
            variant="contained"
            style={{padding:"15px",marginTop:"20px"}}
            >
          <Link href="/">
            <i className="las la-chevron-right"></i>
            <span> Register For Free Now</span>
          </Link>
          </Button>
      </div>
         <div className="img_ctr">
          <img src={"/wel.jpeg"} />
         </div>
     </div>
     </main>
     <MainFooter />
    </>
  )
}
