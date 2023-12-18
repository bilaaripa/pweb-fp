import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AddChannelView from "../views/AddChannelView.vue";
import JoinChannelView from "../views/JoinChannelView.vue";
import UpdateChannelView from "../views/UpdateChannelView.vue";
import PersonalChatView from "../views/PersonalChatView.vue";
import GroupChatView from "../views/GroupChatView.vue";
import StartPersonalChatView from "../views/StartPersonalChatView.vue";
import UpdateContactView from "../views/UpdateContactView.vue";
import AddContactView from "../views/AddContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/addchannel",
      name: "addchannel",
      component: AddChannelView,
    },
    {
      path: "/channel",
      name: "channel",
      component: JoinChannelView,
    },
    {
      path: "/update/:groupId",
      name: "update",
      component: UpdateChannelView,
    },
    {
      path: "/personalchat",
      name: "personalchat",
      component: PersonalChatView,
    },
    {
      path: "/groupchat",
      name: "groupchat",
      component: GroupChatView,
    },
    {
      path: "/personalchatroom",
      name: "personalchatroom",
      component: StartPersonalChatView,
    },
    {
      path: "/updatecontact/:contactId",
      name: "updatecontact",
      component: UpdateContactView,
    },
    {
      path: "/addcontact",
      name: "addcontact",
      component: AddContactView,
    },
  ],
});

export default router;
