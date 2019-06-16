function addAndSubstract(first, second, third) {
    let sumRasult = sum(first,second);
    let substractResult = substract(sumRasult, third);

    function sum(first, second) {
        return first + second;
    }

    function substract(sumResult, third) {
        return sumRasult - third;
    }

    console.log(substractResult);
}
addAndSubstract(23,6,10)