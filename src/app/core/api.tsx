import Utils from '@core/utils.js';
import React from 'react';
import { toast } from 'react-toastify';

const CID =  '';

export function LoadPublicKey<T = any>(payload, cid: string): Promise<T> {
    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=user,action=get_pk,cid=" + cid, 
        (error, result, full) => {
            resolve(result.pk);
        }, payload ? payload : null);
    });
}

export function LoadIncoming<T = any>(cid): Promise<T> {
    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=manager,action=view_incoming,startFrom=0,cid="+cid, 
        (error, result, full) => {
            resolve(result.incoming);
        });
    });
}

export function SendTo<T = any>(sendData, cid: string): Promise<T> {
    const { amount, address, fee, decimals } = sendData;
    const finalAmount = amount * Math.pow(10, decimals)
    const relayerFee = fee * Math.pow(10, decimals);

    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=user,action=send,cid=" + cid + 
        ",amount=" + finalAmount + 
        ",receiver=" + address + 
        ",relayerFee=" + relayerFee, 
        (error, result, full) => {
            onMakeTx(error, result, full);
            resolve(result);
        });
    });
}

export function Receive<T = any>(tr): Promise<T> {
    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=user,action=receive,cid=" + tr.cid + ",msgId=" + tr.id, 
        (error, result, full) => {
            onMakeTx(error, result, full);
            resolve(result);
        });
    });
}

export function LoadViewParams<T = any>(payload): Promise<T> {
    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=user,action=view_params,cid="+CID, 
        (error, result, full) => {
            resolve(result.params);
        }, payload ? payload : null);
    });
}

export function UserDeposit<T = any>(amount: number, aid: number): Promise<T> {
    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=user,action=deposit,amount="+ amount +",aid=" + aid + ",cid=" + CID, 
        (error, result, full) => {
            onMakeTx(error, result, full);
            resolve(result);
        });
    });
}

export function UserWithdraw<T = any>(amount: number, aid: number): Promise<T> {
    return new Promise((resolve, reject) => {
        Utils.invokeContract("role=user,action=withdraw,amount="+ amount +",aid=" + aid + ",cid=" + CID, 
        (error, result, full) => {
            onMakeTx(error, result, full);
            resolve(result);
        });
    });
}

const onMakeTx = (err, sres, full, params: {id: number, vote: number} = null, toasted: string = null) => {
    if (err) {
        console.log(err, "Failed to generate transaction request")
    }

    Utils.callApi(
        'process_invoke_data', {data: full.result.raw_data}, 
        (error, result, full) => {
            if (params && params.id) {
                const votes = localStorage.getItem('votes');
                let updatedVotes = [];
                if (votes) {
                    updatedVotes = [...(JSON.parse(votes).votes)];
                }

                updatedVotes.push({id: params.id, txid: result.txid, vote: params.vote});
                
                localStorage.setItem('votes', JSON.stringify({'votes': updatedVotes}));
            }

            if (toasted && !error) {
                const CreatedProposalMsg = (text: string) => (
                    <div>
                      Voting <span style={{fontWeight: 'bold'}}>{text}</span> created
                    </div>
                );

                const text = toasted.length > 50 ? toasted.substring(0, 50) + '...' : toasted;
                toast(CreatedProposalMsg(text));
            }
        }
    )
}