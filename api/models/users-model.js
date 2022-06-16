const fetch = require("node-fetch");
var express = require('express');
const fs = require('fs');
const path = require("path");
const { URL, URLSearchParams } = require('url');

class User {
    constructor(firstName, lastName, email, password, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

class UserModel {
    static USER_ID = 0;

    constructor() {
        this.users = new Map();
    }

    addUser(user) {
        user.id = UserModel.USER_ID++;
        this.user.set(user.id, user);
    }

    getBars() {
        return Array.from(this.users);
    }

    register(obj){  
        const editJsonFile = require("edit-json-file");

        // If the file doesn't exist, the content will be an empty object by default.
        let file = editJsonFile(`./files/db/users.json`);
        
        file.append("users", {firstName: obj.firstName, lastName: obj.lastName, email: obj.email, password: obj.password});
        
        //console.log(file.get());
        
        //if you want to remove the last element from an array use pop
        //file.pop("classes")
        
        // Save the data to the disk
        file.save();
        
        // Reload it from the disk
        /*file = editJsonFile(`./files/db/users.json`, {
            autosave: true
        });*/
        
        // Get one field
        //console.log(file.get("name.first"));
        // => Johnny
        
        // This will save it to disk
        /*file.set("a.new.field.as.object", {
            hello: "world"
        });*/
        
        // Output the whole thing
        //console.log(file.toObject());
        // { planet: 'Earth',
        //   name: { first: 'Johnny', last: 'B.' },
        //   is_student: false,
        //   a: { new: { field: [Object] } } }
    }
}

const model = new UserModel();

module.exports = model;