function testScope(){
    var localScope = 5;
    if (localScope > 3) {
        var localScope2 = 7;
        let blockScope = 4;
        console.log(localScope2 + blockScope);
    }
    console.log(localScope2);
    console.log(blockScope);
}

testScope();