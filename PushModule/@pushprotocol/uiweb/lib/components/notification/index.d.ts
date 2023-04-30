import * as React from "react";
export declare type chainNameType = "ETH_TEST_GOERLI" | "POLYGON_TEST_MUMBAI" | "ETH_MAINNET" | "POLYGON_MAINNET" | "THE_GRAPH" | undefined;
export declare type NotificationItemProps = {
    notificationTitle: string | undefined;
    notificationBody: string | undefined;
    cta: string | undefined;
    app: string | undefined;
    icon: string | undefined;
    image: string | undefined;
    url: string | undefined;
    isSpam?: boolean;
    subscribeFn?: () => Promise<unknown>;
    isSubscribedFn?: () => Promise<unknown>;
    theme: string | undefined;
    chainName: chainNameType;
    isSecret?: boolean;
    decryptFn?: () => Promise<{
        title: string;
        body: string;
        cta: string;
        image: string;
    }>;
};
export declare const NotificationItem: React.FC<NotificationItemProps>;
