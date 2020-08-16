const proffys = [
   { 
      name: "Diego Fernandes", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "89987654534",
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
      subject: "Química", 
      cost: "20", 
      weekday: [0], 
      time_from: [720], 
      time_to: [1220] 
   },
   { 
      name: "Mayk Brito", 
      avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
      whatsapp: "89987654534",
      bio: 'Instrutor de Educação Física para inicantes, minha missão de vida é levar saúde e contribuir para o crescimente de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "aprenda a fazer dinheiro com isso"', 
      subject: "Educação Física", 
      cost: "40", 
      weekday: [0], 
      time_from: [720], 
      time_to: [1220] 
   },
   { 
      name: "Tiago Luchtenberg", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "89987654534",
      bio: "As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.<br><br>Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.", 
      subject: "Geografia", 
      cost: "360", 
      weekday: [0], 
      time_from: [720], 
      time_to: [1220] 
   }
]

const subjects = [
   "Artes",
   "Biologia",
   "Ciências",
   "Educação física",
   "Física",
   "Geografia",
   "História",
   "Matemática",
   "Português",
   "Química",
]

const weekdays = [
   "Domingo",
   "Segunda-feira",
   "Terça-feira",
   "Quarta-feira",
   "Quinta-feira",
   "Sexta-feira",
   "Sábado",
]  

function getSubject(subjectNumber) {
   const arrayPosition = +subjectNumber - 1
   return subjects[arrayPosition]
}

function pageLanding(req, res) {
   return res.render("index.html")
}

function pageStudy(req, res) {
   const filters = req.query
   return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
   const data = req.query

   const isNotEmpty = Object.keys(data).length > 0
   if (isNotEmpty) {

      data.subject = getSubject(data.subject)

      proffys.push(data)

      return res.redirect("/study")
   }

   return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
   express: server,
   noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)