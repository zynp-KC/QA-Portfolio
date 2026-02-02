## Day 02 – Status Codes & Negative GET Tests


### Negative GET – Non-exisiting ID
- Request: GET /posts/9999
- Expected: 404 Not Found
- Result: 404 returned


### Negative GET – Wrong endpoint
- Request: GET /postss
- Expected: 404 Not Found
- Result: 404 returned


### Negative GET – Invalid ID format
- Request: GET /posts/abc
- Expected: 404 Not Found
- Result: 404 returned