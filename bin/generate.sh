DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

alias antlr4='java -jar ${DIR}/antlr-4.9-complete.jar'

antlr4 -Dlanguage=JavaScript \
    -o ${DIR}/../src/parser/gen \
    -visitor ${DIR}/../src/parser/gen/CEL.g4