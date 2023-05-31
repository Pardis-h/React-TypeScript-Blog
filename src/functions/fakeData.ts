import { IBlog } from "../types/blog.types";

export function GetBLogs(): IBlog[] {
    const blogData : IBlog[] = [
        {
          _id: 1,
          title: "Boost your conversion rate",
          href: "#",
          author: "Michael Foster",
          image: "https://dummyimage.com/720x400",
          text:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
          date: "Mar 16, 2020",
          datetime: "2020-03-16",
          category: { title: "Marketing", href: "#" },
          authorDetails: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            avatar: "https://dummyimage.com/720x400",
          },
        },
        {
          _id: 2,
          title: "Boost your conversion rate",
          href: "#",
          image: "https://dummyimage.com/720x400",
          author: "Michael Foster",
          text:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
          date: "Mar 16, 2020",
          datetime: "2020-03-16",
          category: { title: "Marketing", href: "#" },
          authorDetails: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            avatar: "https://dummyimage.com/720x400",
          },
        },
        {
          _id: 3,
          title: "Boost your conversion rate",
          href: "#",
          image: "https://dummyimage.com/720x400",
          author: "Michael Foster",
          text:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
          date: "Mar 16, 2020",
          datetime: "2020-03-16",
          category: { title: "Marketing", href: "#" },
          authorDetails: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            avatar: "https://dummyimage.com/720x400",
          },
        },
      ];
      return blogData
}