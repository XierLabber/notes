def ip_to_int(ip: str):
    tmp = [int(x) for x in ip.split('.')]
    print(tmp)
    sum = 0
    for i in range(len(tmp)):
        print((16 ** i) * tmp[-(i + 1)])
        sum += (16 ** i) * tmp[-(i + 1)]
    return sum

def int_to_ip(sum: int):
    my_list = []
    for i in range(4):
        my_list.append(sum % 16)
        sum = sum // 16
    my_list = my_list[::-1]
    ret = '.'.join([str(x) for x in my_list])
    return ret

print(ip_to_int("10.0.1.0"))