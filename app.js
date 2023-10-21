import express from "express";
const app = express();

app.use(express.json());
app.use(express.static("views"));
app.use("/three/",express.static("node_modules/three"))
app.use("/gsap/",express.static("node_modules/gsap"))
app.set("view engine" , "ejs");

app.get("/" , (req , res)=>{
   res.render("index");
});
app.get("/log" , (req , res)=>{
   res.render("log");
});
app.get("/preOrder" , (req , res)=>{
   res.render("pre_order");
});
app.get("/moreInfo" , (req , res)=>{
   res.render("more_info");
});

/*
app.get("/main" , (req , res)=>{
   res.render("./public/main_page");
});
*/

app.listen(4060 , ()=>{
   console.log("listening to http://localhost:4060");
})