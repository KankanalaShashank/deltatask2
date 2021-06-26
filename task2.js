const canvas = document.getElementById("mycanvas")
const cvx = canvas.getContext("2d")
cvx.width = innerWidth

console.log(cvx)
cvx.fillStyle = "red"
cvx.fillRect(0, 0, cvx.width, 50)
cvx.fillStyle = "pink"
var y = 80
cvx.fillRect(130, 80, 30, 30)


addEventListener("click", function(event) {
    cvx.clearRect(130, y, 30, 30)
    cvx.fillStyle = "pink"
    if (y == 80) {
        cvx.fillRect(130, 50, 30, 30)
        window.y = 50
    } else if (y == 50) {
        cvx.fillRect(130, 80, 30, 30)
        window.y = 80
    }
    console.log(y)
})

function GetCordinates() {
    this.x1co = Math.random() * 40
    this.y1co = Math.random() * innerWidth
    this.x2co = Math.random() * 450
    if ((Math.abs(this.x1co - this.x2co)) < 30) {
        this.x2co += 100
    }
}


var dx = 4
var dy = 4
var dx2 = 4

var removepart = new GetCordinates()
console.log(removepart)
window.voidx1 = (removepart.x1co)
window.voidx2 = (removepart.x2co)

function animate1() {
    requestAnimationFrame(animate1)
    cvx.fillStyle = "red"
    cvx.fillRect(voidx1, 40, 10, 10)
    if (voidx1 + 10 > innerWidth || voidx1 < 0) {
        dx = -dx
    }
    voidx1 += dx
    cvx.clearRect(voidx1, 40, 10, 10)
    if ((Math.round(voidx1) == 130 || Math.round(voidx1) == 160) && y == 50) {
        console.log("dwendk")
        alert("game completed")
    }
}

animate1()

function animate2() {
    requestAnimationFrame(animate2)
    cvx.fillStyle = "blue"
    cvx.fillRect(voidx2, 110, 10, 10)
    if (voidx2 + 10 > innerWidth || voidx2 < 0) {
        dx2 = -dx2
    }
    voidx2 += dx2
    cvx.clearRect(voidx2, 110, 10, 10)
    if ((Math.round(voidx2) == 130 || Math.round(voidx2) == 160) && y == 80) {
        console.log("mathfbsdf")
        alert("coom")
    }

}

animate2()





cvx.fillStyle = "blue"
cvx.fillRect(0, 110, cvx.width, 50)