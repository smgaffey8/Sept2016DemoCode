Deployment
===========

## Digital Ocean Setup
---
1. Create a Droplet
    - Under `Choose an Image`, click `One-click Apps`
2. Select `MEAN on 14.04`.  This has `NodeJS` and `MongoDB` pre-installed on it.
3. Choose a Droplet Size
    - $5/mo is probably totally fine!
4. Choose a Region, probably NY or SF
5. `Choose a hostname` is where you can name your application so it's easy to find in the Digital Ocean dashboard.
6. `Create` your droplet!

## Getting into your Droplet
---
1. In your terminal, you will use the command `ssh` to get into your droplet.
2. `ssh root@<IP>` - fill in your IP address so it looks like `ssh root@192.168.0.1`
    - It will then prompt you for a password (this was emailed to you by Digital Ocean OR is the one you created after the `First Time` instructions below)
3.  Now you will be in a remote terminal session with your droplet.
#### First Time
1. The droplet will ask you for a password (this was emailed to you by Digital Ocean)
2. After entering the password, it will ask you to create a new one - REMEMBER IT!
3. You will be greeted with the terminal prompt to execute commands

#### Every Time After
1. You will be greeted with the terminal prompt to execute commands

#### Setting up your App
1. After `ssh`ing into your droplet, `cd /opt`
2. Run a `git clone <GITURL>`
3. `cd` into your app folder
4. run `npm install` to install your application's node modules
5. `npm install -g forever` will install a module called `forever` so you can run your app on the droplet.  Nodemon won't cut it!
6. Start your app using forever!
## Forever
---

### Common commands

| Command                       | Description                                     |
|-------------------------------|-------------------------------------------------|
| `forever start <serverfile>`  | Starts your application                         |
| `forever stopall`             | Stops ALL forever processes                     |
| `forever restart <serverfile>`| Restarts your application                       |
| `forever logs <serverfile>`   | Shows your console.logs                         |
| `forever list             `   | Shows your running forever processes            |
