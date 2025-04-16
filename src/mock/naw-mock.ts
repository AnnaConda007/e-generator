export interface INavItemsMock {
    title: string,
    icon: string,
    notifications: number,
    link: string

}

export const navItemsMock: INavItemsMock[] = [
    {
        title: "лента",
        icon: "/assets/icons/icon.svg",
        notifications: 0,
        link: "/"
    },

    {
        title: "каналы",
        icon: "/assets/icons/compass.svg",
        notifications: 0,
        link: "/"
    },

    {
        title: "видео",
        icon: "/assets/icons/video.svg",
        notifications: 0,
        link: "/"
    },

    {
        title: "сохраненное",
        icon: "/assets/icons/bookmark.svg",
        notifications: 0,
        link: "/"
    },

    {
        title: "уведомления",
        icon: "/assets/icons/bell.svg",
        notifications: 1,
        link: "/"
    },

    {
        title: "чаты",
        icon: "/assets/icons/chat.svg",
        notifications: 1,
        link: "/"
    },
]