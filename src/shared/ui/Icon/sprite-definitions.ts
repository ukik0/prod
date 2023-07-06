export interface SpritesMap {
    'sidebar': 'about'|'home'|'profile';
    'theme': 'moon'|'sun';
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][]; } = {
    sidebar: ['about', 'home', 'profile'], theme: ['moon', 'sun'],
};
