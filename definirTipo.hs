type Nome = String
type Idade = Integer
type Linguagem = String -- atribuindo novo nome a um tipo já existente
type Pessoa = (Nome, Idade, Linguagem) --Definindo um tipo complexo

pessoa :: Pessoa
pessoa = ("Amanda", 27, "java")

triplaQualquer = ("Nome", 0, "Linguagem") -- Se passar uma 

getNome :: Pessoa -> Nome -- Definindo os tipos da assinatura da função (não é obrigatório)
getNome (nome,_,_) = nome

getIdade :: Pessoa -> Idade
getIdade (_,idade,_) = idade

getLinguagem :: Pessoa -> Linguagem -- Definindo os tipos da assinatura da função (não é obrigatório)
getLinguagem (_,_,linguagem) = linguagem