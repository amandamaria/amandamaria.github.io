--listas devem ter um mesmo tipo de dado
lista :: [Char] --Declaração da lista
lista = ['a','m','a','n','d','a']

listaVazia = []

--outra forma de construir listas
lista2 = 1:2:3:[] --primeiro elemento é o head e o ultimo sempre vai ser uma lista vazia

myHead (h:t) = h --pega o primeiro elemento da lista (equivalente head)

myTail (h:t) = t --pega os elementos da lista exceto o primeiro (equivalente tail)

--conta os elementos de uma lista (equivalente length)
myLength [] = 0
myLength (h:t) = 1 + myLength(t)

--Prática: implmentar uma função que verifica se duas listas são iguais
listasIguais :: [Int] -> [Int] -> Bool

listasIguais [] [] = True
listasIguais [] _ = False
listasIguais _ [] = False
listasIguais (h1:t1) (h2:t2) | (h1==h2) = listasIguais t1 t2 | otherwise = False

--Prática: implementar uma função que imprime o inverso de uma lista com função auxiliar
listaInversa :: [Int] -> [Int]
listaInversa [] = []
listaInversa listaOriginal = auxiliarInversa listaOriginal []

auxiliarInversa :: [Int] -> [Int] -> [Int]
auxiliarInversa [] aux = aux
auxiliarInversa (h:ta) aux = auxiliarInversa ta aux++[h]

--Prática: implementar uma função que imprime o inverso de uma lista sem função auxiliar
listaInvertida :: [Int] -> [Int]
listaInvertida [] = []
listaInvertida (h:t) = listaInvertida t ++ [h] --operador ++ concatena duas listas (por isso p h aparece entre [])
