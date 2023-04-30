import { Web3Provider } from '@ethersproject/providers';
import { AccountEnvOptionsType } from '../types';
import { IConnectedUser, IMessageIPFS } from '@pushprotocol/restapi';
declare type HandleOnChatIconClickProps = {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
};
declare type GetChatsType = {
    pgpPrivateKey: string;
    supportAddress: string;
} & AccountEnvOptionsType;
export declare const handleOnChatIconClick: ({ isModalOpen, setIsModalOpen, }: HandleOnChatIconClickProps) => void;
export declare const walletToPCAIP10: (account: string) => string;
export declare const pCAIP10ToWallet: (wallet: string) => string;
export declare const resolveEns: (address: string, provider: Web3Provider) => void;
export declare const createUserIfNecessary: (options: AccountEnvOptionsType) => Promise<IConnectedUser>;
export declare const getChats: (options: GetChatsType) => Promise<IMessageIPFS[]>;
export {};
