


const express=require('express');


const mongoose =require("mongoose");
const dotenv =require('dotenv');
const cors=require('cors')
dotenv.config()
const paymentRouter=require("./routes/payment.route.js")
const categorieRouter =require("./routes/categorie.routes")
const scategorieRouter =require("./routes/scategorie.routes")
const articleRouter =require("./routes/article.routes")
const userRouter =require("./routes/user.routes")
const app = express();

//BodyParser Middleware
app.use(express.json()); 
app.use(cors());
app.use(express.static(__dirname + '/'));
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.get("/",(req,res)=>{
res.send("bonjour");
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);
app.use('/api/payment', paymentRouter);
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); })


