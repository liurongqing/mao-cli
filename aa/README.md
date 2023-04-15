# Installation

```bash
yarn add phaser3-align-plugin
```

# Usage

1. Import the plugin
    ```typescript
    import { AlignPlugin } from 'phaser3-align-plugin'
    const config = {
        plugins: {
            scene: [
                {
                    key: 'AlignPlugin',
                    plugin: AlignPlugin,
                    mapping: 'align'
                }
            ]
        },
    }
    ```

1. Use it
    ```typescript
    // Scale
    this.align.envelop(sprite, 1)
    this.align.vw(sprite, 1)
    this.align.vh(sprite, 1)

    // Open grid
    this.align.grid({rows: 7, cols: 7, debug: true, color: 0xff0000})

    // position
    this.align.placeAt(sprite, row, col)
    this.align.placeAtIndex(sprite, index)
    ```