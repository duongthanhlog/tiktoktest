import config from "~/config"
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
import Live from "~/pages/Live"
import { DefaultLayout, HeaderOnly } from "~/layouts"
import ProfileLayout from "~/layouts/ProfileLayout"
import Video from "~/pages/Video"
import FollowingLayout from "~/layouts/FollowingLayout"


export const publicRoutes = [
    { path: config.routes.home, component: Home, layout : DefaultLayout },
    { path: config.routes.following, component: Following, layout : FollowingLayout},
    { path: config.routes.profile, component: Profile, layout : ProfileLayout},
    { path: config.routes.upload, component: Upload, layout : HeaderOnly},
    { path: config.routes.search, component: Search, layout : null},
    { path: config.routes.live, component: Live, layout: ProfileLayout},
    { path: config.routes.video, component: Video, layout : null},
]


export const privateRoutes = []