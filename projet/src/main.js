// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";


// createApp(App).use(router).mount("#app");
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).use(bootstrap).mount("#app");
