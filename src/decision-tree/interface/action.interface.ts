export interface Action {
    execute(): void;
    toJson(): Record<string, any>;
}
