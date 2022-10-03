const saveMessage = /* GraphQL */ `
  mutation SaveMessage(
    $inboundMessage: InboundMessage
    $outboundMessage: OutboundMessage
  ) {
    saveMessage(
      inboundMessage: $inboundMessage
      outboundMessage: $outboundMessage
    )
  }
`;
const sendEmail = /* GraphQL */ `
  mutation SendEmail(
    $sender: String!
    $receiver: String!
    $subject: String!
    $body: String
    $attachments: String
    $messageId: ID!
    $cc: [String]
  ) {
    sendEmail(
      sender: $sender
      receiver: $receiver
      subject: $subject
      body: $body
      attachments: $attachments
      messageId: $messageId
      cc: $cc
    )
  }
`;

module.exports = {
  saveMessage,
  sendEmail
};
