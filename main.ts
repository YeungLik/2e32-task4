let McDonalds = 0
input.onButtonPressed(Button.A, function () {
    McDonalds = 0
    for (let index = 0; index < 5; index++) {
        led.plot(McDonalds, 0)
        basic.pause(200)
        basic.clearScreen()
        McDonalds += 1
    }
})
