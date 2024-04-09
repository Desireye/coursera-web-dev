function greeting() {
    var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', ' Laura', 'Jim',
                 'Desire', 'Quinn', 'Jake', 'Nicole', 'Joan of Arc', 'Sunny', 'Yvonne', 'jin', 'jane'];

    for (var i = 0; i < names.length; i++) {
        const firstLetter = "J"
        const firstLetter2 = "j"
        if(names[i].includes(firstLetter) || names[i].includes(firstLetter2)) {
            console.log("Goodbye " + names[i]);
        } else {
            console.log("Hello " + names[i]);
        }
    }
}

greeting();
