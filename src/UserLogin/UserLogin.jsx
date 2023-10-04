import React, { useState } from 'react';
import Web3 from 'web3';
import UserDataStorageABI from '../UserDataStorage.json';

const UserLogin = () => {
  const [account, setAccount] = useState('');
  const [userData, setUserData] = useState('');
  const [contract, setContract] = useState(null);

  const handleLogin = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);

        // Request account access if needed
        await window.ethereum.enable();

        // Get the current account
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        // Load and set your smart contract ABI and address here
        const contractAbi = UserDataStorageABI;
        const contractAddress = "0x8338409E9b3AFF2407f40f49208BC6a8714787d8";
        const contractInstance = new web3Instance.eth.Contract(contractAbi, contractAddress);
        setContract(contractInstance);

        // Assuming your contract has a login function that takes user data as a parameter
        if (contractInstance && userData) {
          await contractInstance.methods.login(userData).send({ from: account });

          // Check if the login was successful by reading the user's login status
          const userLoginStatus = await contractInstance.methods.isUserLoggedIn(account).call();

          if (userLoginStatus) {
            console.log('Login successful');
            // You can now redirect the user or perform other actions for a successful login.
          } else {
            console.log('Login failed');
            // Handle the case where the login was not successful.
          }
        } else {
          console.error('Contract not loaded or user data is missing');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      console.error('MetaMask not found');
    }
  };

  return (
    <div>
      <h1>MetaMask Login</h1>
      <p>Connected Account: {account}</p>
      <input
        type="text"
        placeholder="Enter User Data"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
