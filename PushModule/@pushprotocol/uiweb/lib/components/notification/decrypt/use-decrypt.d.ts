export declare type DecryptNotifAttibutesType = {
    notifTitle: string;
    notifBody: string;
    notifCta: string;
    notifImage: string;
    isSecretRevealed: boolean;
};
declare function useDecrypt(initialValues: {
    notificationTitle?: string;
    parsedBody?: string;
    cta?: string;
    image?: string;
}, isSecret?: boolean): {
    notifTitle: string;
    notifBody: string;
    notifCta: string;
    notifImage: string;
    isSecretRevealed: boolean;
    setDecryptedValues: ({ title, body, cta, image }: {
        title?: string | undefined;
        body: string;
        cta?: string | undefined;
        image?: string | undefined;
    }) => void;
};
export default useDecrypt;
