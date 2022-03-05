var list = [6, 4, 3, 3, 1, 2, 23, 23, 2, 34, 4, 3, 5, 3]
current = new Date();
startTime = current.toLocaleTimeString();

function sort() {
    while (true) {
        // randomise list
        for (i = 0; i < 10; i++) {
            randomNumber = Math.floor(Math.random() * list.length);
            // adds elemnt to the end of the list
            selected = list[randomNumber];
            list.push(selected);
            //delets element
            list.splice(randomNumber, 1)
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
    current = new Date();
    endTime = current.toLocaleTimeString();
    console.log("start time:" + startTime)
    console.log("End time:" + endTime)
    console.log(endTime - startTime)
}
sort()