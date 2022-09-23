### How it works

  - Send a GET request to `https://tql-pipeline.herokuapp.com/howold` with a `dob` query string.

    - Example: [https://tql-pipeline.herokuapp.com/howold?dob=-166026660029](https://tql-pipeline.herokuapp.com/howold?dob=-166026660029)

  - The request will be processed by a NodeJS server using Express and TypeScript

  - The request is passed through a validator which ensures that:

 1.  `dob` is supplied
 2.  `dob` is between **-2208989615000** (the timestamp for 1st January, 1900 GMT+1) and the current UNIX timestamp
 3.  passing `dob` to JavaScript's `Date` yields a valid date object

  - If at least one of these validation requirements fail, an array of errors is returned to the user and the request is terminated

  - If validation is passed successfully, the validated dated object is passed to `getYearDifference` where the year of the supplied timestamp is subtracted from the year of the current timestamp to yield the person's age

    - Here is a sample response payload:

  ```json
  {
    "status": "success",
    "message": "Process completed",
    "dob": "-166026660029",
    "birth_date": "Sun Sep 27 1964",
    "age": 58
  }
  ```

  - The package, `express-rate-limit` is used to limit requests to a maximum of 3 per second
