import type { Preview } from '@storybook/react-vite'
import {
    createMemoryHistory,
    createRootRoute,
    createRouter,
    RouterProvider,
} from '@tanstack/react-router'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <RouterProvider
                    router={createRouter({
                        history: createMemoryHistory(),
                        routeTree: createRootRoute({
                            component: Story,
                        }),
                    })}
                />
            )
        },
    ],
}

export default preview
