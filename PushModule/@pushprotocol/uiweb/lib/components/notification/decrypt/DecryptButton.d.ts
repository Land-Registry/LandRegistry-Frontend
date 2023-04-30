import * as React from "react";
export declare type DecryptButtonProps = {
    decryptFn: () => Promise<unknown>;
    isSecretRevealed: boolean;
};
declare const DecryptButton: React.FC<DecryptButtonProps>;
export default DecryptButton;
