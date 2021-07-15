{-
Atividade 1 - Implemente uma função recursiva que, 
dados dois números inteiros x e n, calcula o valor de xn
-}
multiplicacao :: Int -> Int -> Int
multiplicacao _ 0 = 0
multiplicacao 0 _ = 0
multiplicacao x n =  multiplicacao x (n-1) + x
{-Obs: a ordem em que a chamada recursiva é feita afeta o comportamento da função
causando stack overflow se for escrito, por exemplo, como 'x+ multiplicacao x (n-1)'
-}

{-
Atividade 2 - Implemente uma função recursiva que, 
dados dois números inteiros x e n, calcula o valor de x^n 
-}
potencia :: Int -> Int -> Int
potencia _ 0 = 1
potencia x n = potencia x (n-1) * x

{-
Atividade 3 - Implemente uma função recursiva que calcule a soma dos
elementos de uma lista 
-}
somaLista :: [Int] -> Int
somaLista [] = 0
somaLista [x] = x
somaLista (h:t) = somaLista (t) + h

{-
Atividade 4 - Implemente uma função recursiva que inverta uma lista 
-}
inverteLista :: [Int] -> [Int]
inverteLista [] = []
inverteLista (h:t) = inverteLista t ++[h]

{-
Atividade 5 - Implemente uma função recursiva que conte quantas vezes 
um caractere aparece em uma string
-}
contaChar :: [Char] -> Char -> Int
contaChar [] _ = 0
contaChar (h:t) x | (h == x) = contaChar t x + 1 | otherwise = contaChar t x