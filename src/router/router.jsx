import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Root from "../pages/Root";
import AccessData from "../pages/AccessData";
import UserData from "../pages/UserData";
import UploadDocuments from "../pages/UploadDocuments";
import Login from "../pages/Login";
import OTP from "../pages/OTP";
import WalletHome from "../pages/WalletHome";
import WalletSend from "../pages/WalletSend";
import WalletReceive from "../pages/WalletReceive";
import WalletMovement from "../pages/WalletMovement";
import MarketHome from "../pages/MarketHome"
import MarketBuy from "../pages/MarketBuy";
import MarketSell from "../pages/MarketSell";
import ProfileHome from "../pages/ProfileHome";
import EditUserData from "../pages/EditUserData";
import EditPassword from "../pages/EditPassword";
import ProfileSupport from "../pages/ProfileSupport";
import ProfileFAQ from "../pages/ProfileFAQ";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome/>
    },

    {
        path: '/register',
        element: <Root/>,
        children: [
            {
                path: '/register/access-data',
                element: <AccessData/>
            },
            {
                path:'/register/user-data',
                element: <UserData/>
            },
            {
                path:'/register/upload-documents',
                element: <UploadDocuments/>
            },
            
        ]
    },

    {
        path: '/login',
        element: <Root/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/login/otp',
                element: <OTP/>
            },

        ]
    },

    {
        path: '/wallet',
        element: <Root/>,
        children: [
            {
                path: '/wallet',
                element: <WalletHome/>
            },
            {
                path: '/wallet/send',
                element:<WalletSend/>
            },
            {
                path: '/wallet/receive',
                element: <WalletReceive/>
            },
            {
                path: '/wallet/movement',
                element: <WalletMovement/>
            }
        ]
    },

    {
        path: '/market',
        element: <Root/>,
        children: [
            {
                path: '/market',
                element: <MarketHome/>
            },
            {
                path: '/market/buy',
                element: <MarketBuy/>
            },
            {
                path: '/market/sell',
                element: <MarketSell/>
            },
        ]
    },

    {
        path: '/profile',
        element: <Root/>,
        children: [
            {
                path: '/profile',
                element: <ProfileHome/>
            },
            {
                path: '/profile/edit-user-data',
                element: <EditUserData/>
            },
            {
                path: '/profile/edit-password',
                element: <EditPassword/>
            },
            {
                path: '/profile/support',
                element: <ProfileSupport/>
            },
            {
                path: '/profile/FAQ',
                element: <ProfileFAQ/>
            },
        ]

    }

]);

export default router;