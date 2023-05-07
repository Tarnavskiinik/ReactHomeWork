import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums', {
            params: {
                userId: userId
            }
        })
            .then(response => {
                setAlbums(response.data);
            })
            .catch(error => {
                console.error('Error fetching album list:', error);
            });
    }, [userId]);

    return (
        <div>
            <h1>Album List</h1>
            {albums.map(album => (
                <div key={album.id}>
                    <p>{album.title}</p>
                    <Link to={`/photos/${album.id}`}>Photos</Link>
                </div>
            ))}
        </div>
    );
};

export default AlbumList;