# Async JavaScript Fundamentals

## Async Code

# 01. JavaScript 

* JS is Synchronous
* JS is Single Threaded

# 02. JS Execution Context(EC)

## NOTE - EC execute one line of code at a time.

## Eaxample - 

# A. CallStack

* console.log(1)
* console.log(2)

## NOTE - EACH OPERATION WAITS FOR THE LAST ONE TO COMPLETE BEFORE EXECUTING

# B. Memory Heap

>Further

# 001. Blocking Code

* Block the flow of Program

### NOTE - Read File Sync

# 002. Non Blocking Code

* Does not block the flow of Program

### NOTE - Read File Async

# QUEUE -

            NOTE - LAST IN LAST OUT

# STACK - 

            NOTE - LAST IN FIRST OUT

# fetch()

## NOTE - 
            1. fetch() is relatively new

            2. It is also works on task queue, but here the task queue got expanded, another task queue has also attached in this which has a higher priority.