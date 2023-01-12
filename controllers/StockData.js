const axios = require('axios')

const MARCKET_STACK_API = process.env.MARCKET_STACK_API
const ACCESS_KEY = process.env.ACCESS_KEY

console.log(MARCKET_STACK_API)
exports.getAllStock = async(req,res)=>{
    try{
        const response = await axios.get(`${MARCKET_STACK_API}/v1/tickers?access_key=${ACCESS_KEY}`)  

        return res.status(200).json(response.data)
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.getStockDataInThePeriod= async(req,res)=>{
    try{
        const {date_from,date_to,symbols} = req.query
        const response = await axios.get(`${MARCKET_STACK_API}/v1/eod?access_key=${ACCESS_KEY}`,{params:{
            date_from:date_from,
            date_to:date_to,
            symbols:symbols
        }})  
        return res.status(200).json(response.data)
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.getIntraDayStockData= async(req,res)=>{
    try{
        const {symbols} = req.query
        const response = await axios.get(`${MARCKET_STACK_API}/v1/intraday?access_key=${ACCESS_KEY}`,{params:{
            symbols:symbols
        }})  

        return res.status(200).json(response.data)
    }catch(err){
        return res.status(500).json(err)
    }
}
