function greeting() {
    var names = ['Desire', 'Quinn', 'Jake', 'Nicole', 'Joan of Arc', 'Sunny', 'Yvonne', 'jin', 'jane'];

    for (var i = 0; i < names.length; i++) {
        const good = "J"
        const bye = "j"
        if(names[i].includes(good) || names[i].includes(bye)) {
            console.log("Goodbye " + names[i]);
        } else {
            console.log("Hello " + names[i]);
        }
    }
}

greeting();