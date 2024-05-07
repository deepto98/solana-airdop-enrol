import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'
// import * as prompt from 'prompt-sync'
//Generate a new keypair
let kp = Keypair.generate()
console.log("Wallet public key:", kp.publicKey.toBase58())
console.log("Wallet secret key:", kp.secretKey)

let secretKeyToBase58 = bs58.encode(kp.secretKey)
console.log("Wallet secret key as base58:", secretKeyToBase58)

let base58SecretKeyToByteArray = bs58.decode(secretKeyToBase58)
console.log("Wallet secret key decoded from base 58 back to byte array:", base58SecretKeyToByteArray)
console.log("\n\n")

function wallet_to_base58(secretKey: Uint8Array): string {
    return bs58.encode(secretKey);
}

function base58_to_wallet(secretKeyToBase58: string): Uint8Array {
    return bs58.decode(secretKeyToBase58);
}

