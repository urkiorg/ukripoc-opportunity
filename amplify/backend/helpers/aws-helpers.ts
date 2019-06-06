import AWS from "aws-sdk";
export const getSNSARNName = (
    partition: string,
    service: string,
    region: string = AWS.config.region as string,
    accountId: string,
    topicName: string
): string => `arn:${partition}:${service}:${region}:${accountId}:${topicName}`;

export const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

export const getTopicName = (topic: string, env: string): string =>
    `${topic}-${env}`;

export const postSNSMessage = async (
    topicName: string,
    accountId: string,
    message: any
): Promise<any> => {
    const sns = new AWS.SNS();

    sns.publish(
        {
            TopicArn: getSNSARNName(
                "aws",
                "sns",
                undefined,
                accountId,
                topicName
            ),
            Message: JSON.stringify(message)
        },
        function(err, data) {
            if (err) {
                console.error(err.stack);
                return Promise.reject("Could not push to SNS");
            }
            console.log("push sent");
            console.log(data);

            return Promise.resolve(data);
        }
    );
};
