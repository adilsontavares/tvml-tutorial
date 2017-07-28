# Depurando aplicativos em TVML

Você só precisa de uma coisa: **Safari**.  
A depuração do código é muito similiar a de aplicativos da Web.

1. Habilite o modo desenvolvedor no Safari.  
Vá em `Safari > Preferências > Avançado` e marque a opção "Mostrar menu Desenvolvedor na barra de menus".
![](screenshots/safari-enable-dev.png)

2. Execute o projeto no Xcode.  
O app precisa estar configurado corretamente.
Se o erro `TVMLKitErrorDomain error 3` aparecer, você não conseguirá depurar o app. 
Dúvidas sobre como configurar o app você encontra [aqui](INITIAL_SETUP.md).
![](screenshots/xcode-run.png)

3. Volte para o Safari e abra o menu `Desenvolvedor > Simulator > [bundle identifier]`.  
O *bundle identifier* pode ser encontrado nas configurações do projeto.
No meu caso, é `com.adilsontavares.HelloTVML`.

E aí está! Não se preocupe com o erro abaixo, está tudo normal. Ele apenas indica que não foi possível carregar o arquivo `default` (selecionado na barra lateral).
Para visualizar as mensagens, selecione a aba `Console`.
![](screenshots/safari-inspector.png) 

Para imprimir mensagens no console, acrescente o seguinte código na função `App.onLaunch`:  
``` javascript
App.onLaunch = function(options) {
  // ...
  console.log('Olá, TVML!');                      // mensagem
  console.warn('Tá dando uns bug mas tá indo.');  // aviso
  console.error('Deu bug fatal.');                // erro
}
```

Execute novamente o app e você verá as mensagens no Console.
Se alguma delas não estiver aparecendo, certifique-se de ter a opção "Todos" selecionada no menu superior.
![](screenshots/safari-console.png)

*Nota: Toda vez que você executar o projeto, a janela de depuração fechará. 
Para fazer com que esta abra automaticamente, marque a opção `Mostrar Inspetor Web para JSContexts automaticamente` no menu `Desenvolvedor > Simulator`.*
