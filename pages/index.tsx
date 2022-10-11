import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [GI, setGI] = useState({});
  const [baseGI, setBaseGI] = useState({
    con: 0,
    pow: 0,
    eye: 0,
    speed: 0,
    field: 0,
    grade: 0,
  });

  const calculateGI = async () => {
    const response = await fetch("./api/calculateGI.ts");
    const data = await response.json();
    setGI(data);
  };

  const baseGIChange = (id: string, val: any) => {
    const currBaseGI: any = baseGI;
    currBaseGI[id] = val;
    setBaseGI(currBaseGI);
  };

  return (
    <div className={styles.container}>
      <button onClick={calculateGI}>Calculate GI</button>
      <div>
        <form></form>
        <form>
          <input
            name="externalValue"
            placeholder="externalValue"
            value={baseGI["con"]}
            onChange={(e) => baseGIChange("con", e.currentTarget.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
