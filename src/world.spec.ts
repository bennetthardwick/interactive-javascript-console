import { World } from ".";

describe("the whole world", () => {
    it("should be a new one", () => {
        const world = new World();
        expect(world.message).toBe("A whole new world");
    });
});
