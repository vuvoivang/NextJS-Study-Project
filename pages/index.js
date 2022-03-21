import { useContext } from "react";
import AppContext from "../context/index"
import Meta from "../components/Meta";
export default function Home() {
  // console.log(articles);
  // const context = useContext(AppContext);
  // console.log("My store:");
  // console.log(context);
  return (
    <div style={{
      borderRadius: "20px", overflow: "hidden",
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
      height: "60vh",
      color: "blue"

    }}>
      <Meta title="Home" keywords="products, list products" description="Show list of watches" />
      <h1>HOME PAGE</h1>
    </div>
  )
}

