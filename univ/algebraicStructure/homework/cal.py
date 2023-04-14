from typing import List
from itertools import permutations


def cal(a: List, b: List):
    ans = []
    for i in range(1, 5):
        ret = a[b[i - 1] - 1]
        ans.append(ret)
    return ans


tar = list(range(1, 5))
tar = list(permutations(tar))
tar = list(list(x) for x in tar)

x_list = [[2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3], [1, 2, 3, 4]]
y = [1, 2, 4, 3]
for x in x_list:
    print(cal(x, y))