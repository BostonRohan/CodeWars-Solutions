const quarterOf = (month) => {
    //Solution using ternary operators.
    var ans = 4;
    month <= 3 ? ans = 1 : undefined
    month >= 4 && month < 7 ? ans = 2 : undefined
    month >= 7 && month < 10 ? ans = 3 : undefined
    return ans;
}
quarterOf(11)


//Solution using 'if statements'.
const quarterOf = (month) => {
    //Establishing variable.
    var answer;
    //If the month is between 1-3 it is in the first quarter.
    if (month <= 3) {
        answer = 1;
    }
    //If the month is between 4-6, it is in the second quarter.
    else if (month >= 4 && month < 7) {
        answer = 2;
    }
    //If the month is between 8-10, it is in the thrid quarter.
    else if (month >= 7 && month < 10) {
        answer = 3;
    }
    //If it isn't in any of the above quarters then it has to be in quarter 4.
    else {
        answer = 4;
    }
    return answer;
}
quarterOf(11)