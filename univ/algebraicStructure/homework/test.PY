import itertools

sons = {
    'g' : set(['g', 'e', 'f', 'd', 'a', 'b', 'c']),
    'e' : set(['e', 'd', 'b', 'a']),
    'f' : set(['f', 'd', 'c', 'a']),
    'd' : set(['d', 'a']),
    'b' : set(['b', 'a']),
    'a' : set(['a']),
    'c' : set(['c', 'a'])
}

fa = {
    'g' : set(['g']),
    'e' : set(['e', 'g']),
    'f' : set(['f', 'g']),
    'd' : set(['d', 'e', 'f', 'g']),
    'b' : set(['b', 'e', 'g']),
    'c' : set(['c', 'f', 'g']),
    'a' : set(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
}

def check(x: tuple):
    cur = set(x)
    result = itertools.combinations(list(x), 2)
    for y in result:
        if len(sons[y[0]] & sons[y[1]] & cur) == 0 or len(fa[y[0]] & fa[y[1]] & cur) == 0:
            return False
    return True

m = 5

result = list(itertools.combinations(list(sons.keys()), m))

for x in result:
    if check(x):
        print(set(x))