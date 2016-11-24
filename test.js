function getIt() { return this.x; }

var obj1 = {
    get: getIt(),
    x: 1
}

obj1.get
