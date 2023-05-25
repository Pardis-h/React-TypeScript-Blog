import BlogCards from "./components/BlogCards";
import Navbar from "./components/Navbar";
import BlogTables from "./components/BlogTables";
function App() {
  const blogs = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      image: "https://dummyimage.com/720x400",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: "https://dummyimage.com/720x400",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "#",
      image: "https://dummyimage.com/720x400",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: "https://dummyimage.com/720x400",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: "#",
      image: "https://dummyimage.com/720x400",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: "https://dummyimage.com/720x400",
      },
    },
    {
      id: 4,
      title: "Boost your conversion rate",
      href: "#",
      image: "https://dummyimage.com/720x400",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: "https://dummyimage.com/720x400",
      },
    },
  ];
  return (
    <>
      <Navbar/>
      <BlogTables blogs={blogs}/>
      <BlogCards blogs={blogs}/>
    </>
  )
}

export default App
