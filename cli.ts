import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'
import { config } from "process";
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: false });


// let base58key = prompt("Enter base58 key:\n");
// let walletKey = base58_to_wallet(base58key)
// console.log("Wallet secret key:", walletKey)

let walletKey = prompt("Enter wallet key:\n");
let walletKeyAsArray = new Uint8Array(JSON.parse(walletKey))

let base58key = wallet_to_base58(new Uint8Array(walletKeyAsArray))
console.log("Wallet secret key:", base58key)

function wallet_to_base58(secretKey: Uint8Array): string {
    return bs58.encode(secretKey);
}

function base58_to_wallet(secretKeyToBase58: string): Uint8Array {
    return bs58.decode(secretKeyToBase58);
}

