import './GlobalPreLoader.css'

export default class GlobalPreLoader {
    private static readonly _ID: string = 'pre-loader'
    private static readonly _HIDE_CLASS: string = 'GlobalPreLoader__hide'
    private static readonly _HIDE_ANIMATION_DURATION: number = 150
    private static _hidden: boolean = false

    public static hide() {
        if (GlobalPreLoader._hidden)
            return

        GlobalPreLoader._hidden = true
        const element: HTMLElement = document.getElementById(GlobalPreLoader._ID)
        element.classList.add(GlobalPreLoader._HIDE_CLASS)
        setTimeout(() => {
            element.style.display = 'none'
        }, GlobalPreLoader._HIDE_ANIMATION_DURATION)
    }
}