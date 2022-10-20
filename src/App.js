import "./App.css";
import NavScrollExample from "./components/navbar/Navigation";
// import CategoryCarousel from "./components/CategoryCarousel/CategoryCarousel";
import AllProducts from "./components/CategoryCarousel/AllProducts";
import { useEffect, useState } from "react";
import { useStateValue } from "./redux/StateProvider";

function App() {
  const [{ banners, all_categories, stock_clearance, all_product }, dispatch] =
    useStateValue();

  const [banner, setBanner] = useState();

  useEffect(() => {
    let requestOptions = {
      method: "POST",
    };

    fetch(process.env.REACT_APP_GET_ALL_BANNER, requestOptions)
      .then((response) => response.json())
      .then((result) => setBanner(result))
      .catch((error) => console.log("error", error));

    fetch(process.env.REACT_APP_GET_ALL_CATEGORY, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        dispatch({
          type: "ALL_CATEGORIES",
          item: { all_categories: result },
        })
      )
      .catch((error) => console.log("error", error));

    fetch(process.env.REACT_APP_GET_STOCK_CLEARANCE, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        dispatch({
          type: "STOCK_CLEARANCE",
          item: { stock_clearance: result },
        })
      )
      .catch((error) => console.log("error", error));

    fetch(process.env.REACT_APP_GET_ALL_PRODUCT_APP, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        dispatch({
          type: "ALL_PRODUCT",
          item: { all_product: result },
        })
      )
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (banner) {
      dispatch({
        type: "BANNERs",
        item: { banners: banner },
      });
    }
  }, [banner]);

  // console.log("all_product", all_product);

  return (
    <div className="App container">
      <NavScrollExample />
      <br />
      <img
        src={
          process.env.REACT_APP_IMAGE_BASE_URL_FILES + banners?.data?.[0]?.image
        }
        alt="noImageFound"
        style={{ width: "40%", height: "20%", cursor: "pointer" }}
      />
      <h1>Top Categories</h1>
      <br />

      <AllProducts data={all_categories?.data} type={"all_categories"} />
      <h1>Get All Products</h1>
      <br />

      <AllProducts
        data={stock_clearance?.data?.products_list}
        type={"stock_clearance"}
      />

      <h1>
        {stock_clearance?.data?.type}{" "}
        <span>upto {stock_clearance?.data?.discount_value}% Sale Ends</span>
      </h1>
      <br />

      <AllProducts data={all_product?.data} type={"app_product"} />
    </div>
  );
}

export default App;
