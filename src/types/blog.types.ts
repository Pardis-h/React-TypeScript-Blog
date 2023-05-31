export interface IBlog {
    _id: number,
    title: string,
    image: string,
    text: string,
    author: string,
    href?: string,
    date?: string,
    datetime?: string,
    category?: { title?: string, href?: string },
    authorDetails?: {
      name?: string,
      role?: string,
      href?: string,
      avatar?: string,
    },
}
export interface IPropsBlogs {
    blogs: IBlog[],
    blog: IBlog,
}

export type PropsBlogs = Omit<IPropsBlogs , "blog">
export type PropsBlog = Omit<IPropsBlogs , "blogs">