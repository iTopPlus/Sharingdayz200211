# NodeJS

One process

One thread

One event loop

One JS Engine Instance / One Node.js Instance

# Worker threads have

One process

Multiple threads

One event loop per thread

One JS Engine Instance per thread / One Node.js Instance per thread

# Expected

Passing native handles around (e.g. sockets, http request)

Deadlock detection. Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by
some other process. Deadlock detention will be useful for Worker threads in this case.

More isolation, so if one process is affected, it won’t affect others.

# Not Expect

Don’t think Workers make everything magically faster, in some cases is better to use Worker pool

Don’t use Workers for parallelizing I/O operations.

Don’t think spawning Workers is cheap

# spawn background ps vs worker vs workerpool

????
