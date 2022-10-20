import React from "react";
import Category from "../carousel/Category";
import { useStateValue } from "../../redux/StateProvider";
import "./AllProduct.css";

function AllProducts({ data, type }) {
  const [{ card_item }, dispatch] = useStateValue();

  function handleChange(e, typ) {
    if (typ === "app_product") {
      if (!card_item.includes(e?.colors?.[0]?.prod_media?.[0]?._id)) {
        card_item.push(e?.colors?.[0]?.prod_media?.[0]?._id);
        dispatch({
          type: "CARD_ITEM",
          item: { card_item: card_item },
        });
      }
    }
    if (typ === "stock_clearance") {
      if (
        !card_item.includes(e?.product_id?.colors?.[0]?.prod_media?.[0]?._id)
      ) {
        card_item.push(e?.product_id?.colors?.[0]?.prod_media?.[0]?._id);
        dispatch({
          type: "CARD_ITEM",
          item: { card_item: card_item },
        });
      }
    }

    if (typ === "all_categories") {
      if (!card_item.includes(e?._id)) {
        card_item.push(e?._id);
        dispatch({
          type: "CARD_ITEM",
          item: { card_item: card_item },
        });
      }
    }
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Category show={4}>
        {data &&
          data.map((element, index) => {
            return (
              <div key={index} onClick={() => handleChange(element, type)}>
                <div
                  className="ImgContainer"
                  style={{
                    padding: 1,
                    margin: 4,
                  }}
                >
                  {type === "app_product" ? (
                    <>
                      <img
                        src={
                          process.env.REACT_APP_IMAGE_BASE_URL_PRODUCTS +
                          element?.colors?.[0]?.prod_media?.[0]
                            ?.media_thumb_nail
                        }
                        alt="placeholder"
                        style={{ width: "80%" }}
                      />
                      <p>{element?.prod_name}</p>
                      <b>${element?.colors?.[0]?.prod_price}</b>
                    </>
                  ) : type === "stock_clearance" ? (
                    <>
                      <img
                        src={
                          process.env.REACT_APP_IMAGE_BASE_URL_PRODUCTS +
                          element?.product_id?.colors?.[0]?.prod_media?.[0]
                            ?.media_thumb_nail
                        }
                        alt="placeholder"
                        style={{ width: "80%" }}
                      />
                      <p>{element?.product_id?.prod_name}</p>
                      <b>${element?.product_id?.colors?.[0]?.prod_price}</b>
                    </>
                  ) : (
                    <>
                      <img
                        src={
                          process.env.REACT_APP_IMAGE_BASE_URL_FILES +
                          element?.cat_image
                        }
                        alt="placeholder"
                        style={{ width: "80%" }}
                      />

                      <p>{element?.cat_name}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </Category>
    </div>
  );
}

export default AllProducts;
