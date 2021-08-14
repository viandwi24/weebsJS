import { IGame2DContext } from "../../../index";
import { System } from "../../System";
export declare class SimpleFpsUI extends System {
    lastSecond: number;
    fpsInSecond: number;
    execute(context: IGame2DContext): void;
}
