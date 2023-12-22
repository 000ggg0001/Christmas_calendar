const position1 = { x: 0, y: 0 }
const position2 = { x: 0, y: 0 }
const position3 = { x: 0, y: 0 }

interact('.part1').draggable({
  listeners: {
    move(event) {
      position1.x += event.dx
      position1.y += event.dy

      event.target.style.transform =
        `translate(${position1.x}px, ${position1.y}px)`
    },
  }
})

interact('.part2').draggable({
  listeners: {
    move(event) {
      position2.x += event.dx
      position2.y += event.dy

      event.target.style.transform =
        `translate(${position2.x}px, ${position2.y}px)`
    },
  }
})

interact('.part3').draggable({
  listeners: {
    move(event) {
      position3.x += event.dx
      position3.y += event.dy

      event.target.style.transform =
        `translate(${position3.x}px, ${position3.y}px)`
    },
  }
})
