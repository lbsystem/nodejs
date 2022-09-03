import time
list1=[2,6,2,1,8,15,2,3,9]



for i in range(0,len(list1)-1):
    print("---------------")
    for y in range(0,len(list1)-1-i):        
        if list1[y+1]>list1[y]:            
            print(list1)            
            tmp = list1[y]
            list1[y]=list1[y+1]
            list1[y+1]=tmp

print(list1)
