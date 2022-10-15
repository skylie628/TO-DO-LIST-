import html from "./core.js";
import App from './components/App.js'
import { attach } from "./store.js";

attach(App,document.getElementById('root'))