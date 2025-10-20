exports.handler = async (event, context) => {
    // Handle CORS for all requests
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Handle GET request
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers: {
                ...headers,
                'Content-Type': 'text/plain'
            },
            body: 'Hello, World!'
        };
    }

    // Handle other methods
    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
};
