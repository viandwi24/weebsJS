import { IGame2DContext } from "../../../index";
import { Entity } from "../../Entity";
import { System } from "../../System";

export class ShapeRender extends System {
    execute(context: IGame2DContext) {
        this.drawShapeRectangle(context);
        this.drawShapeCircle(context);
    }

    drawShapeRectangle(context: IGame2DContext) {
        const { canvas, scene } = context

        if (scene && scene.entityManager) {
            const ctx = canvas.getContext("2d")
            const allEntityHasShape: Array<Entity> = scene.entityManager.getEntityHasComponent(["Rectangle", "Transform"])
            for (let i = 0; i < allEntityHasShape.length; i++) {
                const entity: Entity = allEntityHasShape[i]
                const rectangle = entity.getComponent("Rectangle")?.getState()
                const transform = entity.getComponent("Transform")?.getState()

                if (rectangle && transform && ctx) {
                    const scale = transform.scale
                    const position = transform.position
                    ctx.beginPath();
                    ctx.fillStyle = rectangle.fillColor
                    ctx.strokeStyle = rectangle.strokeColor
                    ctx.rect(position.x, position.y, scale.x, scale.y);
                    ctx.fill();
                    ctx.stroke();
                }
            }
        }
    }

    drawShapeCircle(context: IGame2DContext) {
        const { canvas, scene } = context

        const ctx = canvas.getContext("2d");
        const allEntityHasShape = scene.entityManager.getEntityHasComponent([
            "Circle",
            "Transform",
        ]);
        for (let i = 0; i < allEntityHasShape.length; i++) {
            const entity = allEntityHasShape[i]
            const circle = entity.getComponent("Circle")?.getState()
            const transform = entity.getComponent("Transform")?.getState()

            if (circle && transform && ctx) {
                const scale = transform.scale
                const position = transform.position
                ctx.beginPath();
                ctx.fillStyle = circle.fillColor
                ctx.strokeStyle = circle.strokeColor
                ctx.ellipse(position.x, position.y, scale.x, scale.y, 0, 0, 2 * Math.PI)
                ctx.fill();
                ctx.stroke();
            }
        }
    }
}