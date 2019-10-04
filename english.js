lowerChar:=a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z
upperChar:=A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
digit:=0|1|2|3|4|5|6|7|8|9
int:=<digit>|<digit><int>
number:=<int>|<int>.<int>



strLowerChar:=<lowerChar>|<lowerChar><strLowerChar>
strUpperChar:=<upperChar>|<upperChar><strUpperChar>
stringChar:=<lowerChar><strChar>|<upperChar><strChar>
properNoun:=<upperChar><strLowerChar>
name:=<properNoun>|<properNoun> <properNoun>|<properNoun> <properNoun> <properNoun>

stringLiteral:='<string>'|"<string>"



initial:=<strUpperChar>

zipCode:=<digit><digit><digit><digit><digit>
city:=<properNoun>
state:=<name>|<initial>




ops:=+|-|*|/|^

equation:=<string>=
