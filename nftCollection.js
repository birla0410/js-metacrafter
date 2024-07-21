let myNFTs = [];

function mintNFT(name, description, rarity) {
    let newNFT = {
        name: name,
        description: description,
        rarity: rarity
    };
    myNFTs.push(newNFT);
}

function listNFTs() {
    myNFTs.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
    });
}

function getTotalSupply() {
    return myNFTs.length;
}

// Minting new NFTs
mintNFT("Dragon", "Legendary Fire-breathing Dragon", "Legendary");
mintNFT("Phoenix", "Mythical Bird of Fire", "Epic");

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
console.log("Total NFTs Minted: " + getTotalSupply());