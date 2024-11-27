import { formateDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/quiries';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const experimental_ppr = true;
const page = async ( {params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id
    
    let post = await client.fetch(STARTUP_BY_ID_QUERY,{id})
    console.log(post)
    return (
        <>
            <section className='pink_container !min-h-[230px]'>
                <p className='tag'>{formateDate(post[0]?._createdAt)}</p>
                <h1 className='heading'>{post[0]?.title}</h1>
                <p className='sub-heading !max-w-5xl'>{post[0]?.description}</p>
            </section>
            <section className='section_container'>
                <img 
                    src={post[0].image} 
                    alt="thumbnail"
                    className='w-full h-auto rounded-xl' 
                />
                <div className='space-y-5 mt-10 max-w-4xl mx-auto' >
                    <div className='flex-between gap-5'>
                        <Link href={`/user/${post[0]?.author._id}`} className='flex items-center gap-2 mb-3'>
                            <Image src={post[0]?.author.image} alt="user-profile" width={64} height={64} className='rounded-full drop-shadow-lg'/>
                            <div>
                                <p className='text-20-medium'>
                                    {post[0].author.name}
                                </p>
                                <p className='text-16-medium !text-black-300'>
                                    @{post[0].author.username}
                                </p>
                            </div>
                            
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
