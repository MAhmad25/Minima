import { Link } from "react-router-dom";
import { Post, Input } from "../components/index";
import { useEffect, useRef } from "react";
// import documentService from "../app/DocService";
const Posts = () => {
      const searchPost = useRef(null);
      //TODO: I can make a hook for all the document Service
      //TODO: It will accept the method and return the results
      // TODO: Also I have to give the dependency array and empty for some cases
      // ! Its working perfectly fine it is returning the object
      // const showAllPosts = async () => {
      //       const { documents } = await documentService.listPosts();
      //       console.log(documents);
      // };
      // useEffect(() => {
      //       showAllPosts();
      // }, []);
      return (
            <section className="w-full space-y-16 px-5 min-h-screen py-10 font-primary-text  text-[var(--color-bl)] bg-[var(--color-wht)]">
                  <div className=" flex justify-center items-center flex-col gap-10  w-full">
                        <h1 className="font-black text-5xl sm:text-7xl tracking-tight  font-cool text-center">Journals</h1>
                        <p className="font-ppneue sm:w-1/2 text-center  text-xl sm:text-2xl ">Explore our collection of articles, stories, and insights on design, technology, and creativity.</p>
                  </div>
                  {/* Tags */}
                  <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between">
                        <div className="flex h-fit gap-3 flex-wrap w-3/4">
                              {["All", "Design", "Technology", "Creativity", "Business", "Accessibility"].map((tag, index) => (
                                    <Link to={`/category/${tag}`} key={index} className="px-3 py-1 border-[1px] text-lg rounded-full tracking-tight leading-none">
                                          {tag}
                                    </Link>
                              ))}
                        </div>
                        <Input type={"text"} placeholder={"Search post"} ref={searchPost} />
                  </div>
                  {/* All Posts */}
                  <section className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                  </section>
            </section>
      );
};

export default Posts;
