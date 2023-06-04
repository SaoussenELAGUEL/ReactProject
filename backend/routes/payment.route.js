const express=require('express');
const router = express.Router();
const  stripe=require('stripe');
const Stripe = 
stripe('sk_test_51MeHHNEZbjuND66wHigMkke1QbBG8k9ZtlSgV4wggEHNnITG65covBxIYaabPjgaDnGft8OhTr0H9WejoK4BOkKq00hNaciP28');
router.post('/', async (req, res) => { console.log(req.body)
let status, error;
const { token, amount } = req.body;
try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'usd',
});
status = 'success';
} catch (error) {
console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;
