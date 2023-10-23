import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./parentСomponents/HomeComponent"
import GoogleMaps from "./parentСomponents/MapsComponent";
import ChatPage from "./parentСomponents/ChatComponent";

const routes = [{
        paht: "/", 
        name: "Home", 
        component: HomeComponent
    }, 
    {
        paht:"/Maps", 
        name:"Maps", 
        component: GoogleMaps
    }, 
    {
        paht: "/chatPage",
        name: "Chat", 
        component: ChatPage
    }
]


const router = createRouter({
    history:createWebHistory(), 
    routes,
})

export default router