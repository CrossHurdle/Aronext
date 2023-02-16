import BgvHome from "../Pages/Bgv/BgvHome/BgvHome";
import BgvSubscription from "../Pages/Bgv/BgvSubscription";
import EmployEnquiry from "../Pages/Bgv/EmpolyerEnquiry/EmployEnquiry";
import EmployerDetails from "../Pages/Bgv/EmpolyerEnquiry/EmployerDetails";
import VerifyTabs from "../Pages/Bgv/EmpolyerEnquiry/VerifyEnquiry/VerifyTabs";
// import BgvHome from "../Pages/Bgv/BgvHome/BgvHome";
import BgvTabsProfile from "../Pages/Bgv/OurProfile/TabsProfile";

const BgvRoutes = [
    {
        path: "/BgvHome",
        name: "BgvHome",
        element: <BgvHome />
    },
    {
        path: "/BgvHome/BgvSubscription",
        name: "BgvSubscription",
        element: <BgvSubscription />
    },
    {
        path: "/BgvHome/OurProfile",
        name: "profileform",
        element: <BgvTabsProfile />,
    },
    {
        path: "/BgvHome/Enquiry",
        name: "Enquiry",
        element: < EmployEnquiry />,
    },
    {
        path: "/BgvHome/detail/:id",
        name: "EnquiryDetails",
        element: < EmployerDetails />,
    },
    {
        path: "/BgvHome/Verify/:id",
        name: "Verify",
        element: < VerifyTabs />,
    },
]

export default BgvRoutes