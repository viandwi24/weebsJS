export class GameCanvas {
    ctx: CanvasRenderingContext2D|null

    constructor(public canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d')
        this.bindEvents()
    }

    private bindEvents() {
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
    }

    private onWindowResize() {
        const parentDOM = this.canvas.parentElement
        if (parentDOM) {
            this.canvas.width = parentDOM.clientWidth
            this.canvas.height = parentDOM.clientHeight
        }
    }

    destroy() {
        window.removeEventListener('resize', this.onWindowResize)
    }
}