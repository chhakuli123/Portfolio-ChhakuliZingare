import { Blog } from "./Blog";
import "./blog.css"
import { blogsData } from "../../utils";

export const Blogs = () => {
    return (
        <div id="blogs" className='blogs'>
            <div className='faint-heading'>&lt; Blogs /&gt;</div>
            <div className='projects-container'>
                {blogsData.map(item => <Blog key={item.id} {...item} />)}
            </div>
        </div>
    );
};