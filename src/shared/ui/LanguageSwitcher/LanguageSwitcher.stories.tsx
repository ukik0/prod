import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher/LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'shared/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Light: Story = { args: {} };

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
