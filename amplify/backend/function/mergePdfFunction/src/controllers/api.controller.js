const {
  init,
  execute,
  executeContinuously,
} = require("../services/api.service");
const APIQueries = require("../graphql/queries");
const configureAmplify = () => {
  const url = process.env.API_DBUNK_GRAPHQLAPIENDPOINTOUTPUT;
  const apiKey = process.env.API_DBUNK_GRAPHQLAPIKEYOUTPUT;
  init(apiKey, url);
};

// const getRfp = async rfpId => {
//   try {
//     configureAmplify();
//     let result = await execute(
//       {
//         statement: APIQueries.getRfp,
//         name: 'getRfp'
//       },
//       { id: rfpId }
//     );

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   getRfp,

// };
