import React from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import ListProducts from "../../components/listProducts/ListProducts";
import OtherInformations from "../../components/OtherInformations/OtherInformations";
import LiveChat from "../../components/liveChat/LiveChat";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <ListProducts />
      <OtherInformations />
      <LiveChat />
    </div>
  );
};

export default HomePage;
