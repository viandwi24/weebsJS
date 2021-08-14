import { IGame2DContext } from "../../../index";
import { System } from "../../System";
export declare class ShapeRender extends System {
    execute(context: IGame2DContext): void;
    drawShapeRectangle(context: IGame2DContext): void;
    drawShapeCircle(context: IGame2DContext): void;
}
