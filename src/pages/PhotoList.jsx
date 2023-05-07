import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
                albumId: albumId
            }
        })
            .then(response => {
                setPhotos(response.data);
            })
            .catch(error => {
                console.error('Error fetching photo list:', error);
            });
    }, [albumId]);

    return (
        <div>
            <h1>Photo List</h1>
            {photos.map(photo => (
                <div key={photo.id}>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    );
};

export default PhotoList;