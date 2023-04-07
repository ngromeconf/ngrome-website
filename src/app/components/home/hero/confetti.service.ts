import { Injectable } from '@angular/core';

@Injectable()
export class ConfettiService {
    confettiTypes = ['rectangle', 'parallelogram', 'lollipop']
    sides = ['left', 'right']
    booleans = [true, false]
    windNodes = [10, 20, 30]
    opacities = [1, 0.9, 0.8, 0.7]
    frictionAngles = [1, 2, 3]

    defaultConfiguration: any = {
        parallaxOver: {
            density: 5,
            parallax: 25,
            positions: {
                x: [50, 150, 350]
            },
            positionVariability: {
                x: 50,
                y: 50
            },
        },
        rainOn: {

        },
    }

    parallaxOver(containerSelector: string, options: any = {}) {
        const option = (optionName: string): any => options[optionName] || this.defaultConfiguration.parallaxOver[optionName]
        const container: HTMLElement | null = document.querySelector(containerSelector)

        if (container) {
            const density = option('density')
            const positionVariability = option('positionVariability')
            const elementToAvoid = option('avoid') && document.querySelector(option('avoid'))
            const numberOfConfetti = Math.floor(container.offsetHeight * density / 1000)
            if (numberOfConfetti > 0) {
                if (elementToAvoid) {
                    const areaToAvoid = elementToAvoid.offsetWidth + positionVariability.x * 4
                    const availableSpace = (container.offsetWidth - areaToAvoid) / 2

                    const confetti = Array(numberOfConfetti).fill(null).map((_, index) => {
                        const confettiElement = this.randomElement()
                        confettiElement.classList.add('parallax')
                        const side = this.randomFrom(this.sides)
                        const parallax = Math.random() * option('parallax') / 100

                        let horizontalVariation = Math.random() * positionVariability.x
                        var horizontalPosition = Math.random() * availableSpace
                        horizontalPosition += this.randomFrom([horizontalVariation, -horizontalVariation])
                        horizontalPosition = Math.abs(horizontalPosition)

                        let verticalVariation = Math.random() * positionVariability.y
                        var verticalPosition = (container.offsetHeight / numberOfConfetti) * (index + 1)
                        verticalPosition += this.randomFrom([verticalVariation, -verticalVariation])
                        verticalPosition = Math.abs(verticalPosition)

                        confettiElement.style.top = `${verticalPosition}px`
                        confettiElement.style[side] = `${horizontalPosition}px`

                        container.append(confettiElement)

                        return { element: confettiElement, parallax, verticalPosition }
                    })

                    document.addEventListener('scroll', () => {
                        confetti.forEach((confettiItem, index) => {
                            const verticalPosition = confettiItem.verticalPosition + window.scrollY * confettiItem.parallax
                            confettiItem.element.style.top = `${verticalPosition}px`
                        })
                    })
                }
            } else {
                console.error(`Not enough space to create parallax confetti on ${containerSelector} with density ${density}`)
            }
        }
    }

    rainOn(containerSelector: string, options = {}): void {
        const container: HTMLElement | null = document.querySelector(containerSelector)

        if (container) {
            const confettiInterval = setInterval(() => {
                const confettiElement = this.randomElement()
                confettiElement.classList.add('rain')
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
                        rotation += this.randomFrom(this.frictionAngles)
                    } else {
                        rotation -= this.randomFrom(this.frictionAngles)
                    }

                    confettiElement.style.transform = `rotate(${rotation}deg)`
                }, 2000)
            }, 1000)
        }
    }

    randomFrom(array: any[]): any {
        const randomIndex = Math.floor(Math.random() * array.length)

        return array[randomIndex]
    }

    randomElement() {
        const confettiType = this.randomFrom(this.confettiTypes)
        const confettiElement = this.rectangle() // this[confettiType]()

        const randomOpacity = this.randomFrom(this.opacities)
        confettiElement.style.opacity = randomOpacity
        confettiElement.style.filter = `blur(${(1 - randomOpacity) * 10}px)`

        return confettiElement
    }

    randomSize(maximumSize: number): string {
        return `${maximumSize * Math.random()}px`
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

}
