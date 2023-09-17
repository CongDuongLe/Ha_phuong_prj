# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Buổi 3 : State (trạng thái của ứng dụng) + Props nâng cao + thực hành tạo các component dùng chung với việc ứng dụng State và Props
* State là gì?
- Nó là trạng thái của ứng dụng :
- Để quản lí State, ta dùng đến hook ( custom function của React) : useState()
- Vị trí import, khai báo ngay trên dòng | import React, {useState} from 'react' |
- Cú pháp và cách dùng : const [stateName, setStateName] = useState(initialState)
 * chú ý : initialState có thể nhận bất kì kiểu dữ liệu nào mà JS đang có, stateName là tên của trạng thái cần quản lí, setStateName là 1 hàm để
 cập nhật lại dữ liệu cho stateName mà ta đã khai báo ở trên.


write fnc merge sort in py with big array input

```python

def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2 # Finding the mid of the array : look like math.floor()
        L = arr[:mid] # Dividing the array elements from first element to mid
        R = arr[mid:]   # Dividing the array elements from mid to last
        merge_sort(L) # Sorting the first half
        merge_sort(R)   # Sorting the second half
        i = j = k = 0  
        # what is i, j, k ?
        # i is index of left subarray
        # j is index of right subarray
        # k is index of merged subarray
        
        while i < len(L) and j < len(R): # Copy data to temp arrays L[] and R[]
            if L[i] < R[j]:  # if L[i] < R[j] : arr[k] = L[i] and i += 1
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j] # else : arr[k] = R[j] and j += 1
                j += 1
            k += 1 # Increment k
        while i < len(L): # Checking if any element was left
            arr[k] = L[i] # Copy the remaining elements of L[], if there are any
            i += 1  
            k += 1
        while j < len(R): # Checking if any element was left
            arr[k] = R[j]
            j += 1  
            k += 1

arr = [12, 11, 13, 5, 6, 7]




write fnc quick sort in py with big array input

```python

    def quick_sort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            quick_sort(arr, low, pi - 1)
            quick_sort(arr, pi + 1, high)

    def partition(arr, low, high):
        i = (low - 1)  # index of smaller element
        pivot = arr[high]  # pivot

        for j in range(low, high):

            # If current element is smaller than or
            # equal to pivot
            if arr[j] <= pivot:
                # increment index of smaller element
                i = i + 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return (i + 1)

        




```






    






merge_sort(arr)
print(arr)

```

```python# Ha_phuong_prj
