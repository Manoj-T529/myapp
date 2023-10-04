// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserDataStorage {
    address public owner;

    struct User {
        string data;
    }

    mapping(address => User) public users;

    constructor() {
        owner = msg.sender;
    }

    function login(string memory _userData) public {
        require(msg.sender != address(0), "Invalid sender address");
        require(bytes(_userData).length > 0, "User data cannot be empty");
        users[msg.sender].data = _userData;
    }
}
