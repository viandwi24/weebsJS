import { Vector2 } from '../../../lib/Vector2';
import { Component } from '../../Component';
export declare class Transform extends Component {
    position: Vector2;
    scale: Vector2;
    /**
     * On component creating
     */
    create(): void;
    /**
     * On component start
     */
    start(): void;
    /**
     * On component update
     */
    update(): void;
}
