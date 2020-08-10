require('express')()
.get("/", (req, res) => {
   return res.send("Hi from Nlw")
})
.get("/study", (req, res) => {
   return res.send("Page study")
})
.listen(5500)