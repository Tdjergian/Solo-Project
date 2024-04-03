import React from "react";

export default function Ticket({ title, status, tags, comments }){
    const commentSection = [];
    comments.forEach(comment => {
        commentSection.push(<div>{comment}</div>)
    });
    const tagSection = [];
    tags.forEach(tag => {
        tagSection.push(<div>{tag}</div>)
    });


    return (
        <> 
            <div>{title}</div>
            <div>{status}</div>
            <div>{commentSection}</div>
            <div>{tagSection}</div>
            
        </>
    )
};