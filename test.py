import time
now=time.time()

for i in range(100000000):
    res=i*10
    res=res%10
    res=res+i

print(res)
print(time.time()-now)