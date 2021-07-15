somaTupla :: (Int, Int) -> (Int, Int) -> (Int, Int) --assintura da função (não é obrigatório)
somaTupla (x1,y1) (x2,y2) = (x1+x2,y1+y2)


nomes :: (String, String, String) --assintura da "variável" como função (não é obrigatório)
nomes = ("Teste 1", "Teste 2", "Teste 3")

valores = ("String", 10, True) --uma tupla pode ter valores de tipos diferentes

primeiro (x, _, _) = x
segundo (_, y, _) = y
terceiro (_, _, z) = z
