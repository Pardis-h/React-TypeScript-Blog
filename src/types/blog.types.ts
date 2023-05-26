export interface IBlog {
    id: number,
    title: string,
    href: string,
    image: string,
    description: string,
    date: string,
    datetime: string,
    category: { title: string, href: string },
    author: {
      name: string,
      role: string,
      href: string,
      imageUrl: string,
    },
}
export interface IPropsBlogs {
    blogs: IBlog[],
    blog: IBlog,
}

export type PropsBlogs = Omit<IPropsBlogs , "blog">
export type PropsBlog = Omit<IPropsBlogs , "blogs">