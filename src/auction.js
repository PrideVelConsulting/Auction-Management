import web3 from './web3' ;

const address = "0x74D553C50238bF5078302bC230A5E3e8D4542Cc1" ;
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bid",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			}
		],
		"name": "closeBid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_minBid",
				"type": "uint256"
			}
		],
		"name": "createAuction",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bid",
				"type": "uint256"
			}
		],
		"name": "pay",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bidID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			}
		],
		"name": "setWinner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctionDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_item",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "_auctionManager",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_minBid",
				"type": "uint256"
			},
			{
				"internalType": "enum auctionContract.State",
				"name": "_auctionState",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "auctionManager",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "auctionState",
		"outputs": [
			{
				"internalType": "enum auctionContract.State",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bidDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_bidID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_bidderAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_bid",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bids",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalAuctions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalBids",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_bidID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_auctionID",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_bidderAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_bid",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];;

new web3.eth.Contract(abi, address);

export default new web3.eth.Contract(abi, address);






