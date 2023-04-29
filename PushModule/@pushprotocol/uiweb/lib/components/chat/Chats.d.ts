import React from 'react';
import { IMessageIPFS } from '../../types';
declare type ChatsPropType = {
    msg: IMessageIPFS;
    caip10: string;
    messageBeingSent: boolean;
};
export declare const Chats: React.FC<ChatsPropType>;
export {};
