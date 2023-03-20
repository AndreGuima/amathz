#!/bin/bash

# se a condição for verdadeira é porque $1 á vazio
if [ "X$1" == "X" ]
then
   
	 echo "informe a mensagem para o commit"
   exit 1

fi

git add .
git commit -m $1
git push origin main

echo "commit e push realizado com sucesso."
exit 0
