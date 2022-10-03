/* Amplify Params - DO NOT EDIT
	API_DYRAD_GRAPHQLAPIENDPOINTOUTPUT
	API_DYRAD_GRAPHQLAPIIDOUTPUT
	API_DYRAD_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const { orgId } = event.queryStringParameters;
  console.log("orgId", orgId);
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
