# parser
BNF Parser (Work in Progress)


## Grammar
JSON object with properties for each type of BNF
```
var calcGrammar={
  digit:"0|1|2|3|4|5|6|7|8|9",
  number:"<digit><number>|<digit>.<number>|<digit>",
  op:"+|-|*|/",
  expr:"<number>|<expr><op><expr>"
};
```

