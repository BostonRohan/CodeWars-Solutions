var humanYearsCatYearsDogYears = function (humanYears, catYears, dogYears) {
    //Establish cat years and dog years.
    catYears = 15;
    dogYears = 15;
    //Checking to see if the cat/dog is on their second year.
    if (humanYears == 2) {
        catYears += 9
        dogYears += 9
    }
    //If they are older than two use these algorithms to find their respective ages.
    else if (humanYears > 2) {
        catYears += 4 * (humanYears) + 1;
        dogYears += 5 * (humanYears) - 1;
    }
    return [humanYears, catYears, dogYears];
}
humanYearsCatYearsDogYears(1)