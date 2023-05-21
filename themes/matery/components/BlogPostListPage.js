import BlogPostCard from './BlogPostCard'
import BLOG from '@/blog.config'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationSimple from './PaginationSimple'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], categoryPosts = [], postCount, siteInfo }) => {
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
  const showPagination = postCount >= BLOG.POSTS_PER_PAGE
  posts = categoryPosts

  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div id="container" className='w-full'>
        <div className='pt-6'></div>
        {/* 文章列表 */}
        <div className="pt-4 flex flex-wrap pb-12" >
          {Object.keys(categoryPosts).map(cateTitle => (
            <div>
              <div
                className="pt-8 pb-4 text-3xl dark:text-gray-300"
                id={cateTitle}
              >
                {cateTitle}
              </div>
              <ul className="w-full">
                {categoryPosts[cateTitle].map(post => (
                  <div key={post.id} className='w-full'> <BlogPostCard  post={post} siteInfo={siteInfo} /></div>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        {showPagination && <PaginationSimple page={page} totalPage={totalPage} />}
      </div>
    )
  }
}

export default BlogPostListPage
