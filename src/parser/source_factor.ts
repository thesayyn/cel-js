import { Token } from "antlr4";

export class SourceLocation {

    constructor(column: number = -1, offset: number = -1, offset_end: number = -1) {}

    static noLocation() {
        return new SourceLocation(-1, -1, -1, [])
    }
}

export class SourceFactory {
    #nextId: number = 0;
    #locations: Array<>
    id(token: Token): number {
        const nextId = this.#nextId;

        return 0;
    }
}