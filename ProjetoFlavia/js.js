var descricaoFases = {"descricoes":[
	{"nome":"Fase 1 - INTENCIONAL","descricao":"Fase inicial de interação com o jogo e/ou atividade. Fase de ouvir e compreender os comandos para planejar a execução da tarefa."},
	{"nome":"Fase 2 - EXECUTIVA","descricao":"Fase de executar o planejamento para realizar a ação."},
	{"nome":"Fase 3 - AUTORREGULAÇÃO (AUTOAVALIAÇÃO)", "descricao":"Fase final de autoavaliar a execução, logrando ou não êxito. Nessa fase o aluno autorregula-se nas duas tentativas; A segunda tentativa ocorre caso o aluno não obtenha êxito."},
	{"fase4":""},
]
};
var perguntasFase1 = {"objetivas":[
	{"enunciado":"Identifica a natureza do problema?"},
	{"enunciado":"Para e retorna a uma nova informação quando ela não está clara?"},
	{"enunciado":"Antecipa as implicações do problema?"},
	{"enunciado":"Seleciona as estratégias pertinentes de execução?"},
	{"enunciado":"Planeja as estratégias selecionadas?"},
	{"enunciado":"Utiliza conhecimentos extraescolares no planejamento de suas ações?"},
	{"enunciado":"Demonstra autoconfiança para iniciar a tarefa?"},
], 
"discursivas":[
	{"enunciado":"O aluno ouve com atenção? Verbaliza alguma pergunta?"},
	{"enunciado":"O aluno procura por informação? Solicita ajuda? Faz perguntas?"},
	{"enunciado":"O aluno argumenta? Como se prepara para a resolução?"},
	{"enunciado":"O aluno estabelece objetivos? Argumenta verbalmente o que pretende fazer ou como fazer?"},
	{"enunciado":"O aluno estabelece objetivos? Demonstra capacidade de planejamento?"},
	{"enunciado":"O aluno demonstra capacidade de resgatar conhecimentos extraescolares para planejar suas ações?"},
	{"enunciado":"O aluno anima-se com a tarefa ou verbaliza que a mesma é fácil ou que já fez atividade parecida ou que sabe fazer?"},
]};

var perguntasFase2 = {"objetivas":[
	{"enunciado":"Ativa os conhecimentos espontâneos?"},
	{"enunciado":"Utiliza diversas estratégias para a realização da tarefa?"},
	{"enunciado":"Monitora para verificar se está realizando a tarefa de forma adequada?"},
	{"enunciado":"Revisa e ajusta (automonitoramento) o processo de resolução do problema?"},
	{"enunciado":"Localiza seus erros durante a realização da tarefa?"},
	{"enunciado":"Mediante uma dificuldade mobiliza-se tomando uma atitude autônoma para dar continuidade a solução do problema?"},
	{"enunciado":"Modifica suas estratégias quando não consegue atingir seus objetivos em relação à execução da tarefa?"},
	{"enunciado":"Consegue realizar uma atividade de forma autônoma?"}
], 
"discursivas":[
	{"enunciado":"O aluno verbaliza enquanto executa a tarefa? Pensa em seu planejamento?"},
	{"enunciado":"Quais estratégias são utilizadas pelo aluno?"},
	{"enunciado":"Como manifesta-se o monitoramento?"},
	{"enunciado":"O aluno revisa a tarefa? Compara o resultado com seu planejamento?"},
	{"enunciado":"Quais erros são detectados?"},
	{"enunciado":"Quais as modificações?"},
	{"enunciado":"Se o aluno não realiza a tarefa de forma autônoma, como se deu a mediação?"},
]};

var perguntasFase3 = {"objetivas":[
	{"enunciado":"Consegue controlar a atenção e resistir à distração?"},
	{"enunciado":"Sabe explicitar o que fez antes, durante e depois da tarefa?"},
	{"enunciado":"Explicita suas ações na tarefa de modo descritivo?"},
	{"enunciado":"Explicita suas ações na tarefa de modo avaliativo?"},
	{"enunciado":"Avalia o processo de resolução do problema?"},
	{"enunciado":"Identifica dificuldades e facilidades na realização das tarefas?"},
	{"enunciado":"Revê o seu plano (autorreflexão)?"},
	{"enunciado":"Utiliza os resultados adquiridos na autoavaliação da tarefa para ajustar ações às necessidades detectadas?"},
	{"enunciado":"Consegue fazer a transferência e aplicação da aprendizagem para outros contextos?"},
	{"enunciado":"É capaz de utilizar a mesma estratégia, com a qual obteve êxito, em diferentes contextos?"}
], 
"discursivas":[
	{"enunciado":"O aluno avalia a tarefa antes de concluir?"},
	{"enunciado":"Descreva suas explicitações."},
	{"enunciado":"Como o aluno descreve?"},
	{"enunciado":"Como o aluno avalia suas ações na tarefa?"},
	{"enunciado":"Compara o resultado com seu planejamento?"},
	{"enunciado":"Quais as dificuldades listadas pelo aluno? Quais as facilidades?"},
	{"enunciado":"De que forma o aluno revê o plano elaborado para a resolução da tarefa na fase intencional?"},
	{"enunciado":"Explicite"},
	{"enunciado":"Como ocorre essa transferência?"},
	{"enunciado":"Qual estratégia utiliza e em que contexto?"}
]};

var alternativasABC = { "alternativas":[ {"alternativa":"Não demonstra esse comportamento", "pontuacao": 0},
	{"alternativa":"Demonstra esse comportamento com mediação", "pontuacao": 1},
	{"alternativa":"Demonstra esse comportamento espontaneamente, sem mediação", "pontuacao": 2}]
};