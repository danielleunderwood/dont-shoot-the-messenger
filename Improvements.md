# Improvements

## Overall
I would generally opt to use a library for a message broker instead of creating my own.

## Persistence
### Choice of SQLite
SQLite doesn't scale well; for better scalability, I'd choose a different database or key-value store.
### At-most-once delivery 
The simplest way to implement at-most-once delivery is probably to acquire an exclusive lock on the database, query the top message, delete that message, and return the message. 

## Testing
### Unit tests
The server app is simple enough that I opted to created a single integration test for quick, thorough testing; in a more complicated app the individual parts should be tested.
### Build checks
In a real setting, there should be build checks to make sure the tests were all passing (preferably before the pull request is merged).
### Tests for consumer and producer apps
There's no testing on the producer and consumer apps because they're so simple; in a real system, they should definitely have tests.
### Errors
There should be tests for whether errors are being thrown (and presented) correctly.

## Docker
### Data persistence 
Changes to the SQLite database are not saved when rerunning the container; this could easily be changed by setting up a volume in Docker.
### Over-copying
Too many files are being copied to Docker (the entirety of the producer, consumer, and, server folders are copied); this is inefficient. 
### Not running install in production mode
devDependencies are on the container; this is inefficient.
