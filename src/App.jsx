import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AlbumList from "./pages/AlbumList";
import PhotoList from "./pages/PhotoList";
import UserList from "./pages/UserList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/albums/:userId" element={<AlbumList />} />
                <Route path="/photos/:albumId" element={<PhotoList />} />
            </Routes>
        </Router>
    );
};

export default App;