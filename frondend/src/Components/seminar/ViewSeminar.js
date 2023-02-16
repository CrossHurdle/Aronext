import React from "react";
import "./viewSeminar.scss";

export default function ViewSeminar() {
  return (
    <div>
      <div className="viewseminar_container p-4">
        <div className="pages-title mb-3">Seminars</div>
        <div className="seminar_card">
          <div className="flex padcheck">
            <div>
              <div className="inner_container_wrap">
                <div className="seminar_card_date">
                  <span>10 Nov - 14 Nov</span>
                  <span>10:00am</span>
                </div>
                <h4 className="seminar_card_title">React Seminar</h4>
                <div className="inner_container_wrap_flex">
                  <div className="seminar_card_date_wrapper flex">
                    <p className="seminar_card_technlogies">
                      <span>react</span>
                      <span>node</span>
                    </p>
                  </div>
                </div>
                {/* <p className="seminar_card_brief_des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
                  incidunt.
                </p> */}
                <div className="flex">
                  <div className="seminar_card_details">
                    <p className="seminar_card_access">Access :Open for all</p>
                    <p className="seminar_card_mode">Mode :Online</p>
                  </div>
                  <div className="seminar_card_contact">
                    <p className="seminar_card_name">Contact person :Ramesh</p>
                    <p className="seminar_card_number">
                      Contact number :94431414141
                    </p>
                  </div>
                </div>
                <p className="seminar_card_link">
                  Registration Link :https://www.adada.com
                </p>
                <div className="seminar_card_button_wrapper">
                  <button className="seminar_card_button loginbutton">
                    Edit
                  </button>
                  <button className="seminar_card_button loginbutton">
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////// */}
            <div>
              <div className="inner_container_wrap">
                <div className="seminar_card_date">
                  <span>12 Dec - 15 Dec</span>
                  <span>11:00 am</span>
                </div>
                <h4 className="seminar_card_title">Full Stack Seminar</h4>
                <div className="inner_container_wrap_flex">
                  <div className="seminar_card_date_wrapper flex">
                    <p className="seminar_card_technlogies">
                      <span>php</span>
                      <span>next</span>
                    </p>
                  </div>
                </div>
                {/* <p className="seminar_card_brief_des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
                  incidunt.
                </p> */}
                <div className="flex">
                  <div className="seminar_card_details">
                    <p className="seminar_card_access">Access :Open for all</p>
                    <p className="seminar_card_mode">Mode :Online</p>
                  </div>
                  <div className="seminar_card_contact">
                    <p className="seminar_card_name">Contact person :Suresh</p>
                    <p className="seminar_card_number">
                      Contact number :94431414141
                    </p>
                  </div>
                </div>
                <p className="seminar_card_link">
                  Registration Link :https://www.adada.com
                </p>
                <div className="seminar_card_button_wrapper">
                  <button className="seminar_card_button loginbutton">
                    Edit
                  </button>
                  <button className="seminar_card_button loginbutton">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ///////////////////////////// */}
        </div>
      </div>
    </div>
  );
}
