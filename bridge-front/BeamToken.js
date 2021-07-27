const BeamTokenContract = {
    "contractName": "BeamToken",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "initialSupply",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.7.2+commit.51b20bc0\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"initialSupply\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/projects/ethereum/eth_pipe/contracts/BeamToken.sol\":\"BeamToken\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":2000},\"remappings\":[]},\"sources\":{\"/C/projects/ethereum/eth_pipe/contracts/BeamToken.sol\":{\"keccak256\":\"0x9aaa68bea306cec61f74840ee23a799150d63c311d121790a89a80e163a687a6\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://658e4ac011ffefeaf05cc4318b9f7a0ec6971f70a3ab16203dcbbc3819032002\",\"dweb:/ipfs/QmV3ouHvYuYkTgn33m85htsq7LZbQrbykPsBBoj6HggNyz\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xca0c2396dbeb3503b51abf4248ebf77a1461edad513c01529df51850a012bee3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://991b44ff44e0496e8554a90f4c0512c28faed45104d40430019f3c67ea67740e\",\"dweb:/ipfs/Qmc3nRapVbcctELoZS5qe17zLkFB3bETBfwzCTMF1CSuGE\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5f02220344881ce43204ae4a6281145a67bc52c2bb1290a791857df3d19d78f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://24427744bd3e6cb73c17010119af12a318289c0253a4d9acb8576c9fb3797b08\",\"dweb:/ipfs/QmTLDqpKRBuxGxRAmjgXt9AkXyACW3MtKzi7PYjm5iMfGC\"]},\"openzeppelin-solidity/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b5060405162000d7638038062000d76833981810160405260208110156200003757600080fd5b5051604080518082018252600981527f4265616d546f6b656e000000000000000000000000000000000000000000000060208281019182528351808501909452600484527f4245414d00000000000000000000000000000000000000000000000000000000908401528151919291620000b391600391620002b8565b508051620000c9906004906020840190620002b8565b50506005805460ff1916601217905550620000e56008620000f8565b620000f133826200010e565b5062000354565b6005805460ff191660ff92909216919091179055565b6001600160a01b0382166200018457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001926000838362000237565b620001ae816002546200023c60201b620005931790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001e1918390620005936200023c821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082820183811015620002b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002fb57805160ff19168380011785556200032b565b828001600101855582156200032b579182015b828111156200032b5782518255916020019190600101906200030e565b50620003399291506200033d565b5090565b5b808211156200033957600081556001016200033e565b610a1280620003646000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038c565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610392565b6101e3610419565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610422565b6101936004803603602081101561023b57600080fd5b50356001600160a01b0316610470565b6100d661048b565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104ec565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610554565b610193600480360360408110156102c157600080fd5b506001600160a01b0381358116916020013516610568565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105f4565b84846105f8565b50600192915050565b60025490565b600061039f8484846106e4565b61040f846103ab6105f4565b61040a85604051806060016040528060288152602001610947602891396001600160a01b038a166000908152600160205260408120906103e96105f4565b6001600160a01b03168152602081019190915260400160002054919061083f565b6105f8565b5060019392505050565b60055460ff1690565b600061038361042f6105f4565b8461040a85600160006104406105f4565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610593565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836104f96105f4565b8461040a856040518060600160405280602581526020016109b860259139600160006105236105f4565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061083f565b60006103836105616105f4565b84846106e4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000828201838110156105ed576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b03831661063d5760405162461bcd60e51b81526004018080602001828103825260248152602001806109946024913960400191505060405180910390fd5b6001600160a01b0382166106825760405162461bcd60e51b81526004018080602001828103825260228152602001806108ff6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107295760405162461bcd60e51b815260040180806020018281038252602581526020018061096f6025913960400191505060405180910390fd5b6001600160a01b03821661076e5760405162461bcd60e51b81526004018080602001828103825260238152602001806108dc6023913960400191505060405180910390fd5b6107798383836108d6565b6107b681604051806060016040528060268152602001610921602691396001600160a01b038616600090815260208190526040902054919061083f565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546107e59082610593565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108ce5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561089357818101518382015260200161087b565b50505050905090810190601f1680156108c05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122037a760f6e0791666fac0e72440071ed19bef92c450415bc600dddd1cd2c621e164736f6c63430007020033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038c565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610392565b6101e3610419565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610422565b6101936004803603602081101561023b57600080fd5b50356001600160a01b0316610470565b6100d661048b565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104ec565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610554565b610193600480360360408110156102c157600080fd5b506001600160a01b0381358116916020013516610568565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105f4565b84846105f8565b50600192915050565b60025490565b600061039f8484846106e4565b61040f846103ab6105f4565b61040a85604051806060016040528060288152602001610947602891396001600160a01b038a166000908152600160205260408120906103e96105f4565b6001600160a01b03168152602081019190915260400160002054919061083f565b6105f8565b5060019392505050565b60055460ff1690565b600061038361042f6105f4565b8461040a85600160006104406105f4565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610593565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836104f96105f4565b8461040a856040518060600160405280602581526020016109b860259139600160006105236105f4565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061083f565b60006103836105616105f4565b84846106e4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000828201838110156105ed576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b03831661063d5760405162461bcd60e51b81526004018080602001828103825260248152602001806109946024913960400191505060405180910390fd5b6001600160a01b0382166106825760405162461bcd60e51b81526004018080602001828103825260228152602001806108ff6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107295760405162461bcd60e51b815260040180806020018281038252602581526020018061096f6025913960400191505060405180910390fd5b6001600160a01b03821661076e5760405162461bcd60e51b81526004018080602001828103825260238152602001806108dc6023913960400191505060405180910390fd5b6107798383836108d6565b6107b681604051806060016040528060268152602001610921602691396001600160a01b038616600090815260208190526040902054919061083f565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546107e59082610593565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108ce5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561089357818101518382015260200161087b565b50505050905090810190601f1680156108c05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122037a760f6e0791666fac0e72440071ed19bef92c450415bc600dddd1cd2c621e164736f6c63430007020033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [],
    "sourceMap": "129:174:4:-:0;;;163:138;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;163:138:4;1958:145:13;;;;;;;;;;;;163:138:4;1958:145:13;;;;;;;;;;;;;;;;;;;;;;2032:13;;1958:145;;;2032:13;;:5;;:13;:::i;:::-;-1:-1:-1;2055:17:13;;;;:7;;:17;;;;;:::i;:::-;-1:-1:-1;;2082:9:13;:14;;-1:-1:-1;;2082:14:13;2094:2;2082:14;;;-1:-1:-1;235:17:4::1;250:1;235:14;:17::i;:::-;262:32;268:10;280:13:::0;262:5:::1;:32::i;:::-;163:138:::0;129:174;;10018:96:13;10086:9;:21;;-1:-1:-1;;10086:21:13;;;;;;;;;;;;10018:96::o;7832:370::-;-1:-1:-1;;;;;7915:21:13;;7907:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7983:49;8012:1;8016:7;8025:6;7983:20;:49::i;:::-;8058:24;8075:6;8058:12;;:16;;;;;;:24;;;;:::i;:::-;8043:12;:39;-1:-1:-1;;;;;8113:18:13;;:9;:18;;;;;;;;;;;;:30;;8136:6;;8113:22;;;;;:30;;:::i;:::-;-1:-1:-1;;;;;8092:18:13;;:9;:18;;;;;;;;;;;:51;;;;8158:37;;;;;;;8092:18;;:9;;8158:37;;;;;;;;;;7832:370;;:::o;10701:92::-;;;;:::o;2690:175:12:-;2748:7;2779:5;;;2802:6;;;;2794:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2857:1;2690:175;-1:-1:-1;;;2690:175:12:o;129:174:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;129:174:4;;;-1:-1:-1;129:174:4;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;",
    "deployedSourceMap": "129:174:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2168:89:13;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4244:166;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4244:166:13;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;3235:106;;;:::i;:::-;;;;;;;;;;;;;;;;4877:317;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4877:317:13;;;;;;;;;;;;;;;;;:::i;3086:89::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5589:215;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;5589:215:13;;;;;;;;:::i;3399:125::-;;;;;;;;;;;;;;;;-1:-1:-1;3399:125:13;-1:-1:-1;;;;;3399:125:13;;:::i;2370:93::-;;;:::i;6291:266::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;6291:266:13;;;;;;;;:::i;3727:172::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3727:172:13;;;;;;;;:::i;3957:149::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3957:149:13;;;;;;;;;;:::i;2168:89::-;2245:5;2238:12;;;;;;;;-1:-1:-1;;2238:12:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2213:13;;2238:12;;2245:5;;2238:12;;2245:5;2238:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2168:89;:::o;4244:166::-;4327:4;4343:39;4352:12;:10;:12::i;:::-;4366:7;4375:6;4343:8;:39::i;:::-;-1:-1:-1;4399:4:13;4244:166;;;;:::o;3235:106::-;3322:12;;3235:106;:::o;4877:317::-;4983:4;4999:36;5009:6;5017:9;5028:6;4999:9;:36::i;:::-;5045:121;5054:6;5062:12;:10;:12::i;:::-;5076:89;5114:6;5076:89;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5076:19:13;;;;;;:11;:19;;;;;;5096:12;:10;:12::i;:::-;-1:-1:-1;;;;;5076:33:13;;;;;;;;;;;;-1:-1:-1;5076:33:13;;;:89;:37;:89::i;:::-;5045:8;:121::i;:::-;-1:-1:-1;5183:4:13;4877:317;;;;;:::o;3086:89::-;3159:9;;;;3086:89;:::o;5589:215::-;5677:4;5693:83;5702:12;:10;:12::i;:::-;5716:7;5725:50;5764:10;5725:11;:25;5737:12;:10;:12::i;:::-;-1:-1:-1;;;;;5725:25:13;;;;;;;;;;;;;;;;;-1:-1:-1;5725:25:13;;;:34;;;;;;;;;;;:38;:50::i;3399:125::-;-1:-1:-1;;;;;3499:18:13;3473:7;3499:18;;;;;;;;;;;;3399:125::o;2370:93::-;2449:7;2442:14;;;;;;;;-1:-1:-1;;2442:14:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2417:13;;2442:14;;2449:7;;2442:14;;2449:7;2442:14;;;;;;;;;;;;;;;;;;;;;;;;6291:266;6384:4;6400:129;6409:12;:10;:12::i;:::-;6423:7;6432:96;6471:15;6432:96;;;;;;;;;;;;;;;;;:11;:25;6444:12;:10;:12::i;:::-;-1:-1:-1;;;;;6432:25:13;;;;;;;;;;;;;;;;;-1:-1:-1;6432:25:13;;;:34;;;;;;;;;;;:96;:38;:96::i;3727:172::-;3813:4;3829:42;3839:12;:10;:12::i;:::-;3853:9;3864:6;3829:9;:42::i;3957:149::-;-1:-1:-1;;;;;4072:18:13;;;4046:7;4072:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3957:149::o;2690:175:12:-;2748:7;2779:5;;;2802:6;;;;2794:46;;;;;-1:-1:-1;;;2794:46:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;2857:1;2690:175;-1:-1:-1;;;2690:175:12:o;598:104:17:-;685:10;598:104;:::o;9355:340:13:-;-1:-1:-1;;;;;9456:19:13;;9448:68;;;;-1:-1:-1;;;9448:68:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9534:21:13;;9526:68;;;;-1:-1:-1;;;9526:68:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9605:18:13;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;9656:32;;;;;;;;;;;;;;;;;9355:340;;;:::o;7031:530::-;-1:-1:-1;;;;;7136:20:13;;7128:70;;;;-1:-1:-1;;;7128:70:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7216:23:13;;7208:71;;;;-1:-1:-1;;;7208:71:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7290:47;7311:6;7319:9;7330:6;7290:20;:47::i;:::-;7368:71;7390:6;7368:71;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7368:17:13;;:9;:17;;;;;;;;;;;;:71;:21;:71::i;:::-;-1:-1:-1;;;;;7348:17:13;;;:9;:17;;;;;;;;;;;:91;;;;7472:20;;;;;;;:32;;7497:6;7472:24;:32::i;:::-;-1:-1:-1;;;;;7449:20:13;;;:9;:20;;;;;;;;;;;;:55;;;;7519:35;;;;;;;7449:20;;7519:35;;;;;;;;;;;;;7031:530;;;:::o;5432:163:12:-;5518:7;5553:12;5545:6;;;;5537:29;;;;-1:-1:-1;;;5537:29:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5583:5:12;;;5432:163::o;10701:92:13:-;;;;:::o",
    "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.7.0;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\ncontract BeamToken is ERC20 {\n    constructor(uint256 initialSupply) ERC20(\"BeamToken\", \"BEAM\") {\n        _setupDecimals(8);\n        _mint(msg.sender, initialSupply);\n    }\n}",
    "sourcePath": "C:/projects/ethereum/eth_pipe/contracts/BeamToken.sol",
    "ast": {
      "absolutePath": "/C/projects/ethereum/eth_pipe/contracts/BeamToken.sol",
      "exportedSymbols": {
        "BeamToken": [
          1289
        ],
        "Context": [
          5474
        ],
        "ERC20": [
          4864
        ],
        "IERC20": [
          4942
        ],
        "SafeMath": [
          4361
        ]
      },
      "id": 1290,
      "license": "UNLICENSED",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1265,
          "literals": [
            "solidity",
            "^",
            "0.7",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "39:23:4"
        },
        {
          "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "id": 1266,
          "nodeType": "ImportDirective",
          "scope": 1290,
          "sourceUnit": 4865,
          "src": "64:63:4",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 1267,
                "name": "ERC20",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 4864,
                "src": "151:5:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC20_$4864",
                  "typeString": "contract ERC20"
                }
              },
              "id": 1268,
              "nodeType": "InheritanceSpecifier",
              "src": "151:5:4"
            }
          ],
          "contractDependencies": [
            4864,
            4942,
            5474
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 1289,
          "linearizedBaseContracts": [
            1289,
            4864,
            4942,
            5474
          ],
          "name": "BeamToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 1287,
                "nodeType": "Block",
                "src": "225:76:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "38",
                          "id": 1278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "250:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_8_by_1",
                            "typeString": "int_const 8"
                          },
                          "value": "8"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_8_by_1",
                            "typeString": "int_const 8"
                          }
                        ],
                        "id": 1277,
                        "name": "_setupDecimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4852,
                        "src": "235:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$returns$__$",
                          "typeString": "function (uint8)"
                        }
                      },
                      "id": 1279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "235:17:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1280,
                    "nodeType": "ExpressionStatement",
                    "src": "235:17:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 1282,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "268:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "268:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "id": 1284,
                          "name": "initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1270,
                          "src": "280:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1281,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4740,
                        "src": "262:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 1285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "262:32:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1286,
                    "nodeType": "ExpressionStatement",
                    "src": "262:32:4"
                  }
                ]
              },
              "id": 1288,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "4265616d546f6b656e",
                      "id": 1273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "204:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_bbb7f5f4776377948acb55f7387da35cd8170a650a039ab075e3c67d05f5af8d",
                        "typeString": "literal_string \"BeamToken\""
                      },
                      "value": "BeamToken"
                    },
                    {
                      "hexValue": "4245414d",
                      "id": 1274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "217:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_ce705ee416b535c600060761a8b08923929f228e117f32a0fa3504876ad61bda",
                        "typeString": "literal_string \"BEAM\""
                      },
                      "value": "BEAM"
                    }
                  ],
                  "id": 1275,
                  "modifierName": {
                    "id": 1272,
                    "name": "ERC20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4864,
                    "src": "198:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC20_$4864_$",
                      "typeString": "type(contract ERC20)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "198:26:4"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1271,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1270,
                    "mutability": "mutable",
                    "name": "initialSupply",
                    "nodeType": "VariableDeclaration",
                    "scope": 1288,
                    "src": "175:21:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1269,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "175:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "174:23:4"
              },
              "returnParameters": {
                "id": 1276,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "225:0:4"
              },
              "scope": 1289,
              "src": "163:138:4",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 1290,
          "src": "129:174:4"
        }
      ],
      "src": "39:264:4"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "/C/projects/ethereum/eth_pipe/contracts/BeamToken.sol",
        "exportedSymbols": {
          "BeamToken": [
            1289
          ],
          "Context": [
            5474
          ],
          "ERC20": [
            4864
          ],
          "IERC20": [
            4942
          ],
          "SafeMath": [
            4361
          ]
        },
        "license": "UNLICENSED"
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.7",
              ".0"
            ]
          },
          "id": 1265,
          "name": "PragmaDirective",
          "src": "39:23:4"
        },
        {
          "attributes": {
            "SourceUnit": 4865,
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "scope": 1290,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 1266,
          "name": "ImportDirective",
          "src": "64:63:4"
        },
        {
          "attributes": {
            "abstract": false,
            "contractDependencies": [
              4864,
              4942,
              5474
            ],
            "contractKind": "contract",
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              1289,
              4864,
              4942,
              5474
            ],
            "name": "BeamToken",
            "scope": 1290
          },
          "children": [
            {
              "attributes": {},
              "children": [
                {
                  "attributes": {
                    "name": "ERC20",
                    "referencedDeclaration": 4864,
                    "type": "contract ERC20"
                  },
                  "id": 1267,
                  "name": "UserDefinedTypeName",
                  "src": "151:5:4"
                }
              ],
              "id": 1268,
              "name": "InheritanceSpecifier",
              "src": "151:5:4"
            },
            {
              "attributes": {
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "name": "",
                "scope": 1289,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "initialSupply",
                        "scope": 1288,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 1269,
                          "name": "ElementaryTypeName",
                          "src": "175:7:4"
                        }
                      ],
                      "id": 1270,
                      "name": "VariableDeclaration",
                      "src": "175:21:4"
                    }
                  ],
                  "id": 1271,
                  "name": "ParameterList",
                  "src": "174:23:4"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1276,
                  "name": "ParameterList",
                  "src": "225:0:4"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 4864,
                        "type": "type(contract ERC20)",
                        "value": "ERC20"
                      },
                      "id": 1272,
                      "name": "Identifier",
                      "src": "198:5:4"
                    },
                    {
                      "attributes": {
                        "hexvalue": "4265616d546f6b656e",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "token": "string",
                        "type": "literal_string \"BeamToken\"",
                        "value": "BeamToken"
                      },
                      "id": 1273,
                      "name": "Literal",
                      "src": "204:11:4"
                    },
                    {
                      "attributes": {
                        "hexvalue": "4245414d",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "token": "string",
                        "type": "literal_string \"BEAM\"",
                        "value": "BEAM"
                      },
                      "id": 1274,
                      "name": "Literal",
                      "src": "217:6:4"
                    }
                  ],
                  "id": 1275,
                  "name": "ModifierInvocation",
                  "src": "198:26:4"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 4852,
                                "type": "function (uint8)",
                                "value": "_setupDecimals"
                              },
                              "id": 1277,
                              "name": "Identifier",
                              "src": "235:14:4"
                            },
                            {
                              "attributes": {
                                "hexvalue": "38",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "token": "number",
                                "type": "int_const 8",
                                "value": "8"
                              },
                              "id": 1278,
                              "name": "Literal",
                              "src": "250:1:4"
                            }
                          ],
                          "id": 1279,
                          "name": "FunctionCall",
                          "src": "235:17:4"
                        }
                      ],
                      "id": 1280,
                      "name": "ExpressionStatement",
                      "src": "235:17:4"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 4740,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 1281,
                              "name": "Identifier",
                              "src": "262:5:4"
                            },
                            {
                              "attributes": {
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 1282,
                                  "name": "Identifier",
                                  "src": "268:3:4"
                                }
                              ],
                              "id": 1283,
                              "name": "MemberAccess",
                              "src": "268:10:4"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1270,
                                "type": "uint256",
                                "value": "initialSupply"
                              },
                              "id": 1284,
                              "name": "Identifier",
                              "src": "280:13:4"
                            }
                          ],
                          "id": 1285,
                          "name": "FunctionCall",
                          "src": "262:32:4"
                        }
                      ],
                      "id": 1286,
                      "name": "ExpressionStatement",
                      "src": "262:32:4"
                    }
                  ],
                  "id": 1287,
                  "name": "Block",
                  "src": "225:76:4"
                }
              ],
              "id": 1288,
              "name": "FunctionDefinition",
              "src": "163:138:4"
            }
          ],
          "id": 1289,
          "name": "ContractDefinition",
          "src": "129:174:4"
        }
      ],
      "id": 1290,
      "name": "SourceUnit",
      "src": "39:264:4"
    },
    "compiler": {
      "name": "solc",
      "version": "0.7.2+commit.51b20bc0.Emscripten.clang"
    },
    "networks": {
      "1234": {
        "events": {},
        "links": {},
        "address": "0xd8672a4A1bf37D36beF74E36edb4f17845E76F4e",
        "transactionHash": "0x752e5bd782d702b6e7ffe41a65c0271d6dcf2c7d41708d2a58586dd1ed9044e0"
      }
    },
    "schemaVersion": "3.4.1",
    "updatedAt": "2021-05-31T20:19:36.790Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "allowance(address,address)": {
          "details": "See {IERC20-allowance}."
        },
        "approve(address,uint256)": {
          "details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
        },
        "balanceOf(address)": {
          "details": "See {IERC20-balanceOf}."
        },
        "decimals()": {
          "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
        },
        "decreaseAllowance(address,uint256)": {
          "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
        },
        "increaseAllowance(address,uint256)": {
          "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
        },
        "name()": {
          "details": "Returns the name of the token."
        },
        "symbol()": {
          "details": "Returns the symbol of the token, usually a shorter version of the name."
        },
        "totalSupply()": {
          "details": "See {IERC20-totalSupply}."
        },
        "transfer(address,uint256)": {
          "details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  };