const mongoose = require("mongoose")

mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1/aprendendo", { useNewUrlParser: true })
  .then(() => { console.log("MongoDB conectado!") })
  .catch(error => { console.log("Houve um erro: " + error) })

// Model de Usuários

const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  },
})

// Collection

mongoose.model('usuarios', UsuarioSchema)

const Helio = mongoose.model('usuarios')

new Helio({
  nome: "Hélio",
  sobrenome: "Lúcio",
  email: "exemplo@oi.com",
  idade: 19,
  pais: "Bostil"
}).save()
  .then(() => {console.log("Usuário criado com sucesso!")})
  .catch((err) => {console.log("Houve um erro: "+err)})
