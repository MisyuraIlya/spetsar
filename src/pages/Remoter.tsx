import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DirectoriesService } from '../services/directories.services';

const Remoter = () => {
    const [local, setLocal]= useState('')

    const handle = async () => {
        const res = await DirectoriesService.getInitialDirectory()
        console.log('Initial',res)
    }

    const contents = async () => {
        const res = await DirectoriesService.getDirectoryContents("/Users/spetsar/projects/spetsar")
        console.log('contents',res)
    }

    const parent = async () => {
        const res = await DirectoriesService.goToParentDirectory("/Users/spetsar/projects/spetsar")
        console.log('parent',res)
    }

    const folder = async () => {
        const res = await DirectoriesService.openDirectory("/Users/spetsar/projects")
        console.log('folder',res)
    }

    useEffect(() => {
        handle()
        contents()
        parent()
        folder()
    },[])
    return (
        <Box>
            Remoter
        </Box>
    );
};

export default Remoter;