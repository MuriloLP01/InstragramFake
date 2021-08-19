console.log('arquivo validacao.js')

let form = document.querySelector('.form-auth')
let inputUsuario = document.querySelector('input[name="usuario"]')
let inputNascimento = inputUsuario.cloneNode(true)
inputNascimento.type = 'text'
inputNascimento.name = 'nascimento'
inputNascimento.placeholder = 'Digite sua data de nascimento (dd/mm/aaaa)'
form.insertBefore(inputNascimento, inputUsuario)
inputNascimento.style.width = '100%'
inputNascimento.style.boxSizing = 'border-box'

let body = document.querySelector('main')
body.style.height = '100%'

//evento disparado quando janela termina de carregar
window.addEventListener('load', evento_load => {
  let btnSubmit = document.querySelector('.form-auth button')
  //elemento.addEventListener(nome_evento, funcao_disparada)
  btnSubmit.addEventListener('click', evento_submit => {
    evento_submit.preventDefault()
    let dados = document.querySelectorAll('.form-auth input')
    let listaErros = document.querySelector('.erros ul')
    //zera o conteúdo da lista no html
    listaErros.innerHTML = ''
    let erros = []
    //!inputNome é igual a inputNome == ''
    for (const dado of dados) {
      if (dado.value == '') {
        erros.push(`Campo ${dado.name} está vazio!`)
      } else if (dado.name == 'nome') {
        if (dado.value.length < 2 || dado.value.length > 80) {
          erros.push(`Campo ${dado.name} precisa ter de 2 a 80 caracteres!`)
        }
      } else if (dado.name == 'sobrenome') {
        if (dado.value.length < 2 || dado.value.length > 100) {
          erros.push(`Campo ${dado.name} precisa ter de 2 a 100 caracteres!`)
        }
      } else if (dado.name == 'nascimento') {
        let hoje = new Date()
        let nascimento = new Date(dado.value)
        let idade = hoje.getFullYear() - nascimento.getFullYear()
        let mes = hoje.getMonth() - nascimento.getMonth()
        if (mes < 0 || (mes == 0 && hoje.getDate() < nascimento.getDate())) {
          --idade
        }
        if (idade < 16 || idade > 120) {
          erros.push('Você precisa ter de 16 a 120 anos!')
        }
      } else if (dado.name == 'email') {
        if (
          dado.value.length < 2 ||
          dado.value.length > 100 ||
          !dado.value.includes('@') ||
          !dado.value.includes('.')
        ) {
          erros.push(`Digite um e-mail válido!`)
        }
      } else if (dado.name == 'senha') {
        if (dado.value.length < 8 || dado.value.length > 100) {
          erros.push(`Campo ${dado.name} precisa ter de 8 a 100 caracteres!`)
        }
      } else if (dado.name == 'usuario') {
        if (dado.value.length < 10 || dado.value.length > 15) {
          erros.push(`Campo ${dado.name} precisa ter de 10 a 15 caracteres!`)
        }
      }
    }

    for (const erro of erros) {
      listaErros.innerHTML += `<li> ${erro} </li>`
    }
  })
})
