// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function createNFT(address to, string memory tokenURI, string memory name, string memory description, string memory imageURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        // Store additional metadata
        _setMetadata(newTokenId, name, description, imageURI);

        return newTokenId;
    }

    function tokenMetadata(uint256 tokenId) public view returns (string memory name, string memory description, string memory imageURI) {
        return (_metadata[tokenId].name, _metadata[tokenId].description, _metadata[tokenId].imageURI);
    }

    struct NFTMetadata {
        string name;
        string description;
        string imageURI;
    }

    mapping(uint256 => NFTMetadata) private _metadata;

    function _setMetadata(uint256 tokenId, string memory name, string memory description, string memory imageURI) internal {
        NFTMetadata memory metadata = NFTMetadata(name, description, imageURI);
        _metadata[tokenId] = metadata;
    }

    function mint(address to, uint256 tokenId) external onlyOwner {
        _mint(to, tokenId);
    }
    
    function transferNFT(address from, address to, uint256 tokenId) external {
        require(ownerOf(tokenId) == from, "NFT not owned by from address");
        safeTransferFrom(from, to, tokenId);
    }
}
