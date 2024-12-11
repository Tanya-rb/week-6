const express = require('express');

const app = express();
app.use(express.json());
const user = [];
let option = [
    'a','b','c','d','e','f','g','h','i','j'
]

let token = "";
for (let i = 0; i < 32; i++ ){
    token += option [ Math.floor(Math.random() * option.length) ];
}
//return token;
app.post("/signup", function (req,res) {
    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username: username,
        password: password
    })    

    res.json({
        message: "You are signed up"
    })

    console.log(user)
    
})


app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
  let foundUser = null;
  for (let i=0; i<= username.length; i++){
    if (user[i].username == username && user[i].password == password){
         foundUser = user[i];
    }
    else {
        res.status.send(403)
            message: "Invalid username or password";
        
    }
    
  }
  if (foundUser) {
    const token = generateToken()

    res({
        message: token
    })       
  }
  console.log(user);

});
app.listen(3000);

