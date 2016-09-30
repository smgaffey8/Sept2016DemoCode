export NODE_ENV="development"
export ALIASES="$HOME/.bash_aliases"
export EDITOR="nano"

# ALIASES

# unix
alias c="clear"
alias l="ls -gphlsX"
alias la="l -A"
alias lt="l -t"
alias lg="l | grep "
alias ll="la"
alias grep="grep --color=auto"
alias untar="tar xvf "
alias untarbz="tar xvjf "
alias lpath="env | grep PATH"

# dotfiles
alias salias="c && source $ALIASES"
alias calias="cat $ALIASES"
alias ealias="$EDITOR $ALIASES"
alias eprofile="$EDITOR $HOME/.profile"
alias ebashrc="$EDITOR $HOME/.bashrc"

# git
alias commit="git rev-parse HEAD"
# alias g="gaa; gcm 'QuickCommit'; gpl; gpo"
alias ga="git add"
alias gaa="git add --all :/"
alias gb="git branch"
alias gbls="git branch -a"
alias gcm="git commit -m"
alias gcam="git commit -am"
alias gco="git checkout"
alias gp="git push"
alias gpl="git pull"
alias gpo="git push origin"
alias gpom="git push origin master"
alias grmls="git remote -v"
alias gs="git status"

function g {
    git add -A; git commit -am "${1}"; git push origin; git status;
}
function gclone {
    git clone git@github.com:"${1}".git
}
