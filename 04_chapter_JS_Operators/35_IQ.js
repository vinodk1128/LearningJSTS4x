let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";

// Here 404 is less than 500 and greater than 400 so Client Error is executed

console.log(`Status ${statusCode}: ${category}`); // Status 404: Client Error
