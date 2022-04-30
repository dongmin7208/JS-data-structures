/*
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their oreder changing.

    isSubsequenceという関数を書き込みます。この関数は、2つの文字列を取り込み、最初の文字列の文字が2番目の文字列の文字の後に続くかどうかを確認します。 つまり、最初の文字列の文字が順序を変更せずに2番目の文字列のどこかに表示されているかどうかをチェックする必要があります。

    is Subsequence라고 하는 함수를 쓰는 겁니다.이 함수는 두 개의 문자열을 가져와서 첫 번째 문자열의 문자가 두 번째 문자열의 문자 뒤에 이어지는지를 확인합니다. 즉,첫번째문자열의문자가순서변경하지않고두번째문자열의어딘가에표시되어있는지를체크해야합니다.

*/

    function isSubsequence(){

    }
    isSubsequence('hello', 'hello world')// true
    isSubsequence('sing', 'sting')// true
    isSubsequence('abc', 'abracadabra')// true
    isSubsequence('abc', 'acb')// false (order matters)