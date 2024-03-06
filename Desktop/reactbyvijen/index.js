// const heading =document.createElement("h1");
// heading.innerHTML="javaScript";

// const root= document.getElementById("root");
// root.appendChild(heading);

// const heading1=document.createElement("h1");
// heading1.innerHTML="Prime Minister";

// const para1= document.createElement("p");
// para1.innerHTML="Narendraa Modi";

// const headd=document.getElementById("head-para");
// headd.append(heading1,para1);
const heading= React.createElement("h1",{},"Crime rate");
const head = React.createElement("div",{},heading);
const para1=React.createElement("p",{},"20000")
const head1= React.createElement("div",{},para1);
const root1= ReactDOM.createRoot(document.getElementById("root"));



root1.render([head,head1]);

