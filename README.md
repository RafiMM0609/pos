# how to upgrade node js

1. clone repo  from github
```
git clone https://github.com/jasongin/nvs.git ~/.nvs
```
2. add this script to bashrc
```
export NVS_HOME="$HOME/.nvs"
[ -s "$NVS_HOME/nvs.sh" ] && . "$NVS_HOME/nvs.sh"

```
3. install spesific version
```
nvs add lts
```


