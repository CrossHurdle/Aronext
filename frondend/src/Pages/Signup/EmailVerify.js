import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Api from "../../Api";
import "./EmailStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getEmailVerification } from "../../Store/Action/emailVerificationAction";
import { Spinner } from "react-bootstrap";

const EmailVerify = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.email);
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  console.log("dataddddddd", data);
  useEffect(() => {
    verifyEmailUrl();
  }, []);

  const verifyEmailUrl = async () => {
    try {
      await axios
        .get(
          `http://localhost:8080/signup/student/user/${param.id}/verify/${param.token}`
        )
        .then(() => {
          dispatch(getEmailVerification(true));
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.verifyUrl === true ? (
            <div className="container">
              {/* <img src={success} alt="success_img" className={styles.success_img} /> */}
              <h1>Email verified successfully</h1>
              <Link to="/login">
                <button className="green_btn">Login</button>
              </Link>
            </div>
          ) : (
            <h1>Your Email Id is already varified</h1>
          )}
        </>
      )}
    </div>
  );
};

export default EmailVerify;
