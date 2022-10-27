// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pessoa from "App/Models/Pessoa";

export default class PessoasController {
  public async criarPessoa({request}){
    try {
      const { nome, cpf, endereco } = request.all()
      const novaPessoa = new Pessoa()
      novaPessoa.nome = nome,
      novaPessoa.cpf = cpf,
      novaPessoa.endereco = endereco,
      novaPessoa.save()
      return "pessoa criada com sucesso"
    } catch (error) {
      console.log(error);
    }
  }

  public async listarPessoas() {
    try {
      const pessoas = await Pessoa.all()
      return pessoas
    } catch (error) {
      console.log(error)
    }
  }

}
