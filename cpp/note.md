### Shared Pointer

When you declare a pointer and after using it, if you do not delete it explicitly then it will be there in the memory and will cause Memory leak. Shared pointer does that work on its own. So you have to worry about where and when to delete. The moment the scope ends, the shared pointer gets deleted.

```c++
void foo(){
  shared_ptr<Dog> p(new Dog("Tommy")); // sharedPointer count = 1 
  {
    // situation where the pointer is shared
    shared_ptr<Dog> q = p; // sharedPointer count = 2
  } // sharedPointer count = 1 because q goes out of scope

} // sharedPointer count = 0
```

[**Tutorial**](https://www.youtube.com/watch?v=qUDAkDvoLas)

### Template

 Idea is to pass data type as a parameter so that we don’t need to write same code for different data types. For example a software company may need sort() for different data types like sorting of integer or sorting of floats etc. Similary, you may have requirement of doing summation of floats and integers. Then you have normally 2 ways to do that:

1. Delcare two methods like `sumInts(int a, intb)` and `sumFloats(float a, float b)`
2. Overlaod one method with different types like `sum(int a, int b)` and sun(float  a, float b)

But in either of these cases, you have to write more code. Template helps you do do this task with just 1 method. - one generic method.

```c++

template <typename T> T sum(T a, T b)
{
	return a + b;
}


void foo()
{
	cout << sum<int>(3,2);
	cout << sum<float>(12.2, 12.3);
	return0;	
}
```

### Vectors

Are dynamic arrays with the aiblity to resize itself when an element is inserted and deleted, with their storage being handaled automatically by the container.


```c++
vector<int> myvector;
myvector.emplace_back(1234);
myvector.emplace_back(12345);

for (std::vector<int>::iterator it = myvector.begin(); it != myvector.end(); ++it)
  std::cout << ' ' << *it;
```

`vector::emplace_back()` is used to insert a new element into vector. 

We can also use `vector::push_back()` for inserting but the difference between them is with `push_back()`, we can create an object and then insert into the vector. whereas with `emplace_back()` the object is constructed in-place.

```c++
struct aggregate {
    int foo;
    int bar;
};

std::vector<aggregate> v;

v.emplace_back({ 42, 121 }); //  you can not do 
v.push_back({ 42, 121 }); // can do
```

[**StackOverFlow**](https://stackoverflow.com/questions/10890653/why-would-i-ever-use-push-back-instead-of-emplace-back/28435599)







