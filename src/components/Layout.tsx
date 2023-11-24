"use client";


import Navbar from "./NavBar/Navbar";
import * as React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      // className={styles.layout}
      className="bg-white dark:bg-black"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Navbar Component */}
      <Navbar/>
      {children}
      {/* Container for Sidebar and Main Content */}
      {/*<div style={{ display: "flex", flex: 1 }}>*/}

      {/*  /!* Main Content *!/*/}
      {/*  <div className={styles.content} style={{ flex: 1, marginLeft: "5px" }}>*/}
      {/*    */}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
