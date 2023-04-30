/**
 * @description parse and extract the timestamp from the body of the notification and remove the text from the body
 * @param notificationBody the text which would represent the body of the notification
 * @returns
 */
export declare function extractTimeStamp(notificationBody: string): {
    notificationBody: string;
    timeStamp: string;
    originalBody: string;
};
export declare function convertTimeStamp(timeStamp: string): string;
