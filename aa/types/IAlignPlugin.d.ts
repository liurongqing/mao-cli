declare module 'phaser3-align-plugin' {
  class AlignPlugin { }
}



declare namespace Phaser {
  export interface Scene {
    align: {
      envelop(obj: any, scale: number): void
      vw(obj: any, scale: number): void
      vh(obj: any, scale: number): void
      grid(obj: { rows?: number, cols?: number, color?: any, debug?: boolean }): void
      placeAt(obj: any, row: number, col: number, origin?: number[]): void
      placeAtIndex(obj: any, index: number, origin?: number[]): void

    }
  }
}
