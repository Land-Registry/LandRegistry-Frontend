/**
 * @description extract the ipfs HASH from the name of an image i.e www.xyz.com/abc/ipfshash.jpg => ipfshash
 * @param notificationBody
 * @returns the ipfs hash extracted from the image name
 */
export declare function extractIPFSHashFromImageURL(imageURL: string | undefined): {
    type: string;
    url: string;
};
