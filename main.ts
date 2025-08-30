input.onButtonPressed(Button.A, function () {
    basic.showString("" + (randint(1, 12)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (randint(1, 20)))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (randint(1, 6)))
})
basic.showString("" + (input.temperature()))
basic.forever(function () {
	
})
