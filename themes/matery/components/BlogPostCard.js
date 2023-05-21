import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import TagItemMini from './TagItemMini'
import CONFIG_MATERY from '../config_matery'
import TwikooCommentCount from '@/components/TwikooCommentCount'
// import Image from 'next/image'

const BlogPostCard = ({ post, showSummary, siteInfo }) => {
  // matery 主题默认强制显示图片
  if (post && !post.page_cover) {
    post.page_cover = siteInfo?.pageCover
  }
  
  return (
    <li
        key={post.id}
        className="border-l-2 p-3 text-xs md:text-base lg:text-xl items-center  hover:scale-x-105 hover:border-indigo-500 dark:hover:border-indigo-300 dark:border-indigo-400 transform duration-500"
    >
        <div id={post?.date?.start_date} className="inline">
            <span className="text-gray-400">{post.date?.start_date}</span>{' '}
            &nbsp;
            <Link
                href={`${BLOG.SUB_PATH}/${post.slug}`}
                passHref
                className="dark:text-gray-400  dark:hover:text-indigo-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">

                {post.title}

            </Link>
            
        </div>
        {post?.tagItems && post?.tagItems.length > 0 && (<>
            <div className="text-gray-400 justify-between inline px-5">
                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                    <div>
                        {' '}
                        {post.tagItems.map(tag => (
                            <TagItemMini key={tag.name} tag={tag} />
                        ))}
                    </div>
                </div>
            </div>
        </>)}
    </li>
        
  )
}

export default BlogPostCard
