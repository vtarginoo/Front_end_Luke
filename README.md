# API LUKE

O Projeto da Luke é o início de um Workflow NoCode. Inicialmente o MVP feito neste projeto é referente à um processo muito comum em empresas que majoritariamente é realizado via Excel, o Processo de Reembolso.

Neste projeto a pessoa pode inputar informações referentes ao seu reembolso Data que foi feito o pagamento, Descrição do Reembolso, Categoria da despesa e também o Valor que foi gasto.

A ideia é que a partir do preenchimento desse formulário esse processo vire um WorkFlow que consiga ir direto para aprovação de o usuário que é entendido gestor da pessoa que é cliente do processo e também para o financeiro, tendo a aprovação de ambas as partes a pessoa recebe uma confirmação. Ou caso não tenha, a pessoa recebe um formulário acusando os reembolsos que não foram aceito e tendo a oportunidade de contestação.

Como foi dito anteriormente, a ideia é ter um ótimo WorkFlow tendo um processo como base. e que futuramente as pessoas possam construir seu próprio processo, tendo em vista que não todo processo de reembolso funciona de maneira igual em empresas.

O objetivo desse MVP é trazer a primeira funcionalidade da Luke preenchimento de reembolso padronizado sem que haja necessidade de envio de Planilhas de Excel. Então um processo que se torna pesado para o financeiro passa a se tornar mais leve. Usando um front-end para Luke e requisições HTTP via as APIs.

---

### Como Executar: 

Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

## Como Usar a Interface da Luke Repay -

Para inserir um reembolso você necessita fazer a inserção de 4 Informações: Data, Descrição, Categoria e Valor (R$).

Primeiro, comece inserindo a data. Assim que for clicado o campo de data, irá aparecer um calendário onde você deve achar a data desejada e clicar.

Segundo você deve inserir a Descrição do Reembolso. Exemplo, Caso você queira pedir reembolso de ônibus, você deve inserir a palavra ônibus, lembre-se de somar todos os valores de ônibus no mês, visto que o reembolso não é um campo que se repete.

Terceiro, Você deve escolher a categoria do seu reembolso, se seguirmos o exemplo que você inseriu na descrição "Ônibus", você deverá botar como categoria: "Transporte".

Por último você deve inserir o valor que você teve com a despesa, a fim de ser ressarcido.
O Campo de valor deve ser inserido com ponto(.) ao invés de vírgula. Além disso, deve ser um valor númerico, caso, não tenham essas suas condições o código não vai permitir a sua inserção.

Além disso, para excluir o reembolso você apenas necessita clicar no X que fica ao lado do valor. Assim o seu reembolso será excluido. Essa opção é importante caso você tenha algum erro de digitação ou algo do tipo.
