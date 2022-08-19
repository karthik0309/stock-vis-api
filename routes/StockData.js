const router = require('express').Router()
const {getAllStock,getStockDataInThePeriod,getIntraDayStockData} = require('../controllers/StockData')

router.get("/",getAllStock)
router.get("/stock",getStockDataInThePeriod)
router.get("/stock/intra-day",getIntraDayStockData)


module.exports = router