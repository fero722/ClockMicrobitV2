input.onButtonPressed(Button.A, function () {
    chod = 0
})
input.onButtonPressed(Button.B, function () {
    chod = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    idk = 0
})
let min = 0
let svetlo = 0
let idk = 0
let chod = 0
chod = 1
idk = 0
let Display = TM1637.create(
DigitalPin.P1,
DigitalPin.P0,
7,
4
)
Display.on()
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        svetlo = 1
    } else if (input.lightLevel() > 100) {
        svetlo = 7
    }
    if (idk % 2 == 0) {
        Display.showDP(1, true)
    } else {
        Display.showDP(1, false)
    }
    if (chod == 1) {
        idk += 1
        basic.pause(1000)
        if (idk == 60) {
            min += 1
            idk = 0
        }
        Display.showbit(min / 10, 0)
        Display.showbit(min % 10, 1)
        Display.showbit(idk / 10, 2)
        Display.showbit(idk % 10, 3)
    }
})
