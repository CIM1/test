import { useMetamask, useAddress, useEditionDrop } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const editionDrop = useEditionDrop(
    "0x6Ee4081b3e8A80AA00327733558d49Cf6c9fE3C6"
  );
  
  const tokenId = 0;
  const quantity = 1;

  const claimNFT = async () => {
    try {
      await editionDrop?.claimTo(address, tokenId, quantity);
      console.log("🎉 NFT claimed successfully!");
    } catch (err) {
      console.log("💩 Error claiming NFT: ", err);
    }
  };

  return (
    <div className={styles.container}>
      {address ? (
        <button onClick={claimNFT}>Claim NFT</button>
      ) : (
        <button onClick={connectWithMetamask}>Sign in with metamask</button>
      )}
    </div>
  );
}
