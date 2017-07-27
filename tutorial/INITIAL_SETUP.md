## Configuração inicial
Para desenvolver aplicativos em TVML, é preciso iniciar um servidor local que servirá como provedor de conteúdo. É ele que irá disponibilizar os códigos em JavaScript, imagens e outros recursos que serão consumidos pela Apple TV.

### Criando o projeto
1. Crie um novo projeto com o template `TVML Application`, presente na aba `tvOS`.
![](tutorial/screenshots/tvml-template.png)

2. Dê um nome ao seu projeto e clique em continuar (neste caso, estaremos utilizando `HelloTVML`).
![](tutorial/screenshots/create-project.png)

Ok, vamos executar e... OPS! Obtemos o seguinte erro:
![](tutorial/screenshots/launching-error.png)

Isso aconteceu pois a Apple TV não conseguiu obter o código JavaScript principal, por padrão chamado de `application.js`. Ele está aí no seu projeto, escondido na pasta Supporting Files.

![](tutorial/screenshots/applicationjs-location.png)

Se você der uma espiada na classe `AppDelegate`, verá que haverão duas variáveis que apontam para o endereço que a Apple TV está tentando acessar:
``` swift
static let tvBaseURL = "http://localhost:9001/"
static let tvBootURL = "\(AppDelegate.tvBaseURL)/application.js"
```

### Iniciando o servidor local
Para iniciar um servidor local nesta porta, 9001, é bastante simples:
1. Abra o Terminal.
2. Navegue até a pasta que está o arquivo `application.js` por meio do comando `cd`.  
Exemplo:  `cd /Users/usuario/Desktop/HelloTVML/HelloTVML`.  Não esqueça de substituir o diretório pelo caminho aonde está o arquivo na sua máquina.
3. Execute o comando `ruby -run -ehttpd . -p9001`.  
Isso fará com que o ruby inicie um servidor local HTTP, dentro da pasta atual, na porta 9001.

Para testar se o servidor está funcionando corretamente, abra seu navegador e coloque a seguinte URL: `http://localhost:9001/application.js`.

Se tudo deu certo, a página lhe entregará o conteúdo do arquivo `application.js`. 

#### Possíveis erros no servidor
1. Caso receba uma página com o erro `Not Found`, você possivelmente iniciou o servidor em outra pasta.
2. Se a página não abrir e o navegador apresentar um erro (servidor não encontrado ou conexão recusada), você provavelmente está com o servidor desligado ou executando em uma porta diferente.

### Permitindo acesso ao servidor
Se você tentar executar o app verá que o erro ainda persiste. Isto ocorre porque, por padrão, o tvOS não deixa acessar servidores que não sejam `HTTPS`. Isto é, que não trabalham com comunicação segura. 

Para permitir que o app tenha acesso ao servidor local, vá até o projeto do Xcode e abra o arquivo `Info.plist`.
Dentro dele, adicione as seguintes propriedades:  

![](tutorial/screenshots/setup-info-plist.png)

### Pronto!
Voilà! Agora você está com tudo preparado para desenvolver.

![](tutorial/screenshots/welcome.png)
