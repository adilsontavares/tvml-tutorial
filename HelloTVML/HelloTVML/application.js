var baseURL;

App.onLaunch = function(options) {
    baseURL = options.BASEURL;

    var title = `Hello, world!`;
    var description = `Hello, I am a description.`;

    // Cria 10 botões
    var buttons = '';
    for (var i = 0; i < 10; ++i) {
        buttons += `
            <button>
                <text>Botão ${i}</text>
            </button>
        `;
    }

    // Imprime uma mensagem no console
    console.log('Mensagem!');

    // Imprime um aviso no console
    console.warn('Warning');

    // Imprime uma mensagem de erro no console. Além disso,
    // apresenta as chamadas de função 
    console.error('Error');

    // Template "alertTemplate" personalizado com fundo e variáveis no XML.
    var template = `
        <document>
            <alertTemplate>
                <background>
                    <img src="${baseURL}/img/background.jpg" />
                </background>
                <title>${title}</title>
                <description>${description}</description>
                <button onselect="navigate()">
                    <text>Navegar</text>
                </button>
                ${buttons}
            </alertTemplate>
        </document>
    `;

    // Interpreta o texto do template e gera um documento
    var doc = parseDocument(template);

    // Coloca o documento no topo da pilha e faz transição
    navigationDocument.pushDocument(doc);
}

function parseDocument(template) {

    // Cria um interpretador de documento. O DOMParser interpreta
    // o texto do "template" e gera o documento.
    var parser = new DOMParser();

    // Gera o documento a partir do texto. Informa que o conteúdo 
    // do texto está em XML.
    var doc = parser.parseFromString(template, 'application/xml');

    return doc;
}

function navigate() {

    // Template "ratingTemplate"
    var template = `
    <document>
        <ratingTemplate>
            <title>WWDC Roadtrip</title>
            <ratingBadge value="0.8"></ratingBadge>
        </ratingTemplate>
    </document>
    `;

    var doc = parseDocument(template);
    navigationDocument.presentModal(doc);

    // Você pode utilizar:
    // presentModal    - Apresenta um modal. Possui um fundo diferente, dando ênfase ao conteúdo apresentado.
    // pushDocument    - Coloca o novo documento na pilha. Se pressionar o botão "Menu", volta para a tela anterior.
    // replaceDocument - Substitui o documento atual. Impede que o botão "Menu" volte para a tela anterior.
}