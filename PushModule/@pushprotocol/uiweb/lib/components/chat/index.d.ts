import React from 'react';
import './index.css';
export declare type ChatProps = {
    account: string;
    supportAddress: string;
    modalTitle?: string;
    primaryColor?: string;
    apiKey?: string;
    env?: string;
};
export declare type ButtonStyleProps = {
    bgColor: string;
};
export declare const Chat: React.FC<ChatProps>;
