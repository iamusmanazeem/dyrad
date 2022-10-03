const Amplify = require('@aws-amplify/api');
const init = (apiKey, url) => {
  const myAppConfig = {
    aws_appsync_graphqlEndpoint: url,
    aws_appsync_region: process.env.REGION,
    aws_appsync_apiKey: apiKey
  };
  Amplify.API.configure(myAppConfig);
};

const execute = async ({ statement, name }, variables) => {
  const operation = Amplify.graphqlOperation(statement, variables);
  const { data } = await Amplify.API.graphql({
    ...operation,
    authMode: 'API_KEY'
  });
  return data[name];
};

const executeContinuously = async (
  { statement, name },
  variables,
  token = null
) => {
  try {
    const limit = 200;
    const params = { ...variables, limit, nextToken: token };
    const operation = Amplify.graphqlOperation(statement, params);
    const { data } = await Amplify.API.graphql({
      ...operation,
      authMode: 'API_KEY'
    });
    const { items, nextToken } = data[name];
    if (nextToken) {
      const nextItems = await executeContinuously(
        { statement, name },
        variables,
        nextToken
      );
      return items.concat(nextItems);
    }
    return items;
  } catch (err) {
    console.log('error in continuous execution', JSON.stringify(err));
    throw err;
  }
};

const executeByParts = async (query, objList) => {
  try {
    const limit = 25;
    let cur = 0;
    let result = [];
    while (cur < objList.length) {
      const promises = objList
        .slice(cur, cur + limit)
        .map(input => execute(query, { input }));
      // eslint-disable-next-line no-await-in-loop
      const chunk = await Promise.all(promises);
      result = result.concat(chunk);
      cur += limit;
    }
    return result;
  } catch (err) {
    console.log('error in continuous execution', JSON.stringify(err));
    throw err;
  }
};

module.exports = { execute, init, executeContinuously, executeByParts };
