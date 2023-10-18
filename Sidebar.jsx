import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Add } from "iconsax-react";
import {
  BlueHome,
  GrayHome,
  LogoImg,
  LogoMiniImg,
  GrayCalendar,
  BlueCalendar,
  GrayChart,
  BlueChart,
  BlueInvoice,
  GrayInvoice,
  BlueMoney,
  GrayMoney,
  BlueStartPerson,
  GrayStartPerson,
  GrayUser,
  BlueUser,
} from "../../assets/images";
import { translate } from "../../utils/translate";
import "../../assets/fonts/style.css";

const SidebarDiv = styled.div`
  border-right: 1px solid #e2e8f0;
  background: #ffffff;
  width: 264px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease 0s;
  z-index: 70;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100vh;
  span {
    transition: all 0.5s ease 0s;
  }
  .logo {
    height: 71px;
    text-align: "center";
  }
`;

const navigationItems = [
  {
    path: "/dashboard",
    activeFor: ["dashboard", "profile"],
    activeicon: BlueHome,
    icon: GrayHome,
    text: "home",
  },
  {
    path: "/webinars",
    activeFor: [
      "webinars",
      "create-webinar",
      "edit-webinar",
      "webinar-details",
      "webinar-link",
    ],
    activeicon: BlueCalendar,
    icon: GrayCalendar,
    text: "my_webinars",
  },
  {
    path: "/participants",
    activeFor: ["participants"],
    activeicon: BlueUser,
    icon: GrayUser,
    text: "participants",
  },
  {
    path: "/customers",
    activeFor: ["customers"],
    activeicon: BlueStartPerson,
    icon: GrayStartPerson,
    text: "customers",
  },
  {
    path: "/payment-invoices",
    activeFor: ["payment-invoices"],
    activeicon: BlueInvoice,
    icon: GrayInvoice,
    text: "payment_invoices",
  },
  {
    path: "/statistics",
    activeFor: ["statistics"],
    activeicon: BlueChart,
    icon: GrayChart,
    text: "statistics",
  },
  {
    path: "/finance",
    activeFor: ["finance"],
    activeicon: BlueMoney,
    icon: GrayMoney,
    text: "finance",
  },
];

function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add("mobile-active");
    } else {
      document.body.classList.remove("mobile-active");
    }
  }, [isMobile]);
  const location = useLocation();
  const navigate = useNavigate();
  const handleCreateWebinar = () => {
    navigate("/create-webinar");
  };

  return (
    <SidebarDiv className={`${isMobile ? "sidebar-mini" : "sidebar-large"}`}>
      <Link to="/dashboard" className="logo flex items-center pl-3">
        <img src={isMobile ? LogoMiniImg : LogoImg} alt="PLAT" />
      </Link>
      <div className="side border-t ">
        <div className="btn-create-webinar lg:p-4 p-2  mt-3">
          <button
            type="button"
            onClick={handleCreateWebinar}
            className="bg-brand-primary text-white hover:bg-indigo-700  lg:p-2 p-0 h-10 rounded-lg w-full flex justify-center items-center gap-1"
          >
            <Add size={30} color="#FFFFFF" variant="Outline" />
            <span className="font-semibold btn-title">Create a webinar</span>
          </button>
        </div>
        <ul className="mt-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  item.activeFor.some((i) => location.pathname.includes(i))
                    ? "active text-brand-primary   border-r-4  border-brand-primary bg-bg-gray"
                    : "text-text-secondary"
                }
                 lg:p-4 p-2 lg:justify-start justify-center flex items-center gap-3 h-14`}
              >
                <span className="w-7">
                  <img
                    src={`${
                      item.activeFor.some((i) => location.pathname.includes(i))
                        ? item.activeicon
                        : item.icon
                    }`}
                    className="w-6"
                    alt="PLAT"
                  />
                </span>
                <span className={`${isMobile ? "hidden" : ""} font-normal`}>
                  {translate(`${item.text}`)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarDiv>
  );
}

export default Sidebar;
