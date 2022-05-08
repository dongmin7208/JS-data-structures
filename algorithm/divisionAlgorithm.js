function divide(a, b) {
    // 입력: a 피제수, b 제수
    // 출력 : [ 나머지, 몫]
    let q = 0; //몫을 저장 하는 변수 q에 0을 대입한다
    let r = a; // 나머지를 저장하는 변수 r 에 a를 대입한다
    if (b == 0) {
        // b가 0이라면~~
        return null; //널로 결과를 종료
    }
    while (r >= b) {
        // r >=b 인 동안 다음 처리를 반복해!
        r = r - b; // r에 r-b를 대입
        q = q + 1; //q 에 1을 더한다
    }
    return [q, r]; // 몫 q, 나머지 r 을 결과로 반환하고 종료한다.
}
