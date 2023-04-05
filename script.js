import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const h = React.createElement; 

const root = ReactDOM.createRoot(appDomElement);
const button = h("button", { "data-id": 123 }, "Me gusta");
const button2 = h("button", { "data-id": 456 }, "Me gusta");
const button3 = h("button", { "data-id": 789 }, "Me gusta");

const app = h(React.Fragment, null, [button, button2, button3]);

<React.Fragment>
    <button data-id="123">Me gusta</button>
    <button data-id="456">Me gusta</button>
    <button data-id="789">Me gusta</button>
</React.Fragment>

root.render(app);