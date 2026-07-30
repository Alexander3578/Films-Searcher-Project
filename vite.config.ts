import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'


const __dirname = path.dirname(
    fileURLToPath(import.meta.url)
)


export default defineConfig({

    plugins: [
        react(),

        createSvgIconsPlugin({
            iconDirs: [
                path.resolve(__dirname, 'src/assets/icons')
            ],
            symbolId: 'icon-[name]',
        }),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})