import { defineQuery } from "next-sanity";

export const STARTUP_QUIRY = defineQuery(`
    *[_type == 'startup' && defined(slug.current)] | order(_createdAt desc){
        _id,
        title,
        slug,
        category,
        author -> {
        _id,
        name,
        image,
        bio
        },
        pitch,
        image,
        description,
        slug,
        views
    }     
`)