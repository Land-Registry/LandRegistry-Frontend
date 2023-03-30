import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const FeatureBlocks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-20 gap-16 px-12 py-24 mx-auto text-center flex flex-col max-w-7xl">
        {/* Header */}
        <div className="gap-4 flex flex-col">
          <h2
            data-aos="zoom-y-out"
            className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
          >
            FEATURES OF LAND REGISTRY{" "}
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">
              USING BLOCKCHAIN
            </span>
          </h2>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            The features of land registry using blockchain include immutability, transparency, efficiency, accessibility, and security.
          </p>
        </div>
        {/* Blocks */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {/* Block 1 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <ShuffleIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              TRANSPARENCY
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Transparency which provides a tamper-proof and immutable record of all land-related information. 
            </p>
          </div>
          {/* Block 2 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <SignalIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            ACCESSIBILITY
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Land registry data can be stored on a decentralized ledger that is accessible to anyone with an internet connection.
            </p>
          </div>
          {/* Block 3 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <TalkingIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              SECURITY
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Blockchain can provide enhanced security through the use of smart contracts, which automates reduce the risk of fraud or errors.
            </p>
          </div>
          {/* Block 4 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <DoorIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              IMMUTABILITY
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Ensures once a land-related data is recorded on the blockchain, it cannot be altered or deleted without the consensus of the network participants.
            </p>
          </div>
          {/* Block 5 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <CardsIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              EFFICIENCY
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
            Automate the land registration process, reducing the time and costs associated with traditional paper-based systems.
            </p>
          </div>
          {/* Block 6 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <MagicIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              INTEGRITY
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Ensures the accuracy and consistency of land-related data recorded on the blockchain. Through the use of cryptographic algorithms and consensus mechanisms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
