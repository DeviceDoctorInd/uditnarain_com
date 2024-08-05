import React, { useState } from 'react';
import { Skeleton, Stack, Image, Box } from '@chakra-ui/react';

const ImageLoader = ({ src, className }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        setLoading(false);
        setError(true);
    };

    return (
        <Box className={className} position="relative">
            {loading && (
                <Stack>
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                </Stack>
            )}
            {!loading && error && <Image  src="../assets/l2.png" alt="404" />}
            <Image
                src={src}
                onLoad={handleLoad}
                onError={handleError}
                display={loading || error ? 'none' : 'block'}
                className={className}
            />
        </Box>
    );
};

export default ImageLoader;
