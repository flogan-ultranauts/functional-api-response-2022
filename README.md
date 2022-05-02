# API Response test

- This test executes basic API calls through public API with mock data. 
- The test attempts to do the following:

- Return value based on input condition: it is relatively easy to test, as input can be defined and results can be authenticated. Does not return anything: When there is no return value, a behavior of API on the system is checked
- Trigger some other API/event/interrupt: If an output of an API triggers some event or interrupt, then those events and interrupt listeners are tracked
- Update data structure: Updating data structure will have some outcome or effect on the system, and that should be authenticated
- Modify certain resources: If API call modifies some resources then it should be validated by accessing respective resources

- Return stringify data and make data readable using: https://codebeautify.org/jsonviewer Test inputs in Postman or Insomnia i.e., https://jsonplaceholder.typicode.com/users/1

- Used dummy/fake API test data: https://jsonplaceholder.typicode.com/