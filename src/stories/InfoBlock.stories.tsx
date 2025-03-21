import type { Meta, StoryObj } from '@storybook/react';
import { InfoBlock } from './InfoBlock.tsx';

const meta = {

    /* Название компонента и путь, по которому его нужно отобразить на витрине */
    title: 'components/InfoBlock',

    /* Передаём сам компонент */
    component: InfoBlock,

    /* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
    tags: ['autodocs'],

    parameters: {
        /* Устанавливаем тёмный фон для всех историй из этого файла */
        backgrounds: {
            default: 'dark',
        },
    },

    decorators: [
        Story => (
            /* Ограничиваем ширину контейнера */
            <div style={{ maxWidth: '360px' }}>
                <Story />
            </div>
        )
    ]

    /* satisfies помогает точнее определить тип */
} satisfies Meta<typeof InfoBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

/* История с компонентом белого цвета */
export const White: Story = {
    /* Для React-компонентов args === props */
    args: {
        title: 'Привет',
        caption: 'Я — белый InfoBlock',
        color: 'white'
    }
};

/* История с компонентом красного цвета */
export const Red: Story = {
    args: {
        title: 'Привет',
        caption: 'Я — красный InfoBlock',
        color: 'red'
    }
};
