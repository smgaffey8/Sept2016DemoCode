# Authentication
> We use authentication to protect areas of websites from unauthorized access.

Essentially, a good first-party authentication strategy will use some form of encryption and hashing technique in order to protect users of a service.

First-Party Auth : YOUR SRVER. You are handling the auth.

### Hashing
- Hashing protects plain-text values
- Hashing is a ONE WAY THING.
- Mathematically, the algorithm that hashes a plain text value is impossible to reverse.



### Encoding / Decoding
- `%20` => Space (example of an encoded value)
- Encoding is the idea of representing information in a TWO WAY relationship.
- In the web world, the most common reasons why we do this is because we often have to work with restrictions, like for instance restricted characters in a URL.

- Example : `?q=This%20awesome%20sentence`
