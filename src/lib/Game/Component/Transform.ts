import { Vector2 } from "../Entity/Vector2"
import { Component } from "./Component"

export class Transform extends Component {
    position: Vector2

    constructor() {
        super('Transform')
        this.position = new Vector2(0, 0)
    }
}