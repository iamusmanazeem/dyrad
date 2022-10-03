export type AmplifyDependentResourcesAttributes = {
    "function": {
        "mergePdfFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "mergePdfApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "dyrad": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}