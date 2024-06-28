let a = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 12)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    let b = 0
    basic.showNumber(a * b)
})
