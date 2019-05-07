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
