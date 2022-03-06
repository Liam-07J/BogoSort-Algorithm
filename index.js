var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
startTime = new Date();

function sort() {
    while (true) {
        // randomise list
        for (i = 0; i < 10; i++) {
            randomNumber = Math.floor(Math.random() * list.length);
            randomNumberTwo = Math.floor(Math.random() * list.length);
            temp = list[randomNumber];
            list[randomNumber] = list[randomNumberTwo];
            list[randomNumberTwo] = temp;

        }
        console.log(list);

        const isSorted = list => list.every((v, i, a) => !i || a[i - 1] <= v);
        console.log(isSorted(list));

        if (isSorted(list)) {
            console.log("Sort Complete!!!");
            break;
        } else {
            console.log("Not sorted!");
        }
    }
    // time
    endTime = new Date();
    console.log("Start time:" + startTime)
    console.log("End time:" + endTime)
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
    console.log(seconds / 60 + " mins")


}
sort()