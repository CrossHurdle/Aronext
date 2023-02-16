import React from "react";
import "../../Css/Footer/trustsafety.scss";
import Layout from "../../Layout";
import { Input } from "antd";

function TrustAndSafety() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Layout>
        <div className="trust-main-div">
          <p className="para-div d-flex justify-content-center align-item-center">
            Enter the Phone Number with STD code to verify
          </p>
          <Search
            placeholder="Enter PhoneNumber"
            onSearch={onSearch}
            enterButton
            className="search-div"
          />
        </div>
      </Layout>
    </div>
  );
}

export default TrustAndSafety;
