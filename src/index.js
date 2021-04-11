const { Usuario } = require('./models')

let usuario = new Usuario("meu@email.com", "01/01/1994", "meu-nome")
let outro = new Usuario("amigo@email.com", "02/01/1994", "meu-amigo")

usuario.curtirFilme("Harry Potter e a pedra filosofal")
usuario.seguirUsuario(outro)
