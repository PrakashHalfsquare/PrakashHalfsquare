import ConfirmEmail from '../pages/Auth/Confirm';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import CreateWebinar from '../pages/CreateWebinar';
import EditWebinar from '../pages/EditWebinar';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Finance from '../pages/Finance';
import IntroScreen from '../pages/IntroScreen';
import Members from '../pages/Members';
import Participants from '../pages/Participants';
import PaymentInvoices from '../pages/PaymentInvoices';
import Profile from '../pages/Profile';
import Statistics from '../pages/Statistics';
import Webinars from '../pages/Webinars';
import WebinarDetails from '../pages/Webinars/WebinarDetails';
import VerifyEmail from '../pages/Auth/VerifyEmail';
import SomethingWentsWrong from '../pages/Auth/SomethingWentsWrong';
import WebinarLink from '../pages/WebinarSuccess';
import Webinar from '../pages/Announcement/webinar';
import Participent from '../pages/Announcement/participent';

const routes = [
  {
    title: 'Login',
    path: '/',
    Component: Login,
    exact: true,
    isProtected: false,
  },
  {
    title: 'Signup',
    path: '/signup',
    Component: Signup,
    exact: true,
    isProtected: false,
  },
  {
    title: 'Confirm Email',
    path: '/confirm-email',
    Component: ConfirmEmail,
    exact: true,
    isProtected: false,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    Component: Dashboard,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Intro Screen',
    path: '/intro-screen',
    Component: IntroScreen,
    exact: true,
    isProtected: false,
  },
  {
    title: 'Webinars',
    path: '/webinars',
    Component: Webinars,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Statistics',
    path: '/statistics',
    Component: Statistics,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Members',
    path: '/members',
    Component: Members,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Finance',
    path: '/finance',
    Component: Finance,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Payment Invoices',
    path: '/payment-invoices',
    Component: PaymentInvoices,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Customers',
    path: '/customers',
    Component: Customers,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Participants',
    path: '/participants',
    Component: Participants,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Create Webinar',
    path: '/create-webinar',
    Component: CreateWebinar,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Create Webinar',
    path: '/edit-webinar/:webid',
    Component: EditWebinar,
    exact: true,
    isProtected: true,
  },
  {
    title: 'Profile',
    path: '/profile',
    Component: Profile,
    exact: true,
    isProtected: true,
  },
  {
    title: 'WebinarDetails',
    path: '/webinar-details/:webid',
    Component: WebinarDetails,
    exact: true,
    isProtected: true,
  },
  {
    title: 'announcementWebinar',
    path: '/announcement/:webid',
    Component: Webinar,
    exact: true,
    isProtected: false,
  },
  {
    title: 'announcementParticipents',
    path: '/announcement/:webid/:pid',
    Component: Participent,
    exact: true,
    isProtected: false,
  },

  {
    title: 'VerifyEmail',
    path: '/verify-email/:token',
    Component: VerifyEmail,
    exact: true,
    isProtected: false,
  },
  {
    title: 'SomethingWentsWrong',
    path: '/Something-wents-wrong',
    Component: SomethingWentsWrong,
    exact: true,
    isProtected: false,
  },
  {
    title: 'WebinarSuccess',
    path: '/webinar-link',
    Component: WebinarLink,
    exact: true,
    isProtected: true,
  },
];
export default routes;
