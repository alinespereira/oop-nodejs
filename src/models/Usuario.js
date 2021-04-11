class Usuario {
  // Atributos
  /*
   * O construtor é um método especial que serve para criar uma nova instância da classe usuário,
   * ou seja, um novo objeto Usuario, da seguinte maneira:
   * 
   * let usuario = new Usuario("meu@email.com", "01/01/1994", "meu-nome")
   */
  constructor(email, dataDeNascimento, nomeDeUsuario) {
    this.email = email
    this.dataDeNascimento = dataDeNascimento
    this.nomeDeUsuario = nomeDeUsuario
  }

  // Métodos
  /*
   * Uma instância de usuário pode invocar métodos, que nada mais são que funções pertencentes ao objeto
   */

  /*
   * Depois de ter um usuário criado, este usuário pode curtir um filme:
   *
   * usuario.curtirFile("Harry Potter e a pedra filosofal")
   */
  curtirFilme(nomeDoFilme) {
    console.log(`"${this.nomeDeUsuario}" curtiu "${nomeDoFilme}"`)
  }

  /*
   * ou seguir outro usuário:
   *  
   * let outro = new Usuario("amigo@email.com", "02/01/1994", "meu-amigo")
   * usuario.seguirUsuario(outro)
   */
  seguirUsuario(outroUsuario) {
    console.log(`"${this.nomeDeUsuario}" agora segue "${outroUsuario.nomeDeUsuario}"`)
  }
}

module.exports = Usuario
