import { Injectable } from '@angular/core';

@Injectable()
export class ConfettiService {
    confettiTypes = ['rectangle', 'parallelogram', 'lollipop']
    sides = ['left', 'right']
    booleans = [true, false]
    windNodes = [10, 20, 30]
    opacities = [1, 0.9, 0.8, 0.7]
    frinctionAngles = [1, 2, 3]

    animate(containerSelector: string): void {
        const container = document.querySelector(containerSelector)

        if (container) {
            const confettiInterval = setInterval(() => {
                const confettiElement = this.randomElement()

                const side = this.randomFrom(this.sides)
                var horizontalPosition = this.randomFrom([50, 100, 200, 300])
                var verticalPosition = -100
                var rotation = 180
                confettiElement.style.top = `${verticalPosition}px`
                confettiElement.style[side] = `${horizontalPosition}px`

                container.append(confettiElement)

                const gravityInterval = setInterval(() => {
                    if (verticalPosition > container.offsetHeight) {
                        confettiElement.remove()
                        clearInterval(gravityInterval)
                        clearInterval(windInterval)
                        clearInterval(frictionInterval)
                    } else {
                        verticalPosition += 50
                        confettiElement.style.top = `${verticalPosition}px`
                    }
                }, 500)

                const windInterval = setInterval(() => {
                    if (this.randomFrom(this.booleans)) {
                        horizontalPosition += this.randomFrom(this.windNodes)
                    } else {
                        horizontalPosition -= this.randomFrom(this.windNodes)
                    }

                    confettiElement.style[side] = `${horizontalPosition}px`
                }, 1000)

                const frictionInterval = setInterval(() => {
                    if (this.randomFrom(this.booleans)) {
                        rotation += this.randomFrom(this.frinctionAngles)
                    } else {
                        rotation -= this.randomFrom(this.frinctionAngles)
                    }

                    confettiElement.style.transform = `rotate(${rotation}deg)`
                }, 2000)
            }, 1000)
        }
    }
  
    randomElement() {
        const confettiType = this.randomFrom(this.confettiTypes)
        const confettiElement = this.rectangle() // this[confettiType]()

        const randomOpacity = this.randomFrom(this.opacities)
        confettiElement.style.opacity = randomOpacity
        confettiElement.style.filter = `blur(${(1 - randomOpacity) * 10}px)`

        return confettiElement
    }

    rectangle() {
        const rectangle = document.createElement('div')
        rectangle.classList.add('confetti')

        const maximumWidth = 100
        const maximumHeight = 40
        const sizeModifier = Math.random()
        rectangle.style.width = `${Math.floor(maximumWidth * sizeModifier)}px`
        rectangle.style.height = `${Math.floor(maximumHeight * sizeModifier)}px`

        rectangle.style.transform = `rotate(${Math.random() * 360}deg)`

        return rectangle
    }

    moveRandomly(element: any): void {

    }

    randomFrom(array: any[]): any {
        const randomIndex = Math.floor(Math.random() * array.length)

        return array[randomIndex]
    }

    randomSize(maximumSize: number): string {
        return `${maximumSize * Math.random()}px`
    }
  
}
