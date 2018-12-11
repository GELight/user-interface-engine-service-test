#!/bin/sh

clear

function Main_Menu
clear
echo ">>> Select an option <<<"
printf "\n"
echo "[1] Update ( Delete, Build and Run )"
echo "[2] Build and Run"
echo "[3] Build"
echo "[4] Run"
echo "[5] Delete"
echo "[0 or ENTER] Exit"
printf "\n"
echo -n "Choose a number: "
read input    
if [ "$input" = "1" ]
then
    ./docker-scripts/delete.sh
    ./docker-scripts/build.sh
    ./docker-scripts/run.sh
elif [ "$input" = "2" ]
then
    ./docker-scripts/build.sh
    ./docker-scripts/run.sh
elif [ "$input" = "3" ]
then
    ./docker-scripts/build.sh
elif [ "$input" = "4" ]
then
    ./docker-scripts/run.sh
elif [ "$input" = "5" ]
then
    ./docker-scripts/delete.sh
elif [ "$input" = "0" ]
then
    exit;
else
    exit;
fi