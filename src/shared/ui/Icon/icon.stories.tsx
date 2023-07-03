import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@/shared/ui/Icon/icon';

const meta: Meta<typeof Icon> = {
    title: 'shared/Icon',
    component: Icon,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        name: 'theme/sun',
    },
    decorators: [
        (Story) => (
            <div style={{ fontSize: '60px', lineHeight: 1 }}>
                <Story />
            </div>
        ),
    ],
};
