export class World {
    public message = "A whole new world";
    public sayMessage(): void {
        console.log(this.message);
    }
}

const world = new World();
world.sayMessage();
