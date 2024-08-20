import AppBar from './AppBar'
import { Avatar } from './BlogsCard'
import { Blog } from '../hooks'

const FullBlog = ({blog} : {blog: Blog}) => {
    const date = new Date(blog.createdAt);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

console.log(formattedDate);
  return <div>
    <AppBar/>
    <div className='flex justify-center'>
        <div className='grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12'>
            <div className='col-span-8'>
            <div className='text-5-xl font-extrabold'>
                {blog.title}
            </div>
            <div className='text-slate-500 pt-2'>Post on {formattedDate}</div>
            <div className='pt-4'>{blog.content}</div>
        </div>
        <div className='col-span-4'>
            <div className='flex w-full'>
                <div className='pr-4 flex flex-col justify-center'>
                    <Avatar size='big' name={blog.author.name || "Anonymous"}/>
                </div>
                <div>
                    <div className='text-xl font-bold'>
                        {blog.author.name || "Anonymous"}
                    </div>
                    <div className='pt-2 text-slate-500'>
                        Turning every scroll into a story that hooks you from the first line.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
}

export default FullBlog