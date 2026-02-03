## Mini API Test Checklist


### Endpoint Tested
- https://jsonplaceholder.typicode.com/comments
- https://jsonplaceholder.typicode.com/posts

### Positive Scenarios
- Status code should be 200 OK
- Response should be in JSON format
- Response should return an array
- Each object should contain:
    - postId
    - id
    - name
    - email
    - body
- Data types should be valid (number / string)

### Negative Scenarios
- Invalid endpoint should return 404
- Unsupported HTTP method should return appropriate error
- Empty response should be handled properly

### General QA Checks
- Response time should be reasonable
- API should be stable under multiple  requests

### Postman Tests (Basic Assertions)

- Basic assertions were added using the **Postman Tests tab**
- These checks validate:
    - Correct status code
    - Response format
    - Response body is not empty

Example assertions used:
- Status code is 200
- Response is JSON
- Response body is not empty

These basic validations help ensure API reliability beyond manual inspection.