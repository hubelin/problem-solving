What is the difference between an abstract data type and an implementation of a data structure?

- ADT represents the API a data structure needs to support while data structure is the actual implementation

Consider two implementations of the queue abstract data type, one implemented using a dynamic array and the other as a doubly linked list. What is the Big O complexity of the push and pop operations? Other than Big O complexity, can you think of any potential performance differences between the two?

- Dynamic array

  1. pop - O(n) - remove from head involves shifting everything in memory over
  2. push - O(1)

- Doubly Linked List

  1. pop/push - O(1) - DLL has fast insertion/deletion at head/tail

What are the trade-offs being made between chaining and linear probing? Which of these do you think is more commonly used?
Considering a hash map that uses chaining, when should the underlying array grow? What about for one that uses linear probing?

- Linear probing

  - handles collision through open addressing (finding next open slot or address in the hash table)

  - disadvantage - tendency for clustering where if many collisions happen in the same area, the number of slots arround will be filled by linear probing

  - one way to get around that is skipping slots when open addressing

- Chaining

  - allow each slot to hold a reference to a chain/collection of items

  - if more items hashes to the same location, difficulty of searching for item in collection increases
