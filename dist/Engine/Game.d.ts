export interface IGameOptions {
    resolution: {
        width: number;
        height: number;
    };
}
export declare class Game {
    protected gameOptions: IGameOptions;
    constructor(gameOptions: IGameOptions);
}
