import TrainingInstituteDashboard from "../Pages/Institute-Training/Components/TrainingInstituteDashboard";
import OurProfile from "../Pages/Institute-Training/Components/OurProfile";
// import SeminorPost from "../Pages/Institute-Training/Components/SeminarPost";
// import SeminorRequest from "../Pages/Institute-Training/Components/SeminarRequest";
import CourseInformation from "../Pages/Institute-Training/Components/CourseInformation";
import ChangeProfile from "../Pages/Institute-Training/ChangeProfile/index";
import Advertisment from "../Pages/Institute-Training/advertisment/Advertisment";
import SeminarRequest from "../Pages/Institute-Training/Components/SeminarRequest";
import SeminarPost from "../Pages/Institute-Training/Components/SeminarPost";
import SemiInnerPage from "../Pages/Institute-Training/Components/SeminarInnerPage";

const Routers = [
  {
    path: "training-institute",
    name: "Dashboard",
    element: <TrainingInstituteDashboard />,
  },
  {
    path: "training-institute/ourprofile",
    name: "Our Profile",
    element: <OurProfile />,
  },
  // {
  //   path: "training-institute/seminar-request",
  //   name: "Seminar Request",
  //   element: <SeminarRequest />,
  // },
  {
    path: "training-institute/SeminarPost",
    name: "SeminarPost",
    element: <SeminarPost />,
  },
  {
    path: "training-institute/SeminarRequest",
    name: "SeminarRequest",
    element: <SeminarRequest />,
  },
  {
    path: "training-institute/SeminarRequest/viewinnerpage",
    name: "viewinnerpage",
    element: <SemiInnerPage />,
  },
  {
    path: "training-institute/courseinformation",
    name: "courseinformation",
    element: <CourseInformation />,
  },
  {
    path: "training-institute/changeProfile",
    name: "changeprofile",
    element: <ChangeProfile />,
  },
  {
    path: "training-institute/advertisment",
    name: "advertisment",
    element: <Advertisment />,
  },
  // {
  //   path: "/Employerlist",
  //   name: "Employer",
  //   element: Employerlist,
  // },

  // {
  //   path: "/Bloglist",
  //   name: "Bloglist",
  //   element: Bloglist,
  // },
  // {
  //   path: "/Advertisementlist",
  //   name: "Advertisementlist",
  //   element: Advertisementlist,
  // },
  // {
  //   path: "/Jobpostlist",
  //   name: "Jobpostlist",
  //   element: Jobpostlist,
  // },
];
export default Routers;
