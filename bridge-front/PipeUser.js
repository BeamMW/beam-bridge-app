const PipeUserContract = {
    "contractName": "PipeUser",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "pipeAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "beamToken",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "beamPipeUserCid",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "msgId",
            "type": "uint256"
          }
        ],
        "name": "receiveFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "value",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "receiverBeamPubkey",
            "type": "bytes"
          }
        ],
        "name": "sendFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "remoteContractId",
            "type": "bytes32"
          }
        ],
        "name": "setRemote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.7.2+commit.51b20bc0\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pipeAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"beamToken\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"beamPipeUserCid\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"msgId\",\"type\":\"uint256\"}],\"name\":\"receiveFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"value\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"receiverBeamPubkey\",\"type\":\"bytes\"}],\"name\":\"sendFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"remoteContractId\",\"type\":\"bytes32\"}],\"name\":\"setRemote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/projects/ethereum/eth_pipe/contracts/PipeUser.sol\":\"PipeUser\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":2000},\"remappings\":[]},\"sources\":{\"/C/projects/ethereum/eth_pipe/3rdparty/blake2-solidity/contracts/Blake2b.sol\":{\"keccak256\":\"0xf222a2a9d3e604d81c0593d722db47488261583e32bcb4feca3a2605ead33123\",\"license\":\"Apache 2.0\",\"urls\":[\"bzz-raw://0db660431409a9d7a10b4c04cd8c9b012491eaa16f0c3da982ae53e6d18f9fe1\",\"dweb:/ipfs/QmXQnStAZnRxNNdpobcHtGK4FNDYCPN3MaDK5cYykSFZ7n\"]},\"/C/projects/ethereum/eth_pipe/contracts/BeamDifficulty.sol\":{\"keccak256\":\"0x0943356e3e3948ebb14a7b5b219a4ad84dd0fb310cdf22268201a86f3ae73815\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://69e48930b5253f3662b67f9dfd4e9fdabd4040068ad90fdb0d84c865d4c7e2ea\",\"dweb:/ipfs/QmcKCpdbG2iAW1THMGYhU5yMW31MEMqpsSNpnGYheuUNT2\"]},\"/C/projects/ethereum/eth_pipe/contracts/BeamHashIII.sol\":{\"keccak256\":\"0xa0fa3be10670ed92433c1b834437b7159551e0be613785003622ce3288006fd6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d3c0fcbf7ed45a888e13ab850a0c719733341ddf132f6c032935c77a7feb429a\",\"dweb:/ipfs/QmaptCYZXBRw2jvKfy2cuHpS8ajEKNfQmF6hiy1Cidd72Q\"]},\"/C/projects/ethereum/eth_pipe/contracts/BeamHeader.sol\":{\"keccak256\":\"0x07190b2f62d5bccf95e31bdd1127740a1980955950cfc3fa364e2ddb3bb7f694\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dec6cbd8d442520e7b7aca0988a566e3367cb9d1772f98fb141a0f2541ed327d\",\"dweb:/ipfs/QmSyJuNPoSYfyRgTrXeksJ2iqM8WDR19z62X3PpJfe2nTb\"]},\"/C/projects/ethereum/eth_pipe/contracts/BeamUtils.sol\":{\"keccak256\":\"0xd199bf50d1d82bf18cc676fc15f34b87e5e67a659466c4755912c837774e1b62\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d99c0bc39830d878c93629ea8d35d41d7ecca5797d4b6ab536fe06e60f8f7e3e\",\"dweb:/ipfs/QmZG1rovx5WEuK9YrGGQCMwSrPx29YE9VucevFzMK6Q8Tv\"]},\"/C/projects/ethereum/eth_pipe/contracts/Pipe.sol\":{\"keccak256\":\"0x8cb16358a329e9138a29423f3f6f184faffc7628fbbd5613b6f19b3170caeb34\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a3b5ce534046ae418d1c26182c36db3526dde8cb980469f3472fcc98c5d333df\",\"dweb:/ipfs/QmWguQhrwy7kkPZ7fjFPyz6sP1G5GakMoeiSV6Rcauoco5\"]},\"/C/projects/ethereum/eth_pipe/contracts/PipeUser.sol\":{\"keccak256\":\"0xff030c18141c1a134a072ffac782d5846076d86ba1c36f245a3e135aaf185b35\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://935b8f8628eab2bea31112e1662ee781eebb7bc16226eaebd68016b24d1d9d68\",\"dweb:/ipfs/QmRCBvftFRPuA75aM77wYRtX11oNGDYenet9t86J57ERXj\"]},\"/C/projects/ethereum/eth_pipe/contracts/SipHash.sol\":{\"keccak256\":\"0x4a21dce44cc3c46f2c40d2e68d91b909003dc71ad976d273d2f74159fc4ce7cc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://57db0e4f64e367ac2d2cad2f8222e5cadb5180836f771840762d6815c8bb94c9\",\"dweb:/ipfs/Qma56uSw3xw2tb6hRu7dxFiAAhjsewiqEUXFF5ZMSjr1UM\"]},\"/C/projects/ethereum/eth_pipe/contracts/StepElem.sol\":{\"keccak256\":\"0xdbd7949c7913c81abb39b305c2a447deb15d7cc30fd41cedfc1fe91855030d15\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://487a18a71d7de005e6172625110d32b985de8c5d63075db255192cceab18c138\",\"dweb:/ipfs/QmSKjCg1Gw1M2EYjtsCKcuLZmD7W2FeEgyvZSpejdejES3\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5f02220344881ce43204ae4a6281145a67bc52c2bb1290a791857df3d19d78f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://24427744bd3e6cb73c17010119af12a318289c0253a4d9acb8576c9fb3797b08\",\"dweb:/ipfs/QmTLDqpKRBuxGxRAmjgXt9AkXyACW3MtKzi7PYjm5iMfGC\"]},\"openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol\":{\"keccak256\":\"0xf12dfbe97e6276980b83d2830bb0eb75e0cf4f3e626c2471137f82158ae6a0fc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3a849c2d95e85463909e5b5c920b13e7a11216ca14127085e16d22b9379d52a\",\"dweb:/ipfs/QmUg3CZDbCCcQdroEpexBy5ZFd5vD1UWijWQq9qHZjtJNQ\"]},\"openzeppelin-solidity/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50604051610a1a380380610a1a8339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b039384166001600160a01b0319918216179091556001805493909416921691909117909155600255610997806100836000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063158df419146100465780638827e09b146100655780639653d0dc14610082575b600080fd5b6100636004803603602081101561005c57600080fd5b5035610139565b005b6100636004803603602081101561007b57600080fd5b503561013e565b6100636004803603604081101561009857600080fd5b67ffffffffffffffff82351691908101906040810160208201356401000000008111156100c457600080fd5b8201836020820111156100d657600080fd5b803590602001918460018302840111640100000000831117156100f857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102f5945050505050565b600255565b60008054604080517f66a0683700000000000000000000000000000000000000000000000000000000815260048101859052905160609373ffffffffffffffffffffffffffffffffffffffff909316926366a06837926024808201939182900301818387803b1580156101b057600080fd5b505af11580156101c4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156101ed57600080fd5b810190808051604051939291908464010000000082111561020d57600080fd5b90830190602082018581111561022257600080fd5b825164010000000081118282018810171561023c57600080fd5b82525081516020918201929091019080838360005b83811015610269578181015183820152602001610251565b50505050905090810190601f1680156102965780820380516001836020036101000a031916815260200191505b506040525050506020810151603482015191925060601c9060006102bd60c083901c61049a565b6001549091506102ee9073ffffffffffffffffffffffffffffffffffffffff168467ffffffffffffffff84166104f9565b5050505050565b6001546103249073ffffffffffffffffffffffffffffffffffffffff16333067ffffffffffffffff861661058b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb52933a60025483856040516020018083805190602001908083835b602083106103975780518252601f199092019160209182019101610378565b6001836020036101000a0380198251168184511680821785525050505050509050018267ffffffffffffffff1660c01b8152600801925050506040516020818303038152906040526040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610431578181015183820152602001610419565b50505050905090810190601f16801561045e5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561047e57600080fd5b505af1158015610492573d6000803e3d6000fd5b505050505050565b600881811b67ff00ff00ff00ff001666ff00ff00ff00ff9290911c9190911617601081811b67ffff0000ffff00001665ffff0000ffff9290911c9190911617602081811b6bffffffffffffffff000000001691901c63ffffffff161790565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610586908490610626565b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052610620908590610626565b50505050565b6060610688826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166106e49092919063ffffffff16565b805190915015610586578080602001905160208110156106a757600080fd5b50516105865760405162461bcd60e51b815260040180806020018281038252602a815260200180610938602a913960400191505060405180910390fd5b60606106f384846000856106fd565b90505b9392505050565b6060303183111561073f5760405162461bcd60e51b81526004018080602001828103825260268152602001806109126026913960400191505060405180910390fd5b61074885610867565b610799576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106107e55780518252601f1990920191602091820191016107c6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610847576040519150601f19603f3d011682016040523d82523d6000602084013e61084c565b606091505b509150915061085c82828661086d565b979650505050505050565b3b151590565b6060831561087c5750816106f6565b82511561088c5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108d65781810151838201526020016108be565b50505050905090810190601f1680156109035780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212206fe7dade9241a25b415e1a8f26c8313592ca46d205de0c48c4be45a802fcf3c364736f6c63430007020033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063158df419146100465780638827e09b146100655780639653d0dc14610082575b600080fd5b6100636004803603602081101561005c57600080fd5b5035610139565b005b6100636004803603602081101561007b57600080fd5b503561013e565b6100636004803603604081101561009857600080fd5b67ffffffffffffffff82351691908101906040810160208201356401000000008111156100c457600080fd5b8201836020820111156100d657600080fd5b803590602001918460018302840111640100000000831117156100f857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102f5945050505050565b600255565b60008054604080517f66a0683700000000000000000000000000000000000000000000000000000000815260048101859052905160609373ffffffffffffffffffffffffffffffffffffffff909316926366a06837926024808201939182900301818387803b1580156101b057600080fd5b505af11580156101c4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156101ed57600080fd5b810190808051604051939291908464010000000082111561020d57600080fd5b90830190602082018581111561022257600080fd5b825164010000000081118282018810171561023c57600080fd5b82525081516020918201929091019080838360005b83811015610269578181015183820152602001610251565b50505050905090810190601f1680156102965780820380516001836020036101000a031916815260200191505b506040525050506020810151603482015191925060601c9060006102bd60c083901c61049a565b6001549091506102ee9073ffffffffffffffffffffffffffffffffffffffff168467ffffffffffffffff84166104f9565b5050505050565b6001546103249073ffffffffffffffffffffffffffffffffffffffff16333067ffffffffffffffff861661058b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb52933a60025483856040516020018083805190602001908083835b602083106103975780518252601f199092019160209182019101610378565b6001836020036101000a0380198251168184511680821785525050505050509050018267ffffffffffffffff1660c01b8152600801925050506040516020818303038152906040526040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610431578181015183820152602001610419565b50505050905090810190601f16801561045e5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561047e57600080fd5b505af1158015610492573d6000803e3d6000fd5b505050505050565b600881811b67ff00ff00ff00ff001666ff00ff00ff00ff9290911c9190911617601081811b67ffff0000ffff00001665ffff0000ffff9290911c9190911617602081811b6bffffffffffffffff000000001691901c63ffffffff161790565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610586908490610626565b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052610620908590610626565b50505050565b6060610688826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166106e49092919063ffffffff16565b805190915015610586578080602001905160208110156106a757600080fd5b50516105865760405162461bcd60e51b815260040180806020018281038252602a815260200180610938602a913960400191505060405180910390fd5b60606106f384846000856106fd565b90505b9392505050565b6060303183111561073f5760405162461bcd60e51b81526004018080602001828103825260268152602001806109126026913960400191505060405180910390fd5b61074885610867565b610799576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106107e55780518252601f1990920191602091820191016107c6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610847576040519150601f19603f3d011682016040523d82523d6000602084013e61084c565b606091505b509150915061085c82828661086d565b979650505050505050565b3b151590565b6060831561087c5750816106f6565b82511561088c5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108d65781810151838201526020016108be565b50505050905090810190601f1680156109035780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212206fe7dade9241a25b415e1a8f26c8313592ca46d205de0c48c4be45a802fcf3c364736f6c63430007020033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [],
    "sourceMap": "332:1234:6:-:0;;;472:203;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;472:203:6;;;;;;;;;;;563:13;:27;;-1:-1:-1;;;;;563:27:6;;;-1:-1:-1;;;;;;563:27:6;;;;;;;;600:23;;;;;;;;;;;;;;;633:17;:35;332:1234;;;;;;",
    "deployedSourceMap": "332:1234:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1447:117;;;;;;;;;;;;;;;;-1:-1:-1;1447:117:6;;:::i;:::-;;681:471;;;;;;;;;;;;;;;;-1:-1:-1;681:471:6;;:::i;1158:283::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1158:283:6;;-1:-1:-1;1158:283:6;;-1:-1:-1;;;;;1158:283:6:i;1447:117::-;1521:17;:36;1447:117::o;681:471::-;770:13;;;765:43;;;;;;;;;;;;;;744:18;;770:13;;;;;765:36;;:43;;;;;;;;;;;770:13;;765:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;765:43:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;765:43:6;;;;;;;;;;-1:-1:-1;765:43:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;765:43:6;;-1:-1:-1;;;971:2:6;960:14;;954:21;1013:2;1002:14;;996:21;744:64;;-1:-1:-1;950:2:6;946:30;;865:16;1052:32;1072:11;;;;1052:19;:32::i;:::-;1102:11;;1036:48;;-1:-1:-1;1095:50:6;;1102:11;;1128:8;1095:50;;;:32;:50::i;:::-;681:471;;;;;:::o;1158:283::-;1260:11;;1253:70;;1260:11;;1290:10;1310:4;1253:70;;;:36;:70::i;:::-;1339:13;;;;;;;;;;1334:36;;;1371:17;;1407:18;1427:5;1390:43;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1390:43:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1334:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1158:283;;:::o;2103:492:4:-;2329:1;2297:33;;;;;2306:18;2242:33;;;;;;;;2241:90;2476:2;2444:34;;;;;2453:18;2388:34;;;;;;;;2387:92;2561:2;2552:11;;;;;2536;;;;;2535:29;;2103:492::o;704:175:11:-;813:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;836:23;813:58;;;786:86;;806:5;;786:19;:86::i;:::-;704:175;;;:::o;885:203::-;1012:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1035:27;1012:68;;;985:96;;1005:5;;985:19;:96::i;:::-;885:203;;;;:::o;2967:751::-;3386:23;3412:69;3440:4;3412:69;;;;;;;;;;;;;;;;;3420:5;3412:27;;;;:69;;;;;:::i;:::-;3495:17;;3386:95;;-1:-1:-1;3495:21:11;3491:221;;3635:10;3624:30;;;;;;;;;;;;;;;-1:-1:-1;3624:30:11;3616:85;;;;-1:-1:-1;;;3616:85:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3581:193:12;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;;:::o;4608:523::-;4735:12;4775:4;4767:21;:30;-1:-1:-1;4767:30:12;4759:81;;;;-1:-1:-1;;;4759:81:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;-1:-1:-1;;;4850:60:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5022:33:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4980:75;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;4608:523;-1:-1:-1;;;;;;;4608:523:12:o;726:413::-;1086:20;1124:8;;;726:413::o;7091:725::-;7206:12;7234:7;7230:580;;;-1:-1:-1;7264:10:12;7257:17;;7230:580;7375:17;;:21;7371:429;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;-1:-1:-1;;;7765:20:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.7.2;\n\nimport \"./Pipe.sol\";\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"openzeppelin-solidity/contracts/utils/Address.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\";\n\ncontract PipeUser {\n    using SafeERC20 for IERC20;\n    address m_pipeAddress;\n    address m_beamToken;\n    bytes32 m_beamPipeUserCid;\n\n    constructor(address pipeAddress, address beamToken, bytes32 beamPipeUserCid)\n    {\n        m_pipeAddress = pipeAddress;\n        m_beamToken = beamToken;\n        m_beamPipeUserCid = beamPipeUserCid;\n    }\n\n    function receiveFunds(uint msgId)\n        public\n    {\n        bytes memory value = Pipe(m_pipeAddress).getRemoteMessage(msgId);\n\n        // parse msg: [address][uint64 value]\n        address receiver;\n        bytes8 tmp;\n        assembly {\n            receiver := shr(96, mload(add(value, 32)))\n            tmp := mload(add(value, 52))\n        }\n        uint64 amount = BeamUtils.reverse64(uint64(tmp));\n\n        IERC20(m_beamToken).safeTransfer(receiver, amount);\n    }\n\n    function sendFunds(uint64 value, bytes memory receiverBeamPubkey)\n        public\n    {\n        IERC20(m_beamToken).safeTransferFrom(msg.sender, address(this), value);\n\n        Pipe(m_pipeAddress).pushLocalMessage(m_beamPipeUserCid, abi.encodePacked(receiverBeamPubkey, value));\n    }\n\n    function setRemote(bytes32 remoteContractId)\n        public\n    {\n        m_beamPipeUserCid = remoteContractId;\n    }\n}",
    "sourcePath": "C:/projects/ethereum/eth_pipe/contracts/PipeUser.sol",
    "ast": {
      "absolutePath": "/C/projects/ethereum/eth_pipe/contracts/PipeUser.sol",
      "exportedSymbols": {
        "Address": [
          4678
        ],
        "BeamDifficulty": [
          385
        ],
        "BeamHashIII": [
          828
        ],
        "BeamHeader": [
          1263
        ],
        "BeamUtils": [
          1522
        ],
        "Blake2b": [
          278
        ],
        "IERC20": [
          4169
        ],
        "Pipe": [
          1860
        ],
        "PipeUser": [
          1982
        ],
        "SafeERC20": [
          4382
        ],
        "SafeMath": [
          4091
        ],
        "SipHash": [
          2881
        ],
        "StepElem": [
          3736
        ]
      },
      "id": 1983,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1862,
          "literals": [
            "solidity",
            "^",
            "0.7",
            ".2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:6"
        },
        {
          "absolutePath": "/C/projects/ethereum/eth_pipe/contracts/Pipe.sol",
          "file": "./Pipe.sol",
          "id": 1863,
          "nodeType": "ImportDirective",
          "scope": 1983,
          "sourceUnit": 1861,
          "src": "57:20:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
          "id": 1864,
          "nodeType": "ImportDirective",
          "scope": 1983,
          "sourceUnit": 4092,
          "src": "78:59:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "openzeppelin-solidity/contracts/utils/Address.sol",
          "file": "openzeppelin-solidity/contracts/utils/Address.sol",
          "id": 1865,
          "nodeType": "ImportDirective",
          "scope": 1983,
          "sourceUnit": 4679,
          "src": "138:59:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
          "file": "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
          "id": 1866,
          "nodeType": "ImportDirective",
          "scope": 1983,
          "sourceUnit": 4383,
          "src": "198:67:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
          "file": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
          "id": 1867,
          "nodeType": "ImportDirective",
          "scope": 1983,
          "sourceUnit": 4170,
          "src": "266:64:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 1982,
          "linearizedBaseContracts": [
            1982
          ],
          "name": "PipeUser",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 1870,
              "libraryName": {
                "id": 1868,
                "name": "SafeERC20",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 4382,
                "src": "362:9:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SafeERC20_$4382",
                  "typeString": "library SafeERC20"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "356:27:6",
              "typeName": {
                "id": 1869,
                "name": "IERC20",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 4169,
                "src": "376:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$4169",
                  "typeString": "contract IERC20"
                }
              }
            },
            {
              "constant": false,
              "id": 1872,
              "mutability": "mutable",
              "name": "m_pipeAddress",
              "nodeType": "VariableDeclaration",
              "scope": 1982,
              "src": "388:21:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 1871,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "388:7:6",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 1874,
              "mutability": "mutable",
              "name": "m_beamToken",
              "nodeType": "VariableDeclaration",
              "scope": 1982,
              "src": "415:19:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 1873,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "415:7:6",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 1876,
              "mutability": "mutable",
              "name": "m_beamPipeUserCid",
              "nodeType": "VariableDeclaration",
              "scope": 1982,
              "src": "440:25:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              },
              "typeName": {
                "id": 1875,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "440:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1897,
                "nodeType": "Block",
                "src": "553:122:6",
                "statements": [
                  {
                    "expression": {
                      "id": 1887,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 1885,
                        "name": "m_pipeAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1872,
                        "src": "563:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 1886,
                        "name": "pipeAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1878,
                        "src": "579:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "563:27:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1888,
                    "nodeType": "ExpressionStatement",
                    "src": "563:27:6"
                  },
                  {
                    "expression": {
                      "id": 1891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 1889,
                        "name": "m_beamToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1874,
                        "src": "600:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 1890,
                        "name": "beamToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1880,
                        "src": "614:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "600:23:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1892,
                    "nodeType": "ExpressionStatement",
                    "src": "600:23:6"
                  },
                  {
                    "expression": {
                      "id": 1895,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 1893,
                        "name": "m_beamPipeUserCid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1876,
                        "src": "633:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 1894,
                        "name": "beamPipeUserCid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1882,
                        "src": "653:15:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "633:35:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 1896,
                    "nodeType": "ExpressionStatement",
                    "src": "633:35:6"
                  }
                ]
              },
              "id": 1898,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1883,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1878,
                    "mutability": "mutable",
                    "name": "pipeAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 1898,
                    "src": "484:19:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1877,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "484:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1880,
                    "mutability": "mutable",
                    "name": "beamToken",
                    "nodeType": "VariableDeclaration",
                    "scope": 1898,
                    "src": "505:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1879,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "505:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1882,
                    "mutability": "mutable",
                    "name": "beamPipeUserCid",
                    "nodeType": "VariableDeclaration",
                    "scope": 1898,
                    "src": "524:23:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 1881,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "524:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "483:65:6"
              },
              "returnParameters": {
                "id": 1884,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "553:0:6"
              },
              "scope": 1982,
              "src": "472:203:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1937,
                "nodeType": "Block",
                "src": "734:418:6",
                "statements": [
                  {
                    "assignments": [
                      1904
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1904,
                        "mutability": "mutable",
                        "name": "value",
                        "nodeType": "VariableDeclaration",
                        "scope": 1937,
                        "src": "744:18:6",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 1903,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "744:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 1911,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 1909,
                          "name": "msgId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1900,
                          "src": "802:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 1906,
                              "name": "m_pipeAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1872,
                              "src": "770:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1905,
                            "name": "Pipe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1860,
                            "src": "765:4:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_Pipe_$1860_$",
                              "typeString": "type(contract Pipe)"
                            }
                          },
                          "id": 1907,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "765:19:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Pipe_$1860",
                            "typeString": "contract Pipe"
                          }
                        },
                        "id": 1908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getRemoteMessage",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1842,
                        "src": "765:36:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                          "typeString": "function (uint256) external returns (bytes memory)"
                        }
                      },
                      "id": 1910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "765:43:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "744:64:6"
                  },
                  {
                    "assignments": [
                      1913
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1913,
                        "mutability": "mutable",
                        "name": "receiver",
                        "nodeType": "VariableDeclaration",
                        "scope": 1937,
                        "src": "865:16:6",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1912,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "865:7:6",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 1914,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "865:16:6"
                  },
                  {
                    "assignments": [
                      1916
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1916,
                        "mutability": "mutable",
                        "name": "tmp",
                        "nodeType": "VariableDeclaration",
                        "scope": 1937,
                        "src": "891:10:6",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes8",
                          "typeString": "bytes8"
                        },
                        "typeName": {
                          "id": 1915,
                          "name": "bytes8",
                          "nodeType": "ElementaryTypeName",
                          "src": "891:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes8",
                            "typeString": "bytes8"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 1917,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "891:10:6"
                  },
                  {
                    "AST": {
                      "nodeType": "YulBlock",
                      "src": "920:107:6",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "934:42:6",
                          "value": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "950:2:6",
                                "type": "",
                                "value": "96"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "964:5:6"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "971:2:6",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "960:3:6"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "960:14:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "954:5:6"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "954:21:6"
                              }
                            ],
                            "functionName": {
                              "name": "shr",
                              "nodeType": "YulIdentifier",
                              "src": "946:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "946:30:6"
                          },
                          "variableNames": [
                            {
                              "name": "receiver",
                              "nodeType": "YulIdentifier",
                              "src": "934:8:6"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "989:28:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1006:5:6"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1013:2:6",
                                    "type": "",
                                    "value": "52"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1002:3:6"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1002:14:6"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "996:5:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "996:21:6"
                          },
                          "variableNames": [
                            {
                              "name": "tmp",
                              "nodeType": "YulIdentifier",
                              "src": "989:3:6"
                            }
                          ]
                        }
                      ]
                    },
                    "evmVersion": "petersburg",
                    "externalReferences": [
                      {
                        "declaration": 1913,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "934:8:6",
                        "valueSize": 1
                      },
                      {
                        "declaration": 1916,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "989:3:6",
                        "valueSize": 1
                      },
                      {
                        "declaration": 1904,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1006:5:6",
                        "valueSize": 1
                      },
                      {
                        "declaration": 1904,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "964:5:6",
                        "valueSize": 1
                      }
                    ],
                    "id": 1918,
                    "nodeType": "InlineAssembly",
                    "src": "911:116:6"
                  },
                  {
                    "assignments": [
                      1920
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1920,
                        "mutability": "mutable",
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "scope": 1937,
                        "src": "1036:13:6",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        "typeName": {
                          "id": 1919,
                          "name": "uint64",
                          "nodeType": "ElementaryTypeName",
                          "src": "1036:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 1928,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 1925,
                              "name": "tmp",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1916,
                              "src": "1079:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes8",
                                "typeString": "bytes8"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes8",
                                "typeString": "bytes8"
                              }
                            ],
                            "id": 1924,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1072:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": {
                              "id": 1923,
                              "name": "uint64",
                              "nodeType": "ElementaryTypeName",
                              "src": "1072:6:6",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1926,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1072:11:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "expression": {
                          "id": 1921,
                          "name": "BeamUtils",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1522,
                          "src": "1052:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BeamUtils_$1522_$",
                            "typeString": "type(library BeamUtils)"
                          }
                        },
                        "id": 1922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "reverse64",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1521,
                        "src": "1052:19:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint64_$returns$_t_uint64_$",
                          "typeString": "function (uint64) pure returns (uint64)"
                        }
                      },
                      "id": 1927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1052:32:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1036:48:6"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 1933,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1913,
                          "src": "1128:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 1934,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1920,
                          "src": "1138:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 1930,
                              "name": "m_beamToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1874,
                              "src": "1102:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1929,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4169,
                            "src": "1095:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC20_$4169_$",
                              "typeString": "type(contract IERC20)"
                            }
                          },
                          "id": 1931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1095:19:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$4169",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 1932,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "safeTransfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4203,
                        "src": "1095:32:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$4169_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_IERC20_$4169_$",
                          "typeString": "function (contract IERC20,address,uint256)"
                        }
                      },
                      "id": 1935,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1095:50:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1936,
                    "nodeType": "ExpressionStatement",
                    "src": "1095:50:6"
                  }
                ]
              },
              "functionSelector": "8827e09b",
              "id": 1938,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "receiveFunds",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1901,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1900,
                    "mutability": "mutable",
                    "name": "msgId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1938,
                    "src": "703:10:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1899,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "703:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "702:12:6"
              },
              "returnParameters": {
                "id": 1902,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "734:0:6"
              },
              "scope": 1982,
              "src": "681:471:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1970,
                "nodeType": "Block",
                "src": "1243:198:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 1949,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1290:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1950,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1290:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 1953,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "1310:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PipeUser_$1982",
                                "typeString": "contract PipeUser"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_PipeUser_$1982",
                                "typeString": "contract PipeUser"
                              }
                            ],
                            "id": 1952,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1302:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 1951,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1302:7:6",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1302:13:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 1955,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1940,
                          "src": "1317:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 1946,
                              "name": "m_beamToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1874,
                              "src": "1260:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1945,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4169,
                            "src": "1253:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC20_$4169_$",
                              "typeString": "type(contract IERC20)"
                            }
                          },
                          "id": 1947,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1253:19:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$4169",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 1948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "safeTransferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4228,
                        "src": "1253:36:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$4169_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_IERC20_$4169_$",
                          "typeString": "function (contract IERC20,address,address,uint256)"
                        }
                      },
                      "id": 1956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1253:70:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1957,
                    "nodeType": "ExpressionStatement",
                    "src": "1253:70:6"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 1962,
                          "name": "m_beamPipeUserCid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1876,
                          "src": "1371:17:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 1965,
                              "name": "receiverBeamPubkey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1942,
                              "src": "1407:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 1966,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1940,
                              "src": "1427:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            ],
                            "expression": {
                              "id": 1963,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1390:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 1964,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "1390:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 1967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1390:43:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 1959,
                              "name": "m_pipeAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1872,
                              "src": "1339:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1958,
                            "name": "Pipe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1860,
                            "src": "1334:4:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_Pipe_$1860_$",
                              "typeString": "type(contract Pipe)"
                            }
                          },
                          "id": 1960,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1334:19:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Pipe_$1860",
                            "typeString": "contract Pipe"
                          }
                        },
                        "id": 1961,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "pushLocalMessage",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1859,
                        "src": "1334:36:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (bytes32,bytes memory) external"
                        }
                      },
                      "id": 1968,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1334:100:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1969,
                    "nodeType": "ExpressionStatement",
                    "src": "1334:100:6"
                  }
                ]
              },
              "functionSelector": "9653d0dc",
              "id": 1971,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sendFunds",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1943,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1940,
                    "mutability": "mutable",
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "scope": 1971,
                    "src": "1177:12:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "typeName": {
                      "id": 1939,
                      "name": "uint64",
                      "nodeType": "ElementaryTypeName",
                      "src": "1177:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1942,
                    "mutability": "mutable",
                    "name": "receiverBeamPubkey",
                    "nodeType": "VariableDeclaration",
                    "scope": 1971,
                    "src": "1191:31:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 1941,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1191:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1176:47:6"
              },
              "returnParameters": {
                "id": 1944,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1243:0:6"
              },
              "scope": 1982,
              "src": "1158:283:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1980,
                "nodeType": "Block",
                "src": "1511:53:6",
                "statements": [
                  {
                    "expression": {
                      "id": 1978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 1976,
                        "name": "m_beamPipeUserCid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1876,
                        "src": "1521:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 1977,
                        "name": "remoteContractId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1973,
                        "src": "1541:16:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "1521:36:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 1979,
                    "nodeType": "ExpressionStatement",
                    "src": "1521:36:6"
                  }
                ]
              },
              "functionSelector": "158df419",
              "id": 1981,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "setRemote",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1974,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1973,
                    "mutability": "mutable",
                    "name": "remoteContractId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1981,
                    "src": "1466:24:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 1972,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1466:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1465:26:6"
              },
              "returnParameters": {
                "id": 1975,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1511:0:6"
              },
              "scope": 1982,
              "src": "1447:117:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 1983,
          "src": "332:1234:6"
        }
      ],
      "src": "32:1534:6"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "/C/projects/ethereum/eth_pipe/contracts/PipeUser.sol",
        "exportedSymbols": {
          "Address": [
            4678
          ],
          "BeamDifficulty": [
            385
          ],
          "BeamHashIII": [
            828
          ],
          "BeamHeader": [
            1263
          ],
          "BeamUtils": [
            1522
          ],
          "Blake2b": [
            278
          ],
          "IERC20": [
            4169
          ],
          "Pipe": [
            1860
          ],
          "PipeUser": [
            1982
          ],
          "SafeERC20": [
            4382
          ],
          "SafeMath": [
            4091
          ],
          "SipHash": [
            2881
          ],
          "StepElem": [
            3736
          ]
        },
        "license": "MIT"
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.7",
              ".2"
            ]
          },
          "id": 1862,
          "name": "PragmaDirective",
          "src": "32:23:6"
        },
        {
          "attributes": {
            "SourceUnit": 1861,
            "absolutePath": "/C/projects/ethereum/eth_pipe/contracts/Pipe.sol",
            "file": "./Pipe.sol",
            "scope": 1983,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 1863,
          "name": "ImportDirective",
          "src": "57:20:6"
        },
        {
          "attributes": {
            "SourceUnit": 4092,
            "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
            "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
            "scope": 1983,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 1864,
          "name": "ImportDirective",
          "src": "78:59:6"
        },
        {
          "attributes": {
            "SourceUnit": 4679,
            "absolutePath": "openzeppelin-solidity/contracts/utils/Address.sol",
            "file": "openzeppelin-solidity/contracts/utils/Address.sol",
            "scope": 1983,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 1865,
          "name": "ImportDirective",
          "src": "138:59:6"
        },
        {
          "attributes": {
            "SourceUnit": 4383,
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol",
            "scope": 1983,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 1866,
          "name": "ImportDirective",
          "src": "198:67:6"
        },
        {
          "attributes": {
            "SourceUnit": 4170,
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
            "scope": 1983,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 1867,
          "name": "ImportDirective",
          "src": "266:64:6"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "contract",
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              1982
            ],
            "name": "PipeUser",
            "scope": 1983
          },
          "children": [
            {
              "children": [
                {
                  "attributes": {
                    "name": "SafeERC20",
                    "referencedDeclaration": 4382,
                    "type": "library SafeERC20"
                  },
                  "id": 1868,
                  "name": "UserDefinedTypeName",
                  "src": "362:9:6"
                },
                {
                  "attributes": {
                    "name": "IERC20",
                    "referencedDeclaration": 4169,
                    "type": "contract IERC20"
                  },
                  "id": 1869,
                  "name": "UserDefinedTypeName",
                  "src": "376:6:6"
                }
              ],
              "id": 1870,
              "name": "UsingForDirective",
              "src": "356:27:6"
            },
            {
              "attributes": {
                "constant": false,
                "mutability": "mutable",
                "name": "m_pipeAddress",
                "scope": 1982,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address",
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "name": "address",
                    "stateMutability": "nonpayable",
                    "type": "address"
                  },
                  "id": 1871,
                  "name": "ElementaryTypeName",
                  "src": "388:7:6"
                }
              ],
              "id": 1872,
              "name": "VariableDeclaration",
              "src": "388:21:6"
            },
            {
              "attributes": {
                "constant": false,
                "mutability": "mutable",
                "name": "m_beamToken",
                "scope": 1982,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address",
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "name": "address",
                    "stateMutability": "nonpayable",
                    "type": "address"
                  },
                  "id": 1873,
                  "name": "ElementaryTypeName",
                  "src": "415:7:6"
                }
              ],
              "id": 1874,
              "name": "VariableDeclaration",
              "src": "415:19:6"
            },
            {
              "attributes": {
                "constant": false,
                "mutability": "mutable",
                "name": "m_beamPipeUserCid",
                "scope": 1982,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "bytes32",
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "name": "bytes32",
                    "type": "bytes32"
                  },
                  "id": 1875,
                  "name": "ElementaryTypeName",
                  "src": "440:7:6"
                }
              ],
              "id": 1876,
              "name": "VariableDeclaration",
              "src": "440:25:6"
            },
            {
              "attributes": {
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "modifiers": [
                  null
                ],
                "name": "",
                "scope": 1982,
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
                        "name": "pipeAddress",
                        "scope": 1898,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 1877,
                          "name": "ElementaryTypeName",
                          "src": "484:7:6"
                        }
                      ],
                      "id": 1878,
                      "name": "VariableDeclaration",
                      "src": "484:19:6"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "beamToken",
                        "scope": 1898,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 1879,
                          "name": "ElementaryTypeName",
                          "src": "505:7:6"
                        }
                      ],
                      "id": 1880,
                      "name": "VariableDeclaration",
                      "src": "505:17:6"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "beamPipeUserCid",
                        "scope": 1898,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 1881,
                          "name": "ElementaryTypeName",
                          "src": "524:7:6"
                        }
                      ],
                      "id": 1882,
                      "name": "VariableDeclaration",
                      "src": "524:23:6"
                    }
                  ],
                  "id": 1883,
                  "name": "ParameterList",
                  "src": "483:65:6"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1884,
                  "name": "ParameterList",
                  "src": "553:0:6"
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
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1872,
                                "type": "address",
                                "value": "m_pipeAddress"
                              },
                              "id": 1885,
                              "name": "Identifier",
                              "src": "563:13:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1878,
                                "type": "address",
                                "value": "pipeAddress"
                              },
                              "id": 1886,
                              "name": "Identifier",
                              "src": "579:11:6"
                            }
                          ],
                          "id": 1887,
                          "name": "Assignment",
                          "src": "563:27:6"
                        }
                      ],
                      "id": 1888,
                      "name": "ExpressionStatement",
                      "src": "563:27:6"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1874,
                                "type": "address",
                                "value": "m_beamToken"
                              },
                              "id": 1889,
                              "name": "Identifier",
                              "src": "600:11:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1880,
                                "type": "address",
                                "value": "beamToken"
                              },
                              "id": 1890,
                              "name": "Identifier",
                              "src": "614:9:6"
                            }
                          ],
                          "id": 1891,
                          "name": "Assignment",
                          "src": "600:23:6"
                        }
                      ],
                      "id": 1892,
                      "name": "ExpressionStatement",
                      "src": "600:23:6"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bytes32"
                          },
                          "children": [
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1876,
                                "type": "bytes32",
                                "value": "m_beamPipeUserCid"
                              },
                              "id": 1893,
                              "name": "Identifier",
                              "src": "633:17:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1882,
                                "type": "bytes32",
                                "value": "beamPipeUserCid"
                              },
                              "id": 1894,
                              "name": "Identifier",
                              "src": "653:15:6"
                            }
                          ],
                          "id": 1895,
                          "name": "Assignment",
                          "src": "633:35:6"
                        }
                      ],
                      "id": 1896,
                      "name": "ExpressionStatement",
                      "src": "633:35:6"
                    }
                  ],
                  "id": 1897,
                  "name": "Block",
                  "src": "553:122:6"
                }
              ],
              "id": 1898,
              "name": "FunctionDefinition",
              "src": "472:203:6"
            },
            {
              "attributes": {
                "functionSelector": "8827e09b",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "receiveFunds",
                "scope": 1982,
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
                        "name": "msgId",
                        "scope": 1938,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1899,
                          "name": "ElementaryTypeName",
                          "src": "703:4:6"
                        }
                      ],
                      "id": 1900,
                      "name": "VariableDeclaration",
                      "src": "703:10:6"
                    }
                  ],
                  "id": 1901,
                  "name": "ParameterList",
                  "src": "702:12:6"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1902,
                  "name": "ParameterList",
                  "src": "734:0:6"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          1904
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "value",
                            "scope": 1937,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "bytes",
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes",
                                "type": "bytes"
                              },
                              "id": 1903,
                              "name": "ElementaryTypeName",
                              "src": "744:5:6"
                            }
                          ],
                          "id": 1904,
                          "name": "VariableDeclaration",
                          "src": "744:18:6"
                        },
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
                            "type": "bytes memory",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "getRemoteMessage",
                                "referencedDeclaration": 1842,
                                "type": "function (uint256) external returns (bytes memory)"
                              },
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
                                    "type": "contract Pipe",
                                    "type_conversion": true
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1860,
                                        "type": "type(contract Pipe)",
                                        "value": "Pipe"
                                      },
                                      "id": 1905,
                                      "name": "Identifier",
                                      "src": "765:4:6"
                                    },
                                    {
                                      "attributes": {
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1872,
                                        "type": "address",
                                        "value": "m_pipeAddress"
                                      },
                                      "id": 1906,
                                      "name": "Identifier",
                                      "src": "770:13:6"
                                    }
                                  ],
                                  "id": 1907,
                                  "name": "FunctionCall",
                                  "src": "765:19:6"
                                }
                              ],
                              "id": 1908,
                              "name": "MemberAccess",
                              "src": "765:36:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1900,
                                "type": "uint256",
                                "value": "msgId"
                              },
                              "id": 1909,
                              "name": "Identifier",
                              "src": "802:5:6"
                            }
                          ],
                          "id": 1910,
                          "name": "FunctionCall",
                          "src": "765:43:6"
                        }
                      ],
                      "id": 1911,
                      "name": "VariableDeclarationStatement",
                      "src": "744:64:6"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          1913
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "receiver",
                            "scope": 1937,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 1912,
                              "name": "ElementaryTypeName",
                              "src": "865:7:6"
                            }
                          ],
                          "id": 1913,
                          "name": "VariableDeclaration",
                          "src": "865:16:6"
                        }
                      ],
                      "id": 1914,
                      "name": "VariableDeclarationStatement",
                      "src": "865:16:6"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          1916
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "tmp",
                            "scope": 1937,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bytes8",
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes8",
                                "type": "bytes8"
                              },
                              "id": 1915,
                              "name": "ElementaryTypeName",
                              "src": "891:6:6"
                            }
                          ],
                          "id": 1916,
                          "name": "VariableDeclaration",
                          "src": "891:10:6"
                        }
                      ],
                      "id": 1917,
                      "name": "VariableDeclarationStatement",
                      "src": "891:10:6"
                    },
                    {
                      "attributes": {
                        "evmVersion": "petersburg",
                        "externalReferences": [
                          {
                            "declaration": 1913,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "934:8:6",
                            "valueSize": 1
                          },
                          {
                            "declaration": 1916,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "989:3:6",
                            "valueSize": 1
                          },
                          {
                            "declaration": 1904,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "1006:5:6",
                            "valueSize": 1
                          },
                          {
                            "declaration": 1904,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "964:5:6",
                            "valueSize": 1
                          }
                        ],
                        "operations": "{\n    receiver := shr(96, mload(add(value, 32)))\n    tmp := mload(add(value, 52))\n}"
                      },
                      "children": [],
                      "id": 1918,
                      "name": "InlineAssembly",
                      "src": "911:116:6"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          1920
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "amount",
                            "scope": 1937,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint64",
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint64",
                                "type": "uint64"
                              },
                              "id": 1919,
                              "name": "ElementaryTypeName",
                              "src": "1036:6:6"
                            }
                          ],
                          "id": 1920,
                          "name": "VariableDeclaration",
                          "src": "1036:13:6"
                        },
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
                            "type": "uint64",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint64",
                                    "typeString": "uint64"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "reverse64",
                                "referencedDeclaration": 1521,
                                "type": "function (uint64) pure returns (uint64)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1522,
                                    "type": "type(library BeamUtils)",
                                    "value": "BeamUtils"
                                  },
                                  "id": 1921,
                                  "name": "Identifier",
                                  "src": "1052:9:6"
                                }
                              ],
                              "id": 1922,
                              "name": "MemberAccess",
                              "src": "1052:19:6"
                            },
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
                                "type": "uint64",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes8",
                                        "typeString": "bytes8"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "type(uint64)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "uint64"
                                      },
                                      "id": 1923,
                                      "name": "ElementaryTypeName",
                                      "src": "1072:6:6"
                                    }
                                  ],
                                  "id": 1924,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "1072:6:6"
                                },
                                {
                                  "attributes": {
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1916,
                                    "type": "bytes8",
                                    "value": "tmp"
                                  },
                                  "id": 1925,
                                  "name": "Identifier",
                                  "src": "1079:3:6"
                                }
                              ],
                              "id": 1926,
                              "name": "FunctionCall",
                              "src": "1072:11:6"
                            }
                          ],
                          "id": 1927,
                          "name": "FunctionCall",
                          "src": "1052:32:6"
                        }
                      ],
                      "id": 1928,
                      "name": "VariableDeclarationStatement",
                      "src": "1036:48:6"
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
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint64",
                                    "typeString": "uint64"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "safeTransfer",
                                "referencedDeclaration": 4203,
                                "type": "function (contract IERC20,address,uint256)"
                              },
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
                                    "type": "contract IERC20",
                                    "type_conversion": true
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 4169,
                                        "type": "type(contract IERC20)",
                                        "value": "IERC20"
                                      },
                                      "id": 1929,
                                      "name": "Identifier",
                                      "src": "1095:6:6"
                                    },
                                    {
                                      "attributes": {
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1874,
                                        "type": "address",
                                        "value": "m_beamToken"
                                      },
                                      "id": 1930,
                                      "name": "Identifier",
                                      "src": "1102:11:6"
                                    }
                                  ],
                                  "id": 1931,
                                  "name": "FunctionCall",
                                  "src": "1095:19:6"
                                }
                              ],
                              "id": 1932,
                              "name": "MemberAccess",
                              "src": "1095:32:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1913,
                                "type": "address",
                                "value": "receiver"
                              },
                              "id": 1933,
                              "name": "Identifier",
                              "src": "1128:8:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1920,
                                "type": "uint64",
                                "value": "amount"
                              },
                              "id": 1934,
                              "name": "Identifier",
                              "src": "1138:6:6"
                            }
                          ],
                          "id": 1935,
                          "name": "FunctionCall",
                          "src": "1095:50:6"
                        }
                      ],
                      "id": 1936,
                      "name": "ExpressionStatement",
                      "src": "1095:50:6"
                    }
                  ],
                  "id": 1937,
                  "name": "Block",
                  "src": "734:418:6"
                }
              ],
              "id": 1938,
              "name": "FunctionDefinition",
              "src": "681:471:6"
            },
            {
              "attributes": {
                "functionSelector": "9653d0dc",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "sendFunds",
                "scope": 1982,
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
                        "name": "value",
                        "scope": 1971,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint64",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint64",
                            "type": "uint64"
                          },
                          "id": 1939,
                          "name": "ElementaryTypeName",
                          "src": "1177:6:6"
                        }
                      ],
                      "id": 1940,
                      "name": "VariableDeclaration",
                      "src": "1177:12:6"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "receiverBeamPubkey",
                        "scope": 1971,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes",
                            "type": "bytes"
                          },
                          "id": 1941,
                          "name": "ElementaryTypeName",
                          "src": "1191:5:6"
                        }
                      ],
                      "id": 1942,
                      "name": "VariableDeclaration",
                      "src": "1191:31:6"
                    }
                  ],
                  "id": 1943,
                  "name": "ParameterList",
                  "src": "1176:47:6"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1944,
                  "name": "ParameterList",
                  "src": "1243:0:6"
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
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint64",
                                    "typeString": "uint64"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "safeTransferFrom",
                                "referencedDeclaration": 4228,
                                "type": "function (contract IERC20,address,address,uint256)"
                              },
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
                                    "type": "contract IERC20",
                                    "type_conversion": true
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 4169,
                                        "type": "type(contract IERC20)",
                                        "value": "IERC20"
                                      },
                                      "id": 1945,
                                      "name": "Identifier",
                                      "src": "1253:6:6"
                                    },
                                    {
                                      "attributes": {
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1874,
                                        "type": "address",
                                        "value": "m_beamToken"
                                      },
                                      "id": 1946,
                                      "name": "Identifier",
                                      "src": "1260:11:6"
                                    }
                                  ],
                                  "id": 1947,
                                  "name": "FunctionCall",
                                  "src": "1253:19:6"
                                }
                              ],
                              "id": 1948,
                              "name": "MemberAccess",
                              "src": "1253:36:6"
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
                                  "id": 1949,
                                  "name": "Identifier",
                                  "src": "1290:3:6"
                                }
                              ],
                              "id": 1950,
                              "name": "MemberAccess",
                              "src": "1290:10:6"
                            },
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
                                "type": "address",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_PipeUser_$1982",
                                        "typeString": "contract PipeUser"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "type(address)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "address"
                                      },
                                      "id": 1951,
                                      "name": "ElementaryTypeName",
                                      "src": "1302:7:6"
                                    }
                                  ],
                                  "id": 1952,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "1302:7:6"
                                },
                                {
                                  "attributes": {
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -28,
                                    "type": "contract PipeUser",
                                    "value": "this"
                                  },
                                  "id": 1953,
                                  "name": "Identifier",
                                  "src": "1310:4:6"
                                }
                              ],
                              "id": 1954,
                              "name": "FunctionCall",
                              "src": "1302:13:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1940,
                                "type": "uint64",
                                "value": "value"
                              },
                              "id": 1955,
                              "name": "Identifier",
                              "src": "1317:5:6"
                            }
                          ],
                          "id": 1956,
                          "name": "FunctionCall",
                          "src": "1253:70:6"
                        }
                      ],
                      "id": 1957,
                      "name": "ExpressionStatement",
                      "src": "1253:70:6"
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
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "pushLocalMessage",
                                "referencedDeclaration": 1859,
                                "type": "function (bytes32,bytes memory) external"
                              },
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
                                    "type": "contract Pipe",
                                    "type_conversion": true
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1860,
                                        "type": "type(contract Pipe)",
                                        "value": "Pipe"
                                      },
                                      "id": 1958,
                                      "name": "Identifier",
                                      "src": "1334:4:6"
                                    },
                                    {
                                      "attributes": {
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1872,
                                        "type": "address",
                                        "value": "m_pipeAddress"
                                      },
                                      "id": 1959,
                                      "name": "Identifier",
                                      "src": "1339:13:6"
                                    }
                                  ],
                                  "id": 1960,
                                  "name": "FunctionCall",
                                  "src": "1334:19:6"
                                }
                              ],
                              "id": 1961,
                              "name": "MemberAccess",
                              "src": "1334:36:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1876,
                                "type": "bytes32",
                                "value": "m_beamPipeUserCid"
                              },
                              "id": 1962,
                              "name": "Identifier",
                              "src": "1371:17:6"
                            },
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
                                "type": "bytes memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      },
                                      {
                                        "typeIdentifier": "t_uint64",
                                        "typeString": "uint64"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "member_name": "encodePacked",
                                    "type": "function () pure returns (bytes memory)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -1,
                                        "type": "abi",
                                        "value": "abi"
                                      },
                                      "id": 1963,
                                      "name": "Identifier",
                                      "src": "1390:3:6"
                                    }
                                  ],
                                  "id": 1964,
                                  "name": "MemberAccess",
                                  "src": "1390:16:6"
                                },
                                {
                                  "attributes": {
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1942,
                                    "type": "bytes memory",
                                    "value": "receiverBeamPubkey"
                                  },
                                  "id": 1965,
                                  "name": "Identifier",
                                  "src": "1407:18:6"
                                },
                                {
                                  "attributes": {
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1940,
                                    "type": "uint64",
                                    "value": "value"
                                  },
                                  "id": 1966,
                                  "name": "Identifier",
                                  "src": "1427:5:6"
                                }
                              ],
                              "id": 1967,
                              "name": "FunctionCall",
                              "src": "1390:43:6"
                            }
                          ],
                          "id": 1968,
                          "name": "FunctionCall",
                          "src": "1334:100:6"
                        }
                      ],
                      "id": 1969,
                      "name": "ExpressionStatement",
                      "src": "1334:100:6"
                    }
                  ],
                  "id": 1970,
                  "name": "Block",
                  "src": "1243:198:6"
                }
              ],
              "id": 1971,
              "name": "FunctionDefinition",
              "src": "1158:283:6"
            },
            {
              "attributes": {
                "functionSelector": "158df419",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "setRemote",
                "scope": 1982,
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
                        "name": "remoteContractId",
                        "scope": 1981,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 1972,
                          "name": "ElementaryTypeName",
                          "src": "1466:7:6"
                        }
                      ],
                      "id": 1973,
                      "name": "VariableDeclaration",
                      "src": "1466:24:6"
                    }
                  ],
                  "id": 1974,
                  "name": "ParameterList",
                  "src": "1465:26:6"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1975,
                  "name": "ParameterList",
                  "src": "1511:0:6"
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
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bytes32"
                          },
                          "children": [
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1876,
                                "type": "bytes32",
                                "value": "m_beamPipeUserCid"
                              },
                              "id": 1976,
                              "name": "Identifier",
                              "src": "1521:17:6"
                            },
                            {
                              "attributes": {
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1973,
                                "type": "bytes32",
                                "value": "remoteContractId"
                              },
                              "id": 1977,
                              "name": "Identifier",
                              "src": "1541:16:6"
                            }
                          ],
                          "id": 1978,
                          "name": "Assignment",
                          "src": "1521:36:6"
                        }
                      ],
                      "id": 1979,
                      "name": "ExpressionStatement",
                      "src": "1521:36:6"
                    }
                  ],
                  "id": 1980,
                  "name": "Block",
                  "src": "1511:53:6"
                }
              ],
              "id": 1981,
              "name": "FunctionDefinition",
              "src": "1447:117:6"
            }
          ],
          "id": 1982,
          "name": "ContractDefinition",
          "src": "332:1234:6"
        }
      ],
      "id": 1983,
      "name": "SourceUnit",
      "src": "32:1534:6"
    },
    "compiler": {
      "name": "solc",
      "version": "0.7.2+commit.51b20bc0.Emscripten.clang"
    },
    "networks": {
      "1234": {
        "events": {},
        "links": {},
        "address": "0x1a9777470649a5Cf4B89bC865DFCd123422c76a1",
        "transactionHash": "0x3587779c2e510cee37d4d9f37ee1f488a3ead7b93a5a056d2d107b84902cd489"
      }
    },
    "schemaVersion": "3.4.1",
    "updatedAt": "2021-07-09T10:13:50.063Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  };