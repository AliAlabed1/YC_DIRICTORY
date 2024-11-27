import { defineQuery } from "next-sanity";

export const STARTUP_QUIRY = defineQuery(`
    *[_type == 'startup' && defined(slug.current) && !defined($search) || category match $search || author->name match $search || title match $search] | order(_createdAt desc){
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
        image,
        description,
        slug,
        views
    }     
`)

export const STARTUP_BY_ID_QUERY = defineQuery(`
    *[_type == 'startup' && _id == $id]{
        _id,
        title,
        slug,
        category,
        author -> {
            _id,
            name,
            image,
            bio,
            username
        },
        pitch,
        image,
        description,
        slug,
        views,
        _createdAt

    } 
`)