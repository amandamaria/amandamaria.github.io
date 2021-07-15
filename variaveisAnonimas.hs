myAnd :: Bool -> Bool -> Bool
myAnd False _ = False
myAnd _ False = False
myAnd True True = True


myOr :: Bool -> Bool -> Bool
myOr True _ = True
myOr _ True = True
myOr False False = False