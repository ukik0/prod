export interface SpritesMap {
    sidebar: 'about' | 'home' | 'profile' | 'articles'
    theme: 'moon' | 'sun'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
    sidebar: ['about', 'home', 'profile', 'articles'],
    theme: ['moon', 'sun'],
};
