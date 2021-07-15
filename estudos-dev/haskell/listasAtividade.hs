--Atividade 1.1: Implementar função que verifica se um elemento pertence a uma lista
pertence :: [Int] -> Int -> Bool
pertence [] _ = False
pertence (h:t) x | (x==h) = True | otherwise = pertence t x

--Atividade 1.2: Implementar função que verifica se um elemento pertence a uma lista usando apenas guarda
pertence2 :: [Int] -> Int -> Bool
pertence2 lista x | (lista == []) = False | (x == head lista) = True | otherwise = pertence2 (tail lista) x

--Atividade 2: Implementar função que identifica o maior elemento de uma lista
maior :: [Int] -> Int
maior [x] = x
maior (h:t) | (h > maior(t)) = h | otherwise = maior(t)

--Atividade 2: Implementar função que pega o menor elemento de uma lista
menor :: [Int] -> Int
menor [x] = x
menor (h:t) | (h < menor(t)) = h | otherwise = menor(t)

--Atividade 3: Implementar função que verifica se os elementos de uma lista são todos pares
apenasPares :: [Int] -> Bool
apenasPares [x] | (mod x 2 == 0) = True | otherwise = False
apenasPares (h:t) | (mod h 2 == 0) = apenasPares t | otherwise = False
