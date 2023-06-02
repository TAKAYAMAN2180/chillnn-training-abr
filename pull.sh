#!/bin/sh
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ $branch != 'prd' -a $branch != 'stg' -a $branch != 'dev' ]; then
    echo ""
    echo ""
    echo "\033[43;31m##############################################\033[0m"
    echo "\033[43;31m## FetchするABRのbranch名を選んでください。 ##\033[0m"
    echo "\033[43;31m##############################################\033[0m"
    echo ""

    select VAR in $branch 'dev' exit
    do
        branch=$VAR
        break
    done
fi

if [ $branch != 'exit' ]; then
    echo ""
    echo ""
    echo "\033[43;31m$branch ABR TrainingをFetchします。\033[0m"
    yarn add git+ssh://git@github.com:TAKAYAMAN2180/chillnn-training-abr.git#${branch}
fi

