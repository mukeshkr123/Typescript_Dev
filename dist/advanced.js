"use strict";
function kgToLbs(weigth) {
    if (typeof weigth === "number")
        return weigth * 2.2;
    else
        return parseInt(weigth) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=advanced.js.map