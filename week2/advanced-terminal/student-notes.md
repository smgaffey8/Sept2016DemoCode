

# Advanced Terminal
![alt tag](http://www.refactoru.com/images/graphics/logo.png)


### Console
![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/DEC_VT100_terminal.jpg/220px-DEC_VT100_terminal.jpg)
Single text-based physical console

### Terminal
![alt tag](https://lh5.ggpht.com/WTLIqG6TOfjr0_G3HQ7nk6h6pmpynuyxYfpDlNsDcDdEzf31QU8E5f1OoRMY3TwK41U=h900)
One of many devices used to interact with a computer.

### XTerm or Shell
![alt tag](http://prefetch.net/images/dvt.png)
Text-based terminal emulator.
Unix shell history

BSD (Berkeley Software Distribution)

sh (Bourne shell) ->

csh (command shell) adds aliases, functions, "more like C" ->

tcsh (Tenex csh) adds history, command line completion ->

GNU () open source

bash (Born Again SHell)


### Windows
And the world of computers opened up to the non-Geeks of the world.

## New shell commands
### Echo
Echo prints its arguments to the console

`echo hello`


An argument is information used by the command.

`echo hello`

A flag modifies the behavior of a command and typically starts with a -.

`echo -n hello     # suppresses the trailing newline character`

### Variables
A variable stores a value which can be used as command line arguments.

```
greeting="hello bash"   # local variable
echo greeting 		    # prints 'greeting'
echo $greeting 		    # prints 'hello bash'
touch $greeting		    # creates files called 'hello' and 'bash'
ls
touch '$greeting'       # creates a file called '$greeting'
ls
touch "$greeting" 	    # creates a file called 'hello bash'
ls
```

`unset` clears the value of a variable.

```
unset greeting              # unsets an environment variable`
echo $greeting
greeting="hello bash"       # re-create the greeting variable
```

### Redirect output
We can use > to redirect STDOUT to a file or use >> to append it to a file from a command.

We can also use < to redirect STDIN from a file to a command.

We can use 2> and 2>> to redirect STDERR like STDOUT (STDOUT is technically 1>).

And we can use <<! ... ! redirect STDIN from a "here document" - a string that is treated like a file.

```
echo $greeting > hello-file         # send STDOUT to a file
valediction=”goodbye bash”	        # (valediction is the opposite of a greeting)
echo $valediction > bye-file
cat hello-file > conversation-file  # effectively copies hello-file
cat conversation-file
```


`cat bye-file >> conversation-file  # appends bye-file to conversation-file`

`sort < conversation-file           # sorts the contents of conversation-file`


```
sort <<END              # use a "here document" as input
hello
goodbye
END
```


```
echo > empty-file-echo  # send an empty line to a new file
touch empty-file-touch  # create a new empty file
```


Wildcards
- \* means "everything"
- ? means "any single character"

```
ls -l empty-file-*          # lists all files that begin with empty-file-
cat empty-file-echo         # contains a single newline character
cat empty-file-touch        # really empty
ls -l                       # look at all the files' sizes, in bytes
```


## Less is More

`cat big-file`


`more` buffers the output of a file.
Use `d` to move forward and `q` to quit.
`more` scrolls forward through the file.

`more big-file`


`less` buffers the output of a file, but you can move forward, backward and even side-to-side.
Use b  to move back, or use arrow keys to move up, down, left and right.
`less` is the same as `more` but with more!  

`less big-file`


` ls -l big-dir`

## Pipe

Pipes (`|`) send the STDOUT from one command to the STDIN of another command.

```
ls -l big-dir | less
```

## Permissions

`cat house-of-straw`


```
echo wolf > house-of-straw
cat house-of-straw
cat house-of-sticks
echo wolf > house-of-sticks
```


`ls -al house-of-*`

`drwxrwxr-x 2  root  root  4096  Aug 15  2016  mail`

- first letter is file type: d (directory), - (file) or l (link)
- letter triads are read, write, execute (rwx)
- triads are owner/user, group, other (ugo)
- next comes the file owner and group, size in bytes, last modified date then filename


```
touch house-of-straw
ls -l house-of-straw
```

### chmod (change mode)
`chmod` changes the mode of a file.
- Use `chmod` to add or remove read/write/execute (rwx) permissions to user/group/other/all (ugoa)
- This is how you control access to and execution of a file.
- chmod {ugoa}{+/-}{rwx} {files}
- chmod XXX {files}
    - rwx (4+2+1) octal representation of triad (ie. 764 would be user:rwx, group:rw, other:read)

- In Windows and MacOS, the file suffix is used to determine if file is executable. In shell, anything can be executable.



`ls -l house-of-sticks`


```bash
chmod u+w house-of-sticks    # add write permissions to the file
ls -l house-of-sticks       # check the new permissions
echo wolf > house-of-sticks # overwrite the file
```


`cat house-of-bricks`


`ls -l house-of-bricks`


```bash
chmod u+rw house-of-bricks  # add read/write permissions to the file
ls -l house-of-bricks       # check the permissions
cat house-of-bricks
```



```bash
chmod -x ..
cd ..
```

A directory's execute (x) permission determines whether a user can enter or list that directory's contents.


` chmod +x ..`

## SUDO

```
ls -l not-my-file           # root is the owner
chmod g+rwx not-my-file     # this fails because we do not own this file
```

If you have "super user" permissions, you can run `sudo` - "super user do".
The super user is named `root` and is the most powerful user in any system.
This gives you permission to modify ANY file.
Typically, when you use the `sudo` command it will prompt you to give the
`root` or administrator (Windows/MacOS) password.

```
sudo chmod g+rwx not-my-file
```

## CHOWN
`chown` will change the owner of a file.  
Likewise, `chgrp` will change the group ownership of a file.

```
chown ubuntu not-my-file        # take ownership of a file - fails
sudo chown ubuntu not-my-file   # but you can do it using sudo
chmod 666 not-my-file           # and once you own the file, you can modify ownership and permissions without sudo
chgrp ubuntu not-my-file
```

WARNING: `sudo` should be used cautiously.  You can really mess things up by playing God!



```
cat hi
hi          # this doesn't execute
```


By default, files are created with -rw-r--r-- permissions (644)
Directories are created with drwxr-xr-x permissions (755)

```
ls -l hi        # the execute (x) permission is not there for user
chmod u+x hi    # add execute permissions for the user (u)
ls -l hi        # now it is executable, but it's not in the PATH
```





`echo $USER         # print the USER variable defined in the environment`



`env` shows what variables are defined in the environment

`env                         # show environment variables`

PATH is an environment variable that specifies where we will look
for executable files that can be run from anywhere.


```
echo $PATH      # show the PATH
ls /bin         # look at the commands in one directory in the PATH
```


USER is the currently active user's name (ie. ubuntu).

HOME is the user's home directory (ie. ~).

PS1 is the user's command line prompt.  
You can customize your prompt using many different options.
\d - current date, \t - current time, \u - current user, \w - current working directory


`export PS1="\u:\w> "       # sets the command line prompt to be {USER}: {DIR}`


Environment variables like $PATH and $USER have global scope.

You must `export` a local variable in order to make it an environment variable.

```
export greeting=”howdy”     # create an environment variable
```

```
localGreeting="howdy"               # create a local variable
echo localGreeting                  # this is available in this terminal
export globalGreeting="hello"       # create an environment variable
echo globalGreeting                 # this is available in this terminal
```

Environment variables can be used in any child process of a shell.

## Shell
The `sh` command creates a new shell which inherits the current environment.
The `quit` command will exit out of the child shell.

```
sh                  # create a new shell terminal
echo $myLocalVar    # my local variable is not available in the new shell
echo $myGLobalVar   # my environment/global variable is available in a new shell
exit                # exit out of the shell
```

Don't exit out of your original shell or it will close the terminal!


```
echo $greeting
export greeting
```


`./hi       # this works, but it's awkward to have to prepend the directory in order to run it`



```
export PATH=$PATH;.         # add your current directory (.) to the PATH
hi                          # success!
```

## GREP
`grep` (Global Regular Expression/Print) is a command to filter its input based on a regular expression.

`grep secret *          # This will show all lines in all files in the current directory (*) containing the word "secret"`


` grep -r secret *       # this will show all lines in all files in all subdirectories (recursively) containing the word secret`


`env | grep USER    # take the output of env and only print lines containing the string "USER"`

## Alias
`alias` is a way of creating a shorthand command.
It is used to abbreviate a command or command with common arguements.

```
alias ws=’cd $HOME/workspace’
ws      # run the newly defined alias and cd to the workspace
```


```
alias ws='cd ~/workspace'       # ws will change directory to my workspace
alias sl='ls'                   # I always mistype 'ls' as 'sl' so this works
alias subl='open -a "/Applications/Sublime Text.app' # open the sublime text editor
```

Aliases are only interpretted as commands - the first thing on the command line.

```
echo ws     # ws is not interpretted as an alias
ws          # ws is interpretted as an alias
cd -        # this is a fancy way of returning to the most previous directory we were in
```

Aliases can overwrite regular commands.

```
alias cat='ls'
cat big-file
```

`unalias` will remove the definition of the given alias.

```
unalias cat
cat big-file
```


`alias gitdown='cd $HOME/workspace; git pull'   # alias to do a git pull`


`alias gitup='cd $HOME/workspace; git add .; git commit -m \“quick commit\”;git push origin master;'  # alias to do a quick git push`


`alias gitup=”cd $HOME/workspace; git add .; git commit -m \“$*\”;git push origin master;”  # this doesn't work! `


`alias gitup=”cd $HOME/workspace; git add .; git commit -m \“$*\”;git push origin master;”`

when run as `g this is my comment` becomes

`cd /home/users/ubuntu/workspace; git add .; git commit -m ""; git push origin master this is my comment`

Alias can’t take arguments.  It just expands the initial command on the command line.
We need a something that can handle arguments.

## Function
A function can take arguments!

```
function gitup {        # function to do a git push with a message
    cd $HOME/workspace
    git add .
    git commit -m “$*”
    git push origin master
    cd -
}

gitup this is my comment     # adds, commits and pushes with a runtime comment of 'this is my comment'
```


```
function backup {       # simple backup command
    cp $* ~/.backup
    rm $*
    echo "backed up $*"
}

function trash {        # simple recycle bin command
    cp $* ~/.trash
    rm $*
    echo "backed up $*"
}
```


## .bashrc
.bashrc is a file that is run every time you start a new shell.  It initializes the state of the shell.

```
cd
less .bashrc
```

`.bashrc` can invoke other files which are then also processed at the same time.
This is done to organize what could otherwise become a very long, complicated script.

`.bash_profile` is executed when a user first logs in.
`.bashrc` is executed anytime a new shell is created.
`.bash_logout` is executed anytime a user logs out.

Note that in Cloud9, every workspace is an isolated environment so the .bashrc created
in one workspace will not be visible to any other workspaces.
This is one reason why some developers will choose to use a native terminal shell and
editor.

## Find


Find helps us locate files and directories with specific characteristics that we are looking for.

`find .                     # shows all files in the current directory and below`


`find . -name "*hidden*"    # finds all files named *hidden* in the current directory and below`


`find . -exec grep secret {} \; # greps for the word 'secret' in all files in the current directory and below`


`find . -type f -exec grep secret \; -exec echo {} \; 2>>/dev/null  # greps for 'secret' and prints the name of the file containing it on the next line`

## PS - Process Status
The `ps` command shows you the status of running processes.
By default it just shows the processes which you have started.

`ps             # show the processes that I started`

but you can use the -A flag to show ALL processes which are currently running.

`ps -A          # show all the processes currently running`

Note that Cloud9 is a virtual environment, so it only shows you your small world.
If you run the same command on a native terminal, you will see far more processes.


```
sleep 1000&        # sleep for 1000 seconds in the background
ps -A           
ps -A | grep sleep
```

## KILL


`kill` will kill or stop a running process.

`kill ####      # kill process id ####


```
sudo sleep 1000&        # run sleep as root
ps -A | grep sleep      # find the process id
kill ####               # try to kill the process - but it fails
```


Processes also have permissions and can only be killed by the user that started it or a higher level user.

```
sudo kill XXXX          # this will kill the process, regardless of who started it
```

`killAll` is a special flavor of `kill` which will kill every process with the specified name.

```
sleep 1000&
ps -A | grep sleep
killAll sleep
ps -A | grep sleep
```


`sudo killAll mongod`

## Editors
In addition to `nano`, the bash shell has many editors.
`nano`, `ex`, `vi`, `vim`, `emacs`

And don't forget
`man` or `cmd -help` and good old Google!


```
exit
cp terminal.log ~/workspace/..../advanced-terminal
```
