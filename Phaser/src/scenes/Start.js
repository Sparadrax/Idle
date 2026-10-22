/**
 * Idle prototype scene. Load sprite sheets, play looping ship/logo animations, and scroll the background every update.
 */
export class Start extends Phaser.Scene {

    /**
     * Initialize this object or scene and its starting state.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns Initialized instance; constructors do not explicitly return a value.
     */
    constructor() {
        super('Start');
    }

    /**
     * Queue the scene assets for Phaser to load before creation.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    preload() {
        this.load.image('background', 'assets/space.png');
        this.load.spritesheet('logo', 'assets/FetchWater-Sheet.png', { frameWidth: 254, frameHeight: 64 });

        //  The ship sprite is CC0 from https://ansimuz.itch.io - check out his other work!
        this.load.spritesheet('ship', 'assets/spaceship.png', { frameWidth: 176, frameHeight: 96 });
    }

    /**
     * Create the scene objects after their assets have loaded.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    create() {
        this.background = this.add.tileSprite(640, 360, 1280, 720, 'background');

        const logo = this.add.sprite(640, 200, 'logo');

        const ship = this.add.sprite(640, 360, 'ship');

        ship.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: -1
        });

        ship.play('fly');
        logo.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('logo', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });
        logo.play('fly');
        // this.tweens.add({
        //     targets: logo,
        //     y: 400,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true
        // });
    }

    /**
     * Apply the scene update for the current frame.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    update() {
        this.background.tilePositionX += 2;
    }
    
}
