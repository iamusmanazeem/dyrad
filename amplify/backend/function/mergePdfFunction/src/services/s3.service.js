const aws = require('aws-sdk');
const s3 = new aws.S3();

const UploadDocument = async (file, directory, bucketName) => {
  try {
    const s3Data = await s3
      .upload({
        Bucket: bucketName,
        Key: `${directory}/${Date.now()}${file.filename}`,
        Body: file.content
      })
      .promise();
    console.log('s3Data', s3Data);
    return s3Data;
  } catch (err) {
    console.log('error while getting object in s3', err);
    return err;
  }
};
const getFileFromS3 = async (key, bucketName) => {
  try {
    const s3Data = await s3
      .getObject({
        Bucket: bucketName,
        Key: `${key}`
      })
      .promise();

    const str = s3Data.Body;
    return str;
  } catch (err) {
    console.log('error while getting object in s3', err);
  }
};

module.exports = { getFileFromS3, UploadDocument };
